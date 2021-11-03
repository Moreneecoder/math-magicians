import { Link } from 'react-router-dom';
import '../stylesheets/NavBar.css';

const NavBar = () => (
  <div className="NavBar">
    <h1 className="logo">mathMagicians</h1>

    <div className="navLinks">
      <Link className="linkItem linkBorder" to="/">Home</Link>
      <Link className="linkItem linkBorder" to="/calculator">Calculator</Link>
      <Link className="linkItem" to="/quotes">Quotes</Link>
    </div>
  </div>
);

export default NavBar;
