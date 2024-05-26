// - How LaunchSTEM started
// - Restate mission statement
// - What we are currently doing and future ideas (Expansion)
import Rocket from "../assets/rocket.png";
import PHold from "../assets/placeholder.jpg";
import { useState } from "react";

const About = () => {
  const [progNum, setProgNum] = useState(1);
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
          <img src={PHold} alt="Placeholder" />
        </article>
      </section>
      <h1 className="seperator">. . .</h1>
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
      <h1 className="seperator">. . .</h1>
      <div className="program-cont">
        <section className="programs">
          <h1>Our Programs</h1>
          <div style={{ display: "flex", height: "100%" }}>
            <div className="program-list">
              <p
                onClick={() => {
                  setProgNum(1);
                }}
              >
                Program 1
              </p>
              <p
                onClick={() => {
                  setProgNum(2);
                }}
              >
                Program 2
              </p>
              <p
                onClick={() => {
                  setProgNum(3);
                }}
              >
                Program 3
              </p>
            </div>
            <div className="program-desc">
              {progNum === 1 && (
                <p>
                  Program 1 Description / Overview - Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              )}
              {progNum === 2 && (
                <p>
                  Program 2 Description / Overview - Duis quis semper justo, non
                  pulvinar dolor.
                </p>
              )}
              {progNum === 3 && (
                <p>
                  Program 3 Description / Overview - Curabitur non lobortis
                  augue. Ut viverra ante id maximus feugiat.
                </p>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
