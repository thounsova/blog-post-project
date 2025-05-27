import { Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact/contact";
import Home from "./Pages/Home/Home";
import Productblog from "./Pages/productblog/productblog";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Sponsor from "../src/Pages/sponsor/sponsor";

const AppRoute = () => {
  return (
    // Fixed return statement (was missing parentheses and had extra curly braces)
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productblog" element={<Productblog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/register" element={<Register />} />

      <Route path="/sponsor" element={<Sponsor />} />
    </Routes>
  );
};

export default AppRoute;
