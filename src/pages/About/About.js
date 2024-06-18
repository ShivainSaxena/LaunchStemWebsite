import Rocket from "../../assets/rocket.webp";
import AboutIMG from "../../assets/about.webp";
import S1W from "../../assets/service1.webp";
import S2W from "../../assets/service2.webp";
import "./About.css";

// TODO: Add placeholder images when the image is still loading to prevent layout shifts and better the UI

const About = () => {
  return (
    <main className="about">
      <section className="org-desc">
        <h1>About LaunchSTEM</h1>
        <article>
          <p>
            LaunchSTEM is a Non-Profit Organization that focuses on empowering a
            diverse range of students to gain interest in STEM related topics.
            Our organization aims to intrigue students with educational material
            taught in various ways, such as hands-on activities, speaking
            activities, and presentations, to deepen their understanding on the
            topics. We strive to provide insight to multiple subjects of
            interest with the goal of furthering their perspective on all the
            opportunities STEM provides that can aid them in the future. Our
            presentations are designed in accordance with the Alberta curriculum
            and can be adjusted to educator preferences. LaunchSTEM provides
            classes of all lengths and durations. We provide additional tutoring
            and assistance outside of class time for any students who may
            require it, all free of cost.
          </p>
          <img src={AboutIMG} alt="LaunchSTEM Cover" />
        </article>
      </section>
      <section className="mission">
        <img src={Rocket} alt="Rocket" />
        <h1>Our Mission</h1>
        <h3>
          At LaunchSTEM, we believe that by fostering a love for STEM, we are
          equipping students with the knowledge and skills they need to shape a
          brighter future for themselves and the world. Together, we launch the
          next generation of STEM leaders.
        </h3>
      </section>
      <section className="service">
        <aside>
          <h1>Workshops</h1>
          <p>
            Launch STEM provides free workshops to public schools which consist
            of engaging material and hands-on activites
          </p>
        </aside>
        <img src={S1W} alt="Workshop" />
      </section>
      <section className="service">
        <aside>
          <h1>Tutoring</h1>
          <p>
            Launchstem volunteers provide free stem tutoring assistance for
            students in K-9
          </p>
        </aside>
        <img src={S2W} alt="Workshop" />
      </section>
    </main>
  );
};

export default About;
