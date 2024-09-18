import { NavLink } from "react-router-dom";
import './NavBar.css';
const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink className="NavLink" to="/home">Home</NavLink>
      <NavLink className="NavLink" to="/about">About</NavLink>
    </div>
  )
}

export default Navbar