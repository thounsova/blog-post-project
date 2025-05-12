import React from "react";
import LoginBackground from "../assets/bg.png";

const Login = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
      style={{ backgroundImage: `url(${LoginBackground})` }}
    >
      <div className="bg-[#054057] bg-opacity-90 rounded-2xl shadow-xl p-8 w-80">
        <h2 className="text-2xl font-bold text-white mb-6">Login</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 rounded-md bg-purple-500 bg-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-md bg-purple-500 bg-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="text-right text-sm text-gray-300 hover:underline cursor-pointer">
            Forget Password?
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-2 rounded-md transition duration-300"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-white">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
