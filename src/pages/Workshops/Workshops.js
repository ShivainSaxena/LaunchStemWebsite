import "./Workshops.css";
import { IoSchoolOutline } from "react-icons/io5";
import { SlGlobe } from "react-icons/sl";
import { TfiAgenda } from "react-icons/tfi";
import isMobile from "is-mobile";

const Workshops = () => {
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
          <p>
            If you are a teacher or educator interested in our workshops, please
            email{" "}
            <a className="contact-email" href="mailto:launchstem.org@gmail.com">
              launchstem.org@gmail.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Workshops;
