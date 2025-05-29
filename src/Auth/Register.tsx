import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // 👈 useNavigate imported

interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface ValidationErrors {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export default function Register() {
  const [formData, setFormData] = useState<RegisterFormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [apiError, setApiError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // 👈 initialize navigate

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);
    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:1337/api/auth/local/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formData.username,
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        let message = data?.error?.message || "Registration failed";
        if (
          message.toLowerCase().includes("email") &&
          message.toLowerCase().includes("taken")
        ) {
          message = "Email or Username is already in use";
        }
        throw new Error(message);
      }

      // Save user data to localStorage
      localStorage.setItem(
        "userData",
        JSON.stringify({
          email: data.user.email,
          isLoggedIn: true,
          loginTime: Date.now(),
        })
      );

      // Redirect to home page
      navigate("/"); // 👈 go to home page after registration
    } catch (error: any) {
      setApiError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Register</h2>

        {apiError && (
          <p className="text-red-500 text-sm text-center">{apiError}</p>
        )}

        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          className="w-full border px-4 py-2 rounded"
        />
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username}</p>
        )}

        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          type="email"
          className="w-full border px-4 py-2 rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          type="password"
          className="w-full border px-4 py-2 rounded"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}

        <input
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          type="password"
          className="w-full border px-4 py-2 rounded"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Registering..." : "Submit"}
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}
