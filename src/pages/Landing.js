import Navbar from "../components/Navbar";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <h1 className="headline">
        Lorem ipsum ...Main Headline... Lorem ipsum dolor sit
      </h1>
      <h2 className="main-sub">
        Some smaller description about LaunchSTEM... Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Pellentesque venenatis lacus non dolor
        bibendum, id suscipit dui pellentesque.
      </h2>
      <div className="action">
        <button>Action 1</button>
        <button>Action 2</button>
      </div>
      <div className="img-cont">
        <div className="sample-img">Some Image or Video or Design...</div>
      </div>
      <h1 className="mission-statement">
        We believe in STEM (Mission Statement)
      </h1>
    </div>
  );
};

export default Landing;
