import { useEffect, useState } from "react";
import bg from "../assets/images/banner.jpg";
import formBg from "../assets/images/formbg.jpg";
import "../styles/contact.css";
import { Banner } from "./Banner";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [allData, setAllData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((pre) => ({ ...pre, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setAllData((pre) => [...pre, formData]);

    setFormData({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  };

  useEffect(() => console.log(allData), [allData]);

  return (
    <div style={{backgroundColor:'#f8fafc'}}>
      <Banner bannerContent={"Contact Us"} image={bg} />

      <div
        className="w-100 d-flex justify-content-center align-items-center py-5 "
        style={{
          backgroundImage: `url(${formBg})`,
          backgroundSize: "cover",
          padding: "0 15px 20px",
          objectFit: "cover",
        }}
      >
        <form
          onSubmit={handleFormSubmit}
          className="contact-form px-4 py-4 px-sm-5 d-flex flex-column gap-3 align-items-start w-75"
          style={{
            border: "4px solid rgb(30, 79, 188)",
            backgroundColor: "rgb(255,255,255)",
            borderRadius: "26px",
          }}
        >
          <h2
            className="text-center w-100 fw-bold fs-1 m-0"
            style={{ color: "#1e4fbc" }}
          >
            Let's Get In Touch
          </h2>
          <hr className="border border-primary border-2  w-100 m-0 mb-3" />
          <div className="form-group w-100">
            <input
              type="text"
              className="form-control shadow-none "
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group w-100">
            <input
              type="email"
              className="form-control shadow-none"
              id="Email"
              placeholder="Email"
              required
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>{" "}
          <div className="form-group w-100">
            <input
              type="text"
              className="form-control shadow-none"
              name="subject"
              placeholder="Your Subject"
              required
              value={formData.subject}
              onChange={handleInputChange}
            />
          </div>{" "}
          <div className="form-group w-100">
            <textarea
              className="form-control shadow-none "
              placeholder="Type Your message"
              rows={"4"}
              name="message"
              required
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn text-white fw-bold "
            style={{ backgroundColor: "#1e4fbc", textTransform: "uppercase" }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactPage;
