import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/contact";
import Productblog from "./Pages/productblog/productblog";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import About from "./Pages/About/about";
import CreateBlog from "./Auth/createblog";
import ProfilePage from "./Auth/profile";
import AuthLayout from "./Layout/AuthLayout";

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/create-blog" element={<CreateBlog />} />
      </Route>
      <Route path="/" element={<Home />} />
      <Route path="/productblog" element={<Productblog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create-blog" element={<CreateBlog />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoute;
