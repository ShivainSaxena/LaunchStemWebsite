import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Navbar />
        <Layout />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
