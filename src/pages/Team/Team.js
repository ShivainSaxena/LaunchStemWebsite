import { useState } from "react";
import PHW from "../../assets/placeholder.webp";
import EmanW from "../../assets/eman.webp";
import SarasW from "../../assets/saras.webp";
import AmeenaW from "../../assets/ameena.webp";
import ManuthiW from "../../assets/manuthi.webp";
import RuchiW from "../../assets/ruchi.webp";
import ArunimaW from "../../assets/arunima.webp";
import IsabelleW from "../../assets/isabelle.webp";
import ShashwataW from "../../assets/shashwata.webp";
import JazzyW from "../../assets/jazzy.webp";
import AyeshaW from "../../assets/ayesha.webp";
import JadyW from "../../assets/jady.webp";
import "./Team.css";
import { Select } from "antd";
import MediaQuery from "react-responsive";

const Team = () => {
  const [show, setShow] = useState("exec");
  const team = {
    exec: [
      {
        name: "Jazzy",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu lorem non odio finibus viverra. Sed ut augue sollicitudin, semper massa vitae, pretium elit. ",
        image: JazzyW,
      },
      {
        name: "Ayesha",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu lorem non odio finibus viverra. Sed ut augue sollicitudin, semper massa vitae, pretium elit. ",
        image: AyeshaW,
      },
      {
        name: "Jady",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu lorem non odio finibus viverra. Sed ut augue sollicitudin, semper massa vitae, pretium elit. ",
        image: JadyW,
      },
    ],
    outreach: [
      {
        name: "Ruchi",
        description:
          "Hi, I’m Ruchi, a grade 10 student at Lillian Osborne, and I’m part of the LaunchSTEM outreach team. I joined LaunchSTEM because I have a passion for science and like having the ability to share it with others, through both tutoring and outreaching. In my spare time I love reading, dancing, and volunteering in my community. A goal I have is to let our community know about all of the STEM opportunities that are available to youth, with the hope that some will find a love and passion for STEM.",
        image: RuchiW,
      },
      {
        name: "Manuthi",
        description:
          "Hi! I’m Manuthi and some things I love are old movies, 70s/80s music, and animal science. This love of science is why I joined the LaunchSTEM team as I wanted to share my passion and spark interest in STEM in other students. I look forward to working with the rest of the LaunchSTEM team and community to achieve these goals :) A little fun fact about me is that I read 323 books in 2023!",
        image: ManuthiW,
      },
      {
        name: "Shashwata",
        description:
          "Hi everyone, my name is Shashwata, and I will be heading into Grade 11 at Old Scona! I decided to join the LaunchSTEM outreach team particularly because of my positive experiences as a tutor, which contributed to my passion for expanding the wonders of knowledge to all individuals! I hope that as part of the outreach team, we can share this love for knowledge to all! I love listening to music, eating food, and playing games in my spare time! I look forward to watching LaunchSTEM grow and seeing what we accomplish as a team!",
        image: ShashwataW,
      },
    ],
    finance: [
      {
        name: "Eman",
        description:
          "Hi I’m Eman, a grade 12 student at Old Scona. I’ve been a tutor for LaunchSTEM almost two years now and recently joined their finance team! Seeing the impact the organization is able to make on young childrens’ learning really inspired me to become a bigger part of it. A couple hobbies of mine are playing sports, binging Netflix, and hanging out with my friends:)",
        image: EmanW,
      },
      {
        name: "Saras",
        description:
          "I'm a 17 year old grade 11 student at Old Scona Academic. I joined LaunchSTEM because I genuinely believe that every child deserves access to quality education and STEM resources no matter their background. I believe that LaunchSTEM will be the reason that many kids will actually get the education and STEM opportunities they deserve. My free time is spent by a combination of full IB, building hearthear.com, and being Old Scona's resident business club President.",
        image: SarasW,
      },
    ],
    marketing: [
      {
        name: "Isabelle",
        description:
          "Hi! I’m Isabelle, a grade 10 student at Old Scona Academic and I am thrilled to be apart of the LaunchSTEM team! Science is super fun and I want to share that joy with younger kids!! That’s why I joined LaunchSTEM because I want to help these students to learn to love science, which is exactly what they do by offering fun, interactive ways to learn. I enjoy scrapbooking, bullet journaling, listening to music and collecting a variety of things!",
        image: IsabelleW,
      },
      {
        name: "Ameena",
        description:
          "Hello! My name is Ameena, and I'm a Grade 11 student at Old Scona Academic. I joined the LaunchSTEM Team because I want to make STEM accessible to kids across Edmonton. I love fighting for equality, learning about biology, and listening to Taylor Swift!",
        image: AmeenaW,
      },
      {
        name: "Arunima",
        description:
          "Hi, my name is Arunima Chowdhury.! I’m an 11th grade student at Lillian Osborne High School. I joined LaunchSTEM as a due to my passion for science, interest in sharing STEM education to kids, and desire to be part of a team of like-minded people my age. In my free time, I enjoy reading, baking, cooking, making playlists, and watching movies.",
        image: ArunimaW,
      },
    ],
    online: [
      {
        name: "Shivain",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu lorem non odio finibus viverra. Sed ut augue sollicitudin, semper massa vitae, pretium elit. ",
        image: PHW,
      },
    ],
  };

  return (
    <main>
      <h1 className="team-head">Meet the Team!</h1>
      <MediaQuery minWidth={721}>
        <section className="team-links">
          <p
            onClick={() => setShow("exec")}
            className={show === "exec" ? "selected" : ""}
          >
            Executive
          </p>
          <p
            onClick={() => setShow("marketing")}
            className={show === "marketing" ? "selected" : ""}
          >
            Marketing
          </p>
          <p
            onClick={() => setShow("finance")}
            className={show === "finance" ? "selected" : ""}
          >
            Finance
          </p>
          <p
            onClick={() => setShow("outreach")}
            className={show === "outreach" ? "selected" : ""}
          >
            Outreach
          </p>
          <p
            onClick={() => setShow("online")}
            className={show === "online" ? "selected" : ""}
          >
            Online
          </p>
        </section>
      </MediaQuery>
      <MediaQuery maxWidth={720}>
        <section className="mobile-t-links">
          <Select
            defaultValue="exec"
            style={{
              width: "clamp(15.938rem, 13.693rem + 11.222vw, 18.75rem)",
            }}
            size="large"
            onChange={(val) => setShow(val)}
            options={[
              {
                value: "exec",
                label: "Executive",
              },
              {
                value: "marketing",
                label: "Marketing",
              },
              {
                value: "finance",
                label: "Finance",
              },
              {
                value: "outreach",
                label: "Outreach",
              },
              {
                value: "online",
                label: "Online",
              },
            ]}
          />
        </section>
      </MediaQuery>

      <section className="team-members">
        {team[show].map((t, index) => {
          const delay = `${index * 0.25}s`;
          return (
            <article
              key={`${show} - ${index}`}
              style={{ animationDelay: delay }}
            >
              <img src={t.image} alt={t.name} />
              <h2>{t.name}</h2>
              <p>{t.description}</p>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Team;
