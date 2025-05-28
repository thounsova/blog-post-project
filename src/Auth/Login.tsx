import React, { useState } from "react";
import LoginBackground from "../assets/bg.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type FormData = {
  email: string;
  password: string;
};

type FormErrors = {
  email?: string;
  password?: string;
};

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.password) {
      newErrors.password = "Password is required.";
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post(
        `${apiUrl}/api/auth/local`,
        {
          identifier: formData.email,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("token", response.data.jwt);
      navigate("/src/Auth/profile.tsx");
      navigate("/src/Auth/createblog.tsx");
    } catch (error) {
      console.error("Login failed:", error);
      // Optional: Show a user-friendly error message here
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
      style={{ backgroundImage: `url(${LoginBackground})` }}
    >
      <div className="bg-[#1e0557] bg-opacity-90 rounded-2xl shadow-xl p-8 w-80">
        <h2 className="text-2xl font-bold text-white mb-6">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              className={`w-full px-4 py-2 rounded-md bg-purple-500 bg-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border border-red-500 focus:ring-red-500"
                  : "border border-transparent focus:ring-blue-400"
              }`}
              required
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className={`w-full px-4 py-2 rounded-md bg-purple-500 bg-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 ${
                errors.password
                  ? "border border-red-500 focus:ring-red-500"
                  : "border border-transparent focus:ring-blue-400"
              }`}
              required
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>
          <div className="text-right text-sm text-gray-300 hover:underline cursor-pointer">
            Forget Password?
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-2 rounded-md transition duration-300"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-white">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
