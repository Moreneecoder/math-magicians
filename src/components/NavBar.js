import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="Navbar">
    <h1 className="logo">Math Magicians</h1>

    <div className="navLinks">
      <Link to="/">Home</Link>
      <Link to="/calculator">calculator</Link>
      <Link to="/quotes">Quotes</Link>
    </div>
  </div>
);

export default NavBar;
