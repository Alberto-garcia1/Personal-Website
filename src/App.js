import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import Experience from "./pages/Experience";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Navbar component to provide navigation */}
        <Navbar />
        <Routes>
          {/* Route for the Home page */}
          <Route path="/Personal-Website" element={<Home />} />
          {/* Route for the Projects page */}
          <Route path="/Personal-Website/projects" element={<Projects />} />
          {/* Route for displaying individual project details */}
          <Route
            path="/Personal-Website/project/:id"
            element={<ProjectDisplay />}
          />
          {/* Route for the Education page */}
          <Route path="/Personal-Website/experience" element={<Experience />} />
        </Routes>
        {/* Footer component to provide footer information */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
