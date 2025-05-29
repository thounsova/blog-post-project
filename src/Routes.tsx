import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/contact";
import Productblog from "./Pages/productblog/productblog";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import About from "./Pages/About/about";
import Detail from "./Pages/Detail/components/detailblog";
import CreateBlog from "./Auth/createblog";
import ProfilePage from "./Auth/profile";
import AuthLayout from "./Layout/AuthLayout";
import AuthorPage from "./Pages/Author/AuthorPage";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/author/:username" element={<AuthorPage />} />
      <Route path="/author/:authorId" element={<AuthorPage />} />
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
      <Route path="/blog/:documentId" element={<Detail />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoute;
