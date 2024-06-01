import Logo from "../assets/logo3.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link className="logo" to="/">
        <img src={Logo} alt="LaunchSTEM Logo" />
        <h1>LaunchSTEM</h1>
      </Link>
      <section className="links">
        <Link to="/about">About</Link>
        <Link to="/team">Our Team</Link>
        <Link>Get Started</Link>
        <Link>Contact</Link>
      </section>
    </nav>
  );
};

export default Navbar;
