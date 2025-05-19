import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router";
import image from "../assets/mmmm.ico";

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
  general?: string;
}

interface UserData {
  email: string;
  username: string;
  isLoggedIn: boolean;
  loginTime: number;
  jwt: string;
}

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

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const parsedUserData: UserData = JSON.parse(userData);
      if (parsedUserData.isLoggedIn && parsedUserData.jwt) {
        navigate("/");
      }
    }
  }, [navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    else if (formData.username.length < 3)
      newErrors.username = "Username must be at least 3 characters";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    else if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

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
            : "Registration failed. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center  justify-center px-4 py-10">
      <div className=" shadow-lg rounded-lg flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
        {/* Left section */}
        <div className="bg-gradient-to-b from-orange-400 to-yellow-400 text-white flex flex-col justify-center items-center p-8 md:w-1/2">
          <div className="text-center space-y-4">
            <img
              src={image}
              alt="Logo"
              className="w-24 h-24 mx-auto object-contain rounded-full shadow-lg"
            />
            <h2 className="text-xl font-semibold">Join Us</h2>
            <p className="text-sm">
              Subscribe Easy Tutorials YouTube Channel to watch more videos
            </p>
            <button className="mt-3 px-5 py-2 bg-white text-orange-600 rounded-full shadow hover:shadow-md text-sm font-semibold">
              About Us
            </button>
          </div>
        </div>

        {/* Right section - Form */}
        <div className="bg-white p-6 md:p-10 md:w-1/2">
          <h2 className="text-xl text-bold  font-semibold text-center mb-6">
            Register
          </h2>
          {errors.general && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 rounded text-sm">
              {errors.general}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className={`w-full px-4 py-2 border rounded text-sm ${
                errors.username ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.username && (
              <p className="text-xs text-red-500">{errors.username}</p>
            )}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`w-full px-4 py-2 border rounded text-sm ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email}</p>
            )}

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className={`w-full px-4 py-2 border rounded text-sm ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password}</p>
            )}

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className={`w-full px-4 py-2 border rounded text-sm ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-xs text-red-500">{errors.confirmPassword}</p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-orange-600 transition"
            >
              {isLoading ? "Registering..." : "Register"}
            </button>
            <p className="text-center text-sm mt-2">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
