import Hero from "./components/hero";
import Card from "./components/Card-Publishers";
import Step from "./components/Step-card";
import Feedback from "./components/feedback";
import Pub from "./components/Blog";
import Cardblog from "./components/card-blog"; // Corrected import statement
// Corrected import statement

function App() {
  return (
    <>
      <Hero />
      <Cardblog />
      <Pub />

      <Card />

      <Step />
      <Feedback />
      {/* Add any additional components or sections here */}
    </>
  );
}

export default App;
