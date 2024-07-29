import "./Landing.css";
import { Link } from "react-router-dom";
import { Carousel } from "antd";
import C1 from "../../assets/carousel1.webp";
import C2 from "../../assets/carousel2.webp";
import C3 from "../../assets/carousel3.webp";
import C4 from "../../assets/carousel4.webp";
import C5 from "../../assets/carousel5.webp";
import { useRef, useState, useEffect } from "react";
import R1 from "../../assets/release1.webp";
import R2 from "../../assets/release2.webp";
import Splash from "../../assets/image3.webp";
import Marquee from "react-fast-marquee";
import isMobile from "is-mobile";
import { useMediaQuery } from "react-responsive";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";
import Loader from "../../components/Loader/Loader";

const Landing = () => {
  const [isLoading, setIsLoading] = useState(true);

  const elementRef = useRef(null);
  const [width, setWidth] = useState(0);

  const { ref: inViewRef, inView } = useInView({
    threshold: 1.0, // Ensure the entire element is in view
    triggerOnce: true, // Only trigger once
  });

  useEffect(() => {
    const img = new Image();
    img.src = C1; // Use the imported image
    img.onload = () => {
      setIsLoading(false);
    };
  }, []);

  const updateWidth = () => {
    if (elementRef.current) {
      setWidth(elementRef.current.getBoundingClientRect().width);
    }
  };

  useEffect(() => {
    // Set the initial width
    updateWidth();

    // Update the width on window resize
    window.addEventListener("resize", updateWidth);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const isSmall = useMediaQuery({
    query: "(max-width: 1000px)",
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <h1 className="headline">
        Launching the Next Generation of STEM Leaders
        <img className="backsplash" src={Splash} alt="Backsplash" />
        <div className="overlay"></div>
      </h1>
      <h2 className="main-sub">
        At LaunchSTEM, we believe that by fostering a love for STEM, we are
        equipping students with the knowledge and skills they need to shape a
        brighter future for themselves and the world. Together, we launch the
        next generation of STEM leaders.
      </h2>
      <div className="action">
        <Link to="/tutoring">Tutoring</Link>
        <Link to="/workshops">Workshops</Link>
        <Link to="/volunteer">Volunteer</Link>
      </div>

      <div className="carousel-cont">
        {inView ? (
          <TypeAnimation
            sequence={["Inspiring Young Minds", 500]}
            speed={50}
            cursor={false}
            className="carousel-header"
          />
        ) : (
          <div className="carousel-header"></div>
        )}

        <Carousel arrows className="img-carousel" autoplay>
          <img src={C1} alt="Carousel 1" />
          <img src={C2} alt="Carousel 2" />
          <img src={C3} alt="Carousel 3" />
          <img src={C4} alt="Carousel 4" />
          <img src={C5} alt="Carousel 5" />
        </Carousel>
        <div className="checkpoint" ref={inViewRef}></div>
      </div>

      <section className="impact">
        <h2>Overall Impact</h2>
        <div className="stats">
          <article style={{ minWidth: width }}>
            <strong>18</strong>
            <h1>Classes</h1>
          </article>
          <article style={{ minWidth: width }}>
            <strong>320+</strong>
            <h1>Hours Tutored</h1>
          </article>
          <article ref={elementRef}>
            <strong>600+</strong>
            <h1>Students Reached</h1>
          </article>
        </div>
        <h2>Testimonials</h2>
        {isMobile() ? (
          <Marquee
            gradient
            gradientColor="#013c58"
            autoFill
            className="banner"
            speed={isSmall ? 20 : 50}
          >
            <div className="testimonial">
              <svg
                fill="#2f9edd"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>quote</title>{" "}
                  <path d="M9.563 8.469l-0.813-1.25c-5.625 3.781-8.75 8.375-8.75 12.156 0 3.656 2.688 5.375 4.969 5.375 2.875 0 4.906-2.438 4.906-5 0-2.156-1.375-4-3.219-4.688-0.531-0.188-1.031-0.344-1.031-1.25 0-1.156 0.844-2.875 3.938-5.344zM21.969 8.469l-0.813-1.25c-5.563 3.781-8.75 8.375-8.75 12.156 0 3.656 2.75 5.375 5.031 5.375 2.906 0 4.969-2.438 4.969-5 0-2.156-1.406-4-3.313-4.688-0.531-0.188-1-0.344-1-1.25 0-1.156 0.875-2.875 3.875-5.344z"></path>{" "}
                </g>
              </svg>
              <p>
                LaunchSTEM is a dynamic group of individuals who deliver
                effective and engaging classroom presentations. They get
                students excited about learning!
              </p>
            </div>
            <div className="testimonial">
              <svg
                fill="#2f9edd"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>quote</title>{" "}
                  <path d="M9.563 8.469l-0.813-1.25c-5.625 3.781-8.75 8.375-8.75 12.156 0 3.656 2.688 5.375 4.969 5.375 2.875 0 4.906-2.438 4.906-5 0-2.156-1.375-4-3.219-4.688-0.531-0.188-1.031-0.344-1.031-1.25 0-1.156 0.844-2.875 3.938-5.344zM21.969 8.469l-0.813-1.25c-5.563 3.781-8.75 8.375-8.75 12.156 0 3.656 2.75 5.375 5.031 5.375 2.906 0 4.969-2.438 4.969-5 0-2.156-1.406-4-3.313-4.688-0.531-0.188-1-0.344-1-1.25 0-1.156 0.875-2.875 3.875-5.344z"></path>{" "}
                </g>
              </svg>
              <p>
                Hands on activities were really engaging for the kids. Grateful
                for the time and energy of the group to prepare for our
                students.
              </p>
            </div>
            <div className="testimonial">
              <svg
                fill="#2f9edd"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>quote</title>{" "}
                  <path d="M9.563 8.469l-0.813-1.25c-5.625 3.781-8.75 8.375-8.75 12.156 0 3.656 2.688 5.375 4.969 5.375 2.875 0 4.906-2.438 4.906-5 0-2.156-1.375-4-3.219-4.688-0.531-0.188-1.031-0.344-1.031-1.25 0-1.156 0.844-2.875 3.938-5.344zM21.969 8.469l-0.813-1.25c-5.563 3.781-8.75 8.375-8.75 12.156 0 3.656 2.75 5.375 5.031 5.375 2.906 0 4.969-2.438 4.969-5 0-2.156-1.406-4-3.313-4.688-0.531-0.188-1-0.344-1-1.25 0-1.156 0.875-2.875 3.875-5.344z"></path>{" "}
                </g>
              </svg>
              <p>
                My child has grown so much through the support of his tutor.
                Thank you so much for this wonderful program!
              </p>
            </div>
          </Marquee>
        ) : (
          <Marquee
            gradient
            gradientColor="#013c58"
            autoFill
            className="banner"
            pauseOnHover
            speed={isSmall ? 20 : 50}
          >
            <div className="testimonial">
              <svg
                fill="#2f9edd"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>quote</title>{" "}
                  <path d="M9.563 8.469l-0.813-1.25c-5.625 3.781-8.75 8.375-8.75 12.156 0 3.656 2.688 5.375 4.969 5.375 2.875 0 4.906-2.438 4.906-5 0-2.156-1.375-4-3.219-4.688-0.531-0.188-1.031-0.344-1.031-1.25 0-1.156 0.844-2.875 3.938-5.344zM21.969 8.469l-0.813-1.25c-5.563 3.781-8.75 8.375-8.75 12.156 0 3.656 2.75 5.375 5.031 5.375 2.906 0 4.969-2.438 4.969-5 0-2.156-1.406-4-3.313-4.688-0.531-0.188-1-0.344-1-1.25 0-1.156 0.875-2.875 3.875-5.344z"></path>{" "}
                </g>
              </svg>
              <p>
                LaunchSTEM is a dynamic group of individuals who deliver
                effective and engaging classroom presentations. They get
                students excited about learning!
              </p>
            </div>
            <div className="testimonial">
              <svg
                fill="#2f9edd"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>quote</title>{" "}
                  <path d="M9.563 8.469l-0.813-1.25c-5.625 3.781-8.75 8.375-8.75 12.156 0 3.656 2.688 5.375 4.969 5.375 2.875 0 4.906-2.438 4.906-5 0-2.156-1.375-4-3.219-4.688-0.531-0.188-1.031-0.344-1.031-1.25 0-1.156 0.844-2.875 3.938-5.344zM21.969 8.469l-0.813-1.25c-5.563 3.781-8.75 8.375-8.75 12.156 0 3.656 2.75 5.375 5.031 5.375 2.906 0 4.969-2.438 4.969-5 0-2.156-1.406-4-3.313-4.688-0.531-0.188-1-0.344-1-1.25 0-1.156 0.875-2.875 3.875-5.344z"></path>{" "}
                </g>
              </svg>
              <p>
                Hands on activities were really engaging for the kids. Grateful
                for the time and energy of the group to prepare for our
                students.
              </p>
            </div>
            <div className="testimonial">
              <svg
                fill="#2f9edd"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>quote</title>{" "}
                  <path d="M9.563 8.469l-0.813-1.25c-5.625 3.781-8.75 8.375-8.75 12.156 0 3.656 2.688 5.375 4.969 5.375 2.875 0 4.906-2.438 4.906-5 0-2.156-1.375-4-3.219-4.688-0.531-0.188-1.031-0.344-1.031-1.25 0-1.156 0.844-2.875 3.938-5.344zM21.969 8.469l-0.813-1.25c-5.563 3.781-8.75 8.375-8.75 12.156 0 3.656 2.75 5.375 5.031 5.375 2.906 0 4.969-2.438 4.969-5 0-2.156-1.406-4-3.313-4.688-0.531-0.188-1-0.344-1-1.25 0-1.156 0.875-2.875 3.875-5.344z"></path>{" "}
                </g>
              </svg>
              <p>
                My child has grown so much through the support of his tutor.
                Thank you so much for this wonderful program!
              </p>
            </div>
          </Marquee>
        )}

        <h2>Media Releases</h2>
        <div className="releases">
          <a
            href="https://amp.cbc.ca/listen/live-radio/1-52-radio-active/clip/16052158-high-school-students-launch-stem-education-program-kids"
            target="_blank"
            rel="noreferrer"
          >
            <article>
              <h3>CBC Radio Active</h3>
              <img src={R1} alt="CBC Radio Active" />
              <p>
                “A trio from Old Scona high school have created a non-profit to
                teach STEM courses to younger students.”
              </p>
            </article>
          </a>
          <a
            href="https://edmonton.ctvnews.ca/video?clipId=2906477"
            target="_blank"
            rel="noreferrer"
          >
            <article>
              <h3>CTV Morning Live</h3>
              <img src={R2} alt="CTV Morning Live" />
              <p>“Giving back to the community with STEM”</p>
            </article>
          </a>
        </div>
      </section>
    </>
  );
};

export default Landing;
