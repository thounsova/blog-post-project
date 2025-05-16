import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/contact";
import Productblog from "./Pages/productblog/productblog";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Detail from "./Pages/Detail/detail";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productblog" element={<Productblog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
};

export default AppRoute;
