import "./Tutoring.css";
import isMobile from "is-mobile";
import { PiBooksThin } from "react-icons/pi";
import { BsArrowsFullscreen } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";

const Tutoring = () => {
  const large = useMediaQuery({ query: "(max-width: 882px)" });
  const medium = useMediaQuery({ query: "(max-width: 658px)" });
  const small = useMediaQuery({ query: "(max-width: 498px)" });

  // Determine the width based on the matched media query
  let iframeWidth;

  if (small) {
    iframeWidth = 275;
  } else if (medium) {
    iframeWidth = 350;
  } else if (large) {
    iframeWidth = 500;
  } else {
    iframeWidth = 700; // Default width for screens larger than 882px
  }

  return (
    <div className="tutor">
      <h1 className="heading">Tutoring</h1>
      <h2 className="question">
        Are you a student interested in recieving free tutoring for STEM related
        subjects?
      </h2>
      <section
        className="workshop-features"
        style={{ pointerEvents: isMobile() ? "none" : "auto" }}
      >
        <article className="feature">
          <PiBooksThin />
          <aside className="description">
            <h2>Alberta Curriculum</h2>
            <p>
              Group and individual tutoring sessions aligned with the Alberta
              curriculum, providing up-to-date, targeted support in math and
              science.
            </p>
          </aside>
        </article>
        <article className="feature">
          <BsArrowsFullscreen />
          <aside className="description">
            <h2>Flexible Tutoring Options</h2>
            <p>
              Tutoring sessions are held online and available after school
              hours, ensuring accessibility for everyone.
            </p>
          </aside>
        </article>
      </section>
      <section className="wform">
        <div className="background">
          Fill Out The Form Below:
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdqkszembzsTEbYhWTLieWxMXDVZlIsua2lWEs8UBAG5QGhWw/viewform?embedded=true"
            width={iframeWidth}
            height="800"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="Tutoring Form"
          >
            Loading…
          </iframe>
        </div>
      </section>
    </div>
  );
};

export default Tutoring;
