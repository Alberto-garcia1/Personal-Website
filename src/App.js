import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Personal-Website" element={<Home />} />
          <Route path="/Personal-Website/projects" element={<Projects />} />
          <Route path="/Personal-Website/project/:id" element={<ProjectDisplay />} />
          <Route path="/Personal-Website/education" element={<Education />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
