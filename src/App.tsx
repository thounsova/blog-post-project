import "./App.css";
import { ThemeProvider } from "./Layout/ThemeProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoute from "./Routes";
import DefaultLayout from "./Layout/DefaultLayout";
import ScrolledProgressBar from "./components/ProgressBar/ScrolledProgressBar";

function App() {
  return (
    <DefaultLayout>
      <ThemeProvider>
        <Navbar />
        <ScrolledProgressBar />

        {/* Main content */}
        <main>
          <AppRoute />
        </main>
      
        <Footer />
      </ThemeProvider>
    </DefaultLayout>
  );
}

export default App;
