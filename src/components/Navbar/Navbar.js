import Logo from "../../assets/logo.webp";
import Name from "../../assets/logo-title.webp";
import { Link } from "react-router-dom";
import { Dropdown, Drawer } from "antd";
import "./Navbar.css";
import MediaQuery from "react-responsive";
import { useState } from "react";
import { BsList } from "react-icons/bs";

const Navbar = () => {
  const items = [
    {
      key: "1",
      label: (
        <Link to="/workshops" className="drop-links">
          Workshops
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link to="/tutoring" className="drop-links">
          Tutoring
        </Link>
      ),
    },
  ];

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const mobileLinks = [
    {
      link: "/about",
      name: "About",
    },
    {
      link: "/team",
      name: "Our Team",
    },
    {
      link: "/workshops",
      name: "Workshops",
    },
    {
      link: "/tutoring",
      name: "Tutoring",
    },
    {
      link: "https://learn.launchstem.org/",
      name: "Learning Modules",
      external: true,
    },
    {
      link: "/volunteer",
      name: "Volunteer Now",
    },
    {
      link: "/contact",
      name: "Contact",
    },
  ];

  return (
    <>
      <MediaQuery minWidth={1310}>
        <nav>
          <Link className="logo-group" to="/">
            <img src={Logo} alt="LaunchSTEM Logo" />
            <img src={Name} alt="LaunchSTEM Name" />
          </Link>
          <section className="links">
            <Link to="/about" className="underline-anim">
              About
            </Link>
            <Link to="/team" className="underline-anim">
              Our Team
            </Link>
            <Dropdown
              menu={{
                items,
              }}
              arrow={true}
            >
              <Link>Programs</Link>
            </Dropdown>
            <a
              className="underline-anim"
              href="https://learn.launchstem.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learning Modules
            </a>
            <Link className="underline-anim" to="/volunteer">
              Volunteer Now
            </Link>
            <Link className="underline-anim" to="/contact">
              Contact
            </Link>
          </section>
        </nav>
      </MediaQuery>
      <MediaQuery maxWidth={1309}>
        <nav>
          <Link className="logo-group" to="/">
            <img src={Logo} alt="LaunchSTEM Logo" />
            <img src={Name} alt="LaunchSTEM Name" />
          </Link>

          <div className="drawer-btn" onClick={showDrawer}>
            <BsList />
          </div>
          <Drawer
            onClose={onClose}
            open={open}
            placement="right"
            className="nav-drawer"
            width={250}
          >
            <section className="drawer-links">
              {mobileLinks.map((o, i) => {
                if (o.external) {
                  return (
                    <a
                      key={i}
                      href={o.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                    >
                      {o.name}
                    </a>
                  );
                }
                return (
                  <Link key={i} to={o.link} onClick={() => setOpen(false)}>
                    {o.name}
                  </Link>
                );
              })}
            </section>
          </Drawer>
        </nav>
      </MediaQuery>
    </>
  );
};

export default Navbar;
