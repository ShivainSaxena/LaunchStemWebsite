import "./Footer.css";
import title from "../../assets/logo-title.webp";
import logo from "../../assets/logo.webp";
import { Link } from "react-router-dom";
import {
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiLinktree,
} from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer>
        <section className="head">
          <img src={logo} alt="LaunchSTEM Logo" />
          <img src={title} alt="LaunchSTEM" />
        </section>
        <section className="contact">
          <h1>Contact</h1>
          <p>
            <a
              href="mailto:launchstem.org@gmail.com"
              style={{
                color: "var(--sub-text-color)",
                textDecoration: "underline",
              }}
            >
              launchstem.org@gmail.com
            </a>
          </p>
          <p>780-123-4567</p>
          <p>Edmonton, Alberta</p>
        </section>
        <section className="overview">
          <h1>Overview</h1>
          <Link to="/about">About</Link>
          <Link to="/team">Our Team</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/tutoring">Tutoring</Link>
          <Link to="/volunteer">Volunteer Now</Link>
          <Link to="/contact">Contact</Link>
        </section>
        <section className="social">
          <h1>Social</h1>
          <div>
            <SiFacebook />
            <SiInstagram />
            <SiLinkedin />
            <SiLinktree />
          </div>
        </section>
      </footer>
      <p>© LaunchSTEM 2024 - All Rights Reserved</p>
    </>
  );
};

export default Footer;
