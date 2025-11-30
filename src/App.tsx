import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Header from "./components/layout/Header";
import BottomNavigationBar from "./components/layout/BottomNavigationBar";
import Tasks from "./pages/Tasks";

export default function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>

      <BottomNavigationBar />
    </Router>
  );
}
