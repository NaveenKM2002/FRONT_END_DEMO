import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/header.css";

function Header() {
  const [dark, setDark] = useState(false);

  // Load saved theme on first render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      setDark(true);
    }
  }, []);

  function toggleTheme() {
    const newTheme = dark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setDark(!dark);
  }

  return (
    <header className="header">
      <div className="logo">KOI</div>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/platform">Platform</Link>
        <Link to="/company">Company</Link>
      </nav>

      <div style={{ display: "flex", gap: "12px" }}>
        <button onClick={toggleTheme} className="demo-btn">
          {dark ? "Light Mode" : "Dark Mode"}
        </button>

        <Link to="/demo" className="demo-btn">
          Request Demo
        </Link>
      </div>
    </header>
  );
}

export default Header;
