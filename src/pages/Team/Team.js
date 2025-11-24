import { useState, useEffect } from "react";
import ShivainW from "../../assets/shivain.webp";
import EmanW from "../../assets/eman.webp";
import AmeenaW from "../../assets/ameena.webp";
import ManuthiW from "../../assets/manuthi.webp";
import RuchiW from "../../assets/ruchi.webp";
import ArunimaW from "../../assets/arunima.webp";
import IsabelleW from "../../assets/isabelle.webp";
import ShashwataW from "../../assets/shashwata.webp";
import JazzyW from "../../assets/jaz.webp";
import AyeshaW from "../../assets/ayesha.webp";
import AryanW from "../../assets/aryan.webp";
import EthanW from "../../assets/ethan.webp";
import StuthiW from "../../assets/stuthi.webp";
import DuaW from "../../assets/dua.webp";
import TasnimW from "../../assets/tasnim.webp";
import GajaniW from "../../assets/gajani.webp";
import ChelseaW from "../../assets/chelsea.webp";
import CameliaW from "../../assets/camelia.webp";
import ImanW from "../../assets/iman.webp";
import BlankW from "../../assets/blank.webp";
import "./Team.css";
import { Select } from "antd";
import MediaQuery from "react-responsive";

const Team = () => {
  const [show, setShow] = useState("exec");
  const [expandedCards, setExpandedCards] = useState({});

  const toggleShowMore = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    setExpandedCards({});
  }, [show]);

  const team = {
    exec: [
      {
        name: "Jasundeep",
        description:
          "Hello! My name is Jasundeep and I am a second year biomedical sciences student at McGill University. LaunchSTEM is a project that branched out of the idea to create an academic difference in the community for students who may feel misplaced in class and hesitate to ask questions. As a part of this organization, I am extremely proud of how far we have come in these past 3 years and how much more we have left to accomplish. As our teams grow, so do our ideas and ability to increase STEM support in the community! In my personal time, I enjoy spending time with my friends and family, watching movies, and travelling!",
        image: JazzyW,
        overflow: true,
      },
      {
        name: "Ayesha",
        description:
          "Hi everyone! My name is Ayesha and I am a second year sciences student at the UofA. I was inspired to cofound LaunchSTEM because I wanted to address the disparity in academic enrichment opportunities I saw in my community. These past three years have been a rewarding experience and I am looking forward to increasing accessibility to STEM support in Edmonton and beyond. Outside of LaunchSTEM, you can find me dabbling in calligraphy, watching horror movies, or trying out new activities with my friends!",
        image: AyeshaW,
        overflow: true,
      },
    ],
    outreach: [
      {
        name: "Ruchi",
        description:
          "Hi I’m Ruchi and I’m a grade 12 student at Lillian Osborne. I’ve been a part of LaunchSTEM for 3 years and I love it because I have the ability to share my deep passion for science with others. In my spare time you can often find me reading, dancing, or hiking. Through outreach I hope to let our community know about all of the STEM opportunities that are available to youth, with the hope that someone will find love and passion for STEM.",
        image: RuchiW,
        overflow: true,
      },
      {
        name: "Manuthi",
        description:
          "Hi I’m Manuthi and I’m a first year Animal Health student at the University of Alberta! I’ve been a part of LaunchSTEM’s Outreach team for a little over a year now and I love getting to share my passion for STEM with others. Outside of LaunchSTEM, I enjoy reading and horseback riding. Through my work with LaunchSTEM, I hope to continue improving accessibility to STEM education and spreading a love for science among students!",
        image: ManuthiW,
        overflow: true,
      },
      {
        name: "Shashwata",
        description:
          "Hi! I’m Shashwata and I’m a Grade 12 student at Old Scona Academic. Over the past 3 years being a part of the LaunchSTEM team, first as a tutor, and serving two years as Director of Outreach, I have found it extremely rewarding in improving the tutor-tutee experience by creating resources and creating connections with others to improve the accessibility of our services. I hope to continue to share my passion for STEM with others and bring its joys to students. Outside of academics and work, I enjoy crafting and spending time with friends and family!",
        image: ShashwataW,
        overflow: true,
      },
    ],
    finance: [
      {
        name: "Aryan",
        description:
          "Hi guys! I'm Aryan, a Grade 11 student at Old Scona. I'm excited to be part of this year's Directors of Finance at LaunchSTEM. I was attracted to it because I wanted to be apart of a team and be part of something that is making a difference. I'm looking forward to this year to help LaunchSTEM to grow and make sure everything runs smoothly in the background. Outside of school and LaunchSTEM, you’ll usually find me playing basketball, lifting weights, or watching hockey. I’m looking forward to an awesome year with the team!",
        overflow: true,
        image: AryanW,
      },
      {
        name: "Heather",
        description:
          "Hi everyone! I’m Heather, a grade 11 student at Old Scona, and I'm looking forward to being a part of LaunchSTEM this year. I joined to be part of an organization that makes STEM education more accessible and meaningful to students. Outside of LaunchSTEM, I love spending time doing origami, biking, and listening to music!",
        image: BlankW,
        overflow: true,
      },
    ],
    marketing: [
      {
        name: "Chelsea",
        description:
          "Hi, I’m Chelsea and I am a grade 11 student at Old Scona. I am excited to be a part of the LaunchSTEM team as this year’s VP of Marketing! This is my first year with LaunchSTEM and I am looking forward to working with the exec team to promote and increase accessibility to STEM education for younger students. In my free time, I like to watch movies and hangout with my friends.",
        image: ChelseaW,
        overflow: true,
      },
      {
        name: "Camelia",
        description:
          "Hey y’all. My name’s Camelia and I am a grade 11 student from Old Scona Academic, as well as one of the Directors of Marketing at LaunchSTEM. I joined LaunchSTEM first as a tutor and I am pleased to have the opportunity of working with the executive team. I look forward to helping more students discover their interests in STEM. Outside LaunchSTEM, I enjoy reading.",
        image: CameliaW,
        overflow: true,
      },
      {
        name: "Iman",
        description:
          "Hi everyone, I’m Iman and I am a grade 11 student in Tempo School. I am so happy and honored to be a part of Launchstem and as well as be a part of the Directors of Marketing at LaunchSTEM. I joined Launchstem after reading and hearing about the motivations behind why it was made and it was very inspiring. I am eager to collaborate with the teams to enhance and expand access to STEM education for younger students. Outside of academics, I love reading, journalling, scrolling on pinterest, and spending time with my family.",
        image: ImanW,
        overflow: true,
      },
      {
        name: "Shivain",
        description:
          "Hi, I'm Shivain! As the website developer for LaunchSTEM, I joined to dive into the fascinating world of STEM and connect with the incredible people involved. I'll be studying Computer Engineering at the University of Waterloo this fall, and I'm excited to help make STEM more accessible and engaging for everyone.",
        image: ShivainW,
        overflow: true,
      },
    ],
    workshops: [
      {
        name: "Ethan",
        description:
          "Hi everybody, I'm Ethan. I am currently a grade 11 student at Old Scona Academic and starting my first year with LaunchSTEM as Vice President of Workshops. I’ve been on my STEM journey since I was little, doing fun experiments at home and at school. Now I want to be able to provide kids with the same STEM experiments that I had when I was little, to do the things I was able to do. LaunchSTEM was the perfect opportunity, showing real initiative and impact within the community. Outside of LaunchSTEM and school, I really enjoy and do a variety of sports, such as volleyball, soccer, and hurdles.",
        overflow: true,
        image: EthanW,
      },
      {
        name: "Stuthi",
        description:
          "Hi everyone! I’m Stuthi, a Grade 11 student at Old Scona Academic. I’m very excited to be a Director of Workshops! I began my journey as a tutor with LauchSTEM in grade 10, because I love STEM and believe that all students should have learning opportunities, regardless of their background. I’m looking forward to collaborating with everyone here at LaunchSTEM and making STEM education more accessible and fun for all students. Outside of academics, you’ll find me reading novels, watching movies, and obsessing over Harry Potter (I’m telling you, I lost my Hogwarts letter somewhere in the mail)!",
        image: StuthiW,
        overflow: true,
      },
      {
        name: "Dua",
        description:
          "Hi everyone, I’m Dua, a grade 11 student at Harry Ainlay, and I’m thrilled to be a Director Of Workshops for the LaunchSTEM Team! I first joined LaunchSTEM this past year as a tutor teaching math and science, because I love sharing knowledge and helping students get access to the best STEM opportunities. This year, I hope to collaborate with my Workshop Team and have more engaging, memorable sessions that make STEM accessible and educational for everyone. Outside of LaunchSTEM, I often enjoy reading, listening to music, and playing badminton.",
        overflow: true,
        image: DuaW,
      },
    ],
    tutoring: [
      {
        name: "Eman",
        description:
          "Hi I’m Eman, and I am a second year Science student at the University of Alberta! I have been a part of LaunchSTEM since 2022, beginning as a tutor for a year before joining the finance team in 2023. After serving on the finance team for the past two years, I have recently taken on the role of VP Tutoring. Alongside my directors, I hope to provide LaunchSTEM tutors the support and resources they need to succeed in their roles. Future plans of ours include the creation of tutoring guides and implementing a mentorship program. Outside of school and extracurriculars, I enjoy spending time with family and friends as well as learning new skills (e.g. sports, cookings, etc)!",
        image: EmanW,
        overflow: true,
      },
      {
        name: "Tasnim",
        description:
          "Hey, I’m Tasnim! I’m a second-year Microbiology & Immunology student at McGill and one of this year’s Directors of Tutoring at LaunchSTEM. I first joined as a tutor because I’ve always loved teaching STEM, and LaunchSTEM felt like the perfect way to support families and students who might not always have access to extra help and resources. This year, I’m excited to support our tutors, introduce some fresh ideas, and build on the exceptional work from last year, all while working with an amazing team! Outside of LaunchSTEM, I love to go to concerts and get (overpriced) coffee with friends :)",
        image: TasnimW,
        overflow: true,
      },
      {
        name: "Gajani",
        description:
          "Hi, I’m Gajani and a Grade 12 student of Lillian Osborne. I have always loved teaching, exchanging ideas, and helping students in finding new learning methods, which is why I joined LaunchSTEM. One of my favorite things is seeing someone’s confidence grow when a tricky concept finally “clicks.\" LaunchSTEM has given me an incredible opportunity to connect with other dedicated students and empower young learners. Now that I've taken on the role of Director of Tutors, I'm delighted to help our team and create even more opportunities for students.",
        overflow: true,
        image: GajaniW,
      },
    ],
  };

  return (
    <main>
      <h1 className="team-head">Meet the Team!</h1>
      <MediaQuery minWidth={986}>
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
            onClick={() => setShow("workshops")}
            className={show === "workshops" ? "selected" : ""}
          >
            Workshops
          </p>
          <p
            onClick={() => setShow("tutoring")}
            className={show === "tutoring" ? "selected" : ""}
          >
            Tutoring
          </p>
        </section>
      </MediaQuery>
      <MediaQuery maxWidth={985}>
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
                value: "workshops",
                label: "Workshops",
              },
              {
                value: "tutoring",
                label: "Tutoring",
              },
            ]}
          />
        </section>
      </MediaQuery>

      <section className="team-members">
        {team[show].map((t, index) => {
          const delay = `${index * 0.25}s`;
          const isExpanded = expandedCards[index];

          return (
            <article
              key={`${show} - ${index}`}
              style={{ animationDelay: delay }}
            >
              <img src={t.image} alt={t.name} />
              <h2>{t.name}</h2>
              <p className={isExpanded ? "" : "clamped"}>{t.description}</p>
              {t.overflow && (
                <span
                  className="show-more-btn"
                  onClick={() => toggleShowMore(index)}
                >
                  {isExpanded ? "Show Less" : "Show More"}{" "}
                </span>
              )}
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Team;
