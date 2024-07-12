import "./Contact.css";
import ContactSide from "../../assets/contactSide.png";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to run when user submits email form and display according toast for form validation
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        toast.success("Message Sent!");
      } else {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        toast.error("Error Sending Message.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error Sending Message.");
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <section className="contact-banner">
        <h1>Contact Us</h1>
        <p>Want to get in touch? We'd love to hear from you.</p>
        <img src={ContactSide} alt="Contact Side" className="contact-side" />
      </section>
      <section className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              required
              onChange={handleChange}
              value={formData.name}
            />
            <svg
              fill="#7a98ab"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"></path>
              </g>
            </svg>
          </div>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              onChange={handleChange}
              value={formData.email}
            />
            <svg
              fill="#7a98ab"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
                  fillRule="evenodd"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <textarea
            placeholder="Message"
            rows={8}
            name="message"
            required
            onChange={handleChange}
            value={formData.message}
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </>
  );
};

export default Contact;
