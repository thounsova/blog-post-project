import { Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact/contact";
import Home from "./Pages/Home/Home";
import Productblog from "./Pages/productblog/components/blogCardGrid";
import Pro from "./Pages/productblog/components/hero";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

const AppRoute = () => {
  return (
    // Fixed return statement (was missing parentheses and had extra curly braces)
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productblog" element={<Productblog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoute;
