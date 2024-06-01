import { useState } from "react";
import PH from "../assets/placeholder.jpg";

const Team = () => {
  const [show, setShow] = useState("exec");
  const team = {
    exec: [
      {
        name: "Exec name 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu lorem non odio finibus viverra. Sed ut augue sollicitudin, semper massa vitae, pretium elit. ",
      },
      {
        name: "Exec name 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu lorem non odio finibus viverra. Sed ut augue sollicitudin, semper massa vitae, pretium elit. ",
      },
      {
        name: "Exec name 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu lorem non odio finibus viverra. Sed ut augue sollicitudin, semper massa vitae, pretium elit. ",
      },
      {
        name: "Exec name 4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu lorem non odio finibus viverra. Sed ut augue sollicitudin, semper massa vitae, pretium elit. ",
      },
      {
        name: "Exec name 5",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu lorem non odio finibus viverra. Sed ut augue sollicitudin, semper massa vitae, pretium elit. ",
      },
      {
        name: "Exec name 6",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu lorem non odio finibus viverra. Sed ut augue sollicitudin, semper massa vitae, pretium elit. ",
      },
    ],
    outreach: [
      {
        name: "outreach name 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu lorem non odio finibus viverra. Sed ut augue sollicitudin, semper massa vitae, pretium elit. ",
      },
      {
        name: "outreach name 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu lorem non odio finibus viverra. Sed ut augue sollicitudin, semper massa vitae, pretium elit. ",
      },
      {
        name: "outreach name 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu lorem non odio finibus viverra. Sed ut augue sollicitudin, semper massa vitae, pretium elit. ",
      },
    ],
    finance: [
      {
        name: "finance name 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu lorem non odio finibus viverra. Sed ut augue sollicitudin, semper massa vitae, pretium elit. ",
      },
      {
        name: "finance name 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu lorem non odio finibus viverra. Sed ut augue sollicitudin, semper massa vitae, pretium elit. ",
      },
    ],
    marketing: [
      {
        name: "marketing name 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu lorem non odio finibus viverra. Sed ut augue sollicitudin, semper massa vitae, pretium elit. ",
      },
    ],
  };

  return (
    <main>
      <h1 className="team-head">Meet the Team!</h1>
      <section className="team-links">
        <p onClick={() => setShow("exec")}>Executive</p>
        <p onClick={() => setShow("marketing")}>Marketing</p>
        <p onClick={() => setShow("finance")}>Finance</p>
        <p onClick={() => setShow("outreach")}>Outreach</p>
      </section>
      <section className="team-members">
        {team[show].map((t, index) => {
          const delay = `${index * 0.25}s`;
          return (
            <article
              key={`${show} - ${index}`}
              style={{ animationDelay: delay }}
            >
              <img src={PH} alt="Member" />
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
