import "./Volunteer.css";
import { useMediaQuery } from "react-responsive";

const Volunteer = () => {
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
      <section className="volunteer-head">
        <div className="title">
          <h1>Volunteer with Us</h1>
          <h3>Join our mission to make a positive impact in the community.</h3>
        </div>
        <aside>
          <h3>
            We're looking for passionate volunteers to help us achieve our
            goals. Fill out the form below to get started.
          </h3>
        </aside>
      </section>
      <section className="wform">
        <div className="background">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfLnROMqscFHTUk-58PBYf0B5EebLfiDMlsbzoKVFq5ud7RLQ/viewform?embedded=true"
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
    </>
  );
};

export default Volunteer;
