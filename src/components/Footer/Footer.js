import "./Footer.css";
import title from "../../assets/logo-title.webp";
import logo from "../../assets/logo.webp";
import { Link } from "react-router-dom";
import { SiInstagram, SiLinkedin, SiLinktree } from "react-icons/si";
import { useState } from "react";
import toast from "react-hot-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setEmail("");
    setLoading(true);
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwldsBVJ3oRqe_nhixoaaGuXeZbkfZXqlgUxPZnvM1CPhKs2BAmPhOBdFfH-ze8c1mKaw/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            email: email,
          }),
        }
      );

      const result = await response.text();

      if (response.ok) {
        toast.success(
          "Success! You have been subscribed to the newsletter. Thank you!"
        );
      } else {
        console.log(result);
        toast.error(
          "Oops! Something went wrong while subscribing you to the newsletter. Please try again later."
        );
      }
    } catch (error) {
      console.log(error);
      toast.error(
        "Oops! Something went wrong while subscribing you to the newsletter. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

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
          <p>587-778-9693</p>
          <p>Edmonton, Alberta</p>
          <section className="social">
            <h1>Social</h1>
            <div>
              <a
                href="https://www.instagram.com/launchstem/"
                target="_blank"
                rel="noreferrer"
              >
                <SiInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/launchstem/?viewAsMember=true"
                target="_blank"
                rel="noreferrer"
              >
                <SiLinkedin />
              </a>
              <a
                href="https://linktr.ee/launchstem"
                target="_blank"
                rel="noreferrer"
              >
                <SiLinktree />
              </a>
            </div>
          </section>
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
        <section className="subscribe">
          <h1>Subscribe</h1>
          <p>
            Subscribe to our newsletter and get the latest news and updates from
            us.
          </p>
          <div className="subscribe-submit">
            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                disabled={loading}
                className={loading ? "loading-spinner" : ""}
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
          <p id="copyright">© LaunchSTEM 2024 - All Rights Reserved</p>
        </section>
      </footer>
    </>
  );
};

export default Footer;
