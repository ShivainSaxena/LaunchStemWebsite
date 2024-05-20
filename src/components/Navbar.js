import Logo from "../assets/logo3.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <section className="logo">
        <img src={Logo} alt="LaunchSTEM Logo" />
        <h1>LaunchSTEM</h1>
      </section>
      <section className="links">
        <Link>Link 1</Link>
        <Link>Link 2</Link>
        <Link>Link 3</Link>
        <Link>Link 4</Link>
      </section>
    </nav>
  );
};

export default Navbar;
