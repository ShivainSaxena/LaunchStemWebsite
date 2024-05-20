import Navbar from "../components/Navbar";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <h1 className="headline">
        blah blah ...Main Headline... blah blah blah blah
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
    </div>
  );
};

export default Landing;
