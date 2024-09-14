import { NavLink } from "react-router-dom";
import './NavBar.css';
const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink className="NavLink" to="/">Home</NavLink>
      <NavLink className="NavLink" to="/about">About</NavLink>
    </div>
  )
}

export default Navbar