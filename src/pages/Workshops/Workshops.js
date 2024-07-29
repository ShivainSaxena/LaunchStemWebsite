import "./Workshops.css";
import { IoSchoolOutline } from "react-icons/io5";
import { SlGlobe } from "react-icons/sl";
import { TfiAgenda } from "react-icons/tfi";
import isMobile from "is-mobile";
import { useMediaQuery } from "react-responsive";

const Workshops = () => {
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
    <>
      <h1 className="heading">Workshops</h1>
      <h2 className="question">
        Are you a teacher or school interested in having a LaunchSTEM workshop
        in your school?
      </h2>
      <section
        className="workshop-features"
        style={{ pointerEvents: isMobile() ? "none" : "auto" }}
      >
        <article className="feature">
          <IoSchoolOutline />
          <aside className="description">
            <h2>In-Person Presentations</h2>
            <p>
              Engaging lessons with hands-on activities and games, enriching the
              subject knowledge desired by the teacher.
            </p>
          </aside>
        </article>
        <article className="feature">
          <SlGlobe />
          <aside className="description">
            <h2>Online Presentations</h2>
            <p>
              Live lessons enhanced with interactive online activities, ensuring
              comprehension and subject retention.
            </p>
          </aside>
        </article>
        <article className="feature">
          <TfiAgenda />
          <aside className="description">
            <h2>Custom Lesson Plans</h2>
            <p>Tailored lesson plans for specific teaching material.</p>
          </aside>
        </article>
      </section>
      <section className="wform">
        <div className="background">
          Fill Out The Form Below:
          <iframe
            title="Workshop Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfUwukkkmMReL-oWgyt9RMkOXRQO4-PTvGbAqwuwETRLM_CvA/viewform?embedded=true"
            width={iframeWidth}
            height="800"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
      </section>
    </>
  );
};

export default Workshops;
