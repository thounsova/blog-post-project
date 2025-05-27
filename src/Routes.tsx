import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/contact";
import Productblog from "./Pages/productblog/productblog";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
<<<<<<< HEAD
import Sponsor from "../src/Pages/sponsor/sponsor";
=======
import About from "./Pages/About/about";
import CreateBlog from "./Auth/createblog";
import ProfilePage from "./Auth/profile";
import BlogPage from "./Pages/Detail/components/detailblog";
>>>>>>> 6cb0f0fd5918763c6bd912d3fbd612badb9e3f26

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productblog" element={<Productblog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
<<<<<<< HEAD

      <Route path="/sponsor" element={<Sponsor />} />
=======
      <Route path="/create-blog" element={<CreateBlog />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs/:documentId" element={<BlogPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/contact" element={<Contact />} />
>>>>>>> 6cb0f0fd5918763c6bd912d3fbd612badb9e3f26
    </Routes>
  );
};

export default AppRoute;
