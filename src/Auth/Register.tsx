import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router";

// Form data structure
interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Validation errors structure
interface ValidationErrors {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  general?: string;
}

// User data structure
interface UserData {
  email: string;
  username: string;
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

export default function Register() {
  const [formData, setFormData] = useState<RegisterFormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (!formData.username) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
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
      const response = await fetch(
        "http://62.72.46.248:1337/api/auth/local/register",
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
        throw new Error(data.error?.message || "Registration failed");
      }

      const apiResponse = data as ApiResponse;

      // Store user data in localStorage
      const userData: UserData = {
        email: apiResponse.user.email,
        username: apiResponse.user.username,
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
            : "Registration failed. Please try again with different credentials.",
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
        {" "}
        <h1 className="text-2xl font-bold text-center text-dark mb-6">
          Create an Account
        </h1>
        {errors.general && (
          <div className="mb-4 p-2 bg-red-500 bg-opacity-80  rounded-md text-sm">
            {errors.general}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="block text-sm  mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={`w-full px-3 py-2 bg-white/60 border rounded-md text-black placeholder-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF0E4D] ${
                errors.username ? "border-red-500" : ""
              }`}
              placeholder="Choose a username"
            />
            {errors.username && (
              <p className="mt-1 text-red-400 text-xs">{errors.username}</p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="block text-sm mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 bg-white/60 border rounded-md text-black placeholder-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF0E4D] ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="Your email address"
            />
            {errors.email && (
              <p className="mt-1 text-red-400 text-xs">{errors.email}</p>
            )}
          </div>

          <div className="mb-3">
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
                errors.password ? "border-red-500" : ""
              }`}
              placeholder="Create a password"
            />
            {errors.password && (
              <p className="mt-1 text-red-400 text-xs">{errors.password}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm  mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full px-3 py-2 bg-white/60 border rounded-md text-black placeholder-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF0E4D] ${
                errors.confirmPassword ? "border-red-500" : ""
              }`}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-red-400 text-xs">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF0E4D] disabled:opacity-50"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>

          <div className="mt-4 text-center">
            <p className="text-sm ">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:text-blue-700">
                Login here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
