import { Outlet, useNavigate } from "react-router";
import React, { useEffect } from "react";

const AuthLayout: React.FC = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token");

  useEffect(() => {
    // Redirect to login if not authenticated

    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <Outlet />
    </div>
  );
};
export default AuthLayout;
