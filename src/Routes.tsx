import { Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact/contact";
import Home from "./Pages/Home/Home";
import Productblog from "./Pages/productblog/productblog";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Detail from "./Pages/Detail/detail"; // fixed typo here

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productblog" element={<Productblog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/detail" element={<Detail />} /> {/* supports dynamic ID if needed */}
    </Routes>
  );
};

export default AppRoute;
