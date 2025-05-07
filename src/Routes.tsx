import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import StoryGrid from "./Pages/productblog/productblog";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

const AppRoute = () => {
  return (
    // Fixed return statement (was missing parentheses and had extra curly braces)
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productblog" element={<StoryGrid />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoute;
