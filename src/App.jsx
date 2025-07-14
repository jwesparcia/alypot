// App.jsx
import "./index.css";
import { Routes, Route } from "react-router-dom";
import EducationalExperience from "./pages/EducationalExperience";
import Resume from "./pages/Resume";
import ExamplesOfWork from "./pages/ExamplesOfWork";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/educationalexperience" element={<EducationalExperience />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/examplesofwork" element={<ExamplesOfWork />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}
