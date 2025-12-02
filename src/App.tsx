import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Tasks from "./pages/Tasks";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>

      <Footer />
    </Router>
  );
}
