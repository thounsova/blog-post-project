import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router";

// Form data structure
interface LoginFormData {
  identifier: string; // Using identifier instead of email to match Strapi API
  password: string;
}

// Validation errors structure
interface ValidationErrors {
  identifier?: string;
  password?: string;
  general?: string;
}

// User data structure
interface UserData {
  email: string;
  isLoggedIn: boolean;
  loginTime: number;
  jwt: string;
}

// API response structure
interface ApiResponse {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
  };
}

export default function Login() {
  const [formData, setFormData] = useState<LoginFormData>({
    identifier: "",
    password: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const parsedUserData: UserData = JSON.parse(userData);
      if (parsedUserData.isLoggedIn && parsedUserData.jwt) {
        navigate("/");
      }
    }
  }, [navigate]);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!formData.identifier) {
      newErrors.identifier = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.identifier)) {
      newErrors.identifier = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://62.72.46.248:1337/api/auth/local", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: formData.identifier,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || "Authentication failed");
      }

      const apiResponse = data as ApiResponse;

      // Store user data in localStorage
      const userData: UserData = {
        email: apiResponse.user.email,
        isLoggedIn: true,
        loginTime: Date.now(),
        jwt: apiResponse.jwt,
      };

      localStorage.setItem("userData", JSON.stringify(userData));
      navigate("/");
    } catch (error: unknown) {
      setErrors({
        general:
          error instanceof Error
            ? error.message
            : "Authentication failed. Please check your credentials and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
      style={{ backgroundImage: `url()` }}
    >
      <div className="w-full max-w-md p-6 rounded-lg border-2 border-white dark:border-gray-700 dark:bg-gray-800/80 backdrop-blur-sm shadow-2xl transition-colors duration-300">
        <h1 className="text-2xl font-bold text-center text-dark mb-6">
          Welcome back!
        </h1>

        {errors.general && (
          <div className="mb-4 p-2 bg-red-500 bg-opacity-80 rounded-md text-sm">
            {errors.general}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="identifier" className="block text-sm  mb-1">
              Email
            </label>
            <input
              type="email"
              id="identifier"
              name="identifier"
              value={formData.identifier}
              onChange={handleChange}
              className={`w-full px-3 py-2 bg-white/60 border rounded-md text-black placeholder-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF0E4D] ${
                errors.identifier ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Your email address"
            />
            {errors.identifier && (
              <p className="mt-1 text-red-400 text-xs">{errors.identifier}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm  mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-3 py-2 bg-white/60 border rounded-md text-black placeholder-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF0E4D] ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Your password"
            />
            {errors.password && (
              <p className="mt-1 text-red-400 text-xs">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF0E4D] disabled:opacity-50"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>

          <div className="mt-4 text-center">
            <p className="text-sm ">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-blue-500 hover:text-blue-600"
              >
                Register here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
