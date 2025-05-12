import React from "react";
import { useLocation } from "react-router-dom";
import { ThemeProvider } from "./Layout/ThemeProvider"; // <-- Wrap at the top level
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoute from "./Routes";
import DefaultLayout from "./Layout/DefaultLayout";
import ScrolledProgressBar from "./components/ProgressBar/ScrolledProgressBar";

const App: React.FC = () => {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <ThemeProvider>
      {" "}
      {/* ⬅️ ThemeProvider must wrap everything that uses the context */}
      <DefaultLayout>
        {!isAuthPage && <Navbar />}
        {!isAuthPage && <ScrolledProgressBar />}

        <main>
          <AppRoute />
        </main>

        {!isAuthPage && <Footer />}
      </DefaultLayout>
    </ThemeProvider>
  );
};

export default App;
