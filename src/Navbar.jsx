import { Link } from "react-router-dom";
import "./Navbar.css";




function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
          alt="Website Logo"
        />
        <h2>My Website</h2>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;