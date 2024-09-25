import { NavLink } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink className="NavLink" to={"Ethical-Dilemmas/home"}>Home</NavLink>
      <NavLink className="NavLink" to={"Ethical-Dilemmas/about"}>About</NavLink>
    </div>
  );
};

export default Navbar;