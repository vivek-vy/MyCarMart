import { Link } from "react-router-dom";
import "../styles/footer.css";
const Footer = () => {
  return (
    <footer className="pb-1" style={{ backgroundColor: "#1e4fbc", color: "#ffff" }}>
      <nav className="d-flex flex-column flex-sm-row navbar align-items-start container-xl p-3  pb-0 " style={{maxWidth:"1500px"}}>
        <div className="navbar-brand fw-bold fs-1 text-light mb-4">
          MyCarMart
        </div>
        <div className=" d-flex flex-column fw-bold mb-1 gap-2">
          <div>
            <span className="check-icon me-2">
              {" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                  fill="white"
                />
              </svg>{" "}
            </span>
            {"  "}
            <Link
              to={"/"}
              className="   link-underline link-underline-opacity-0 text-light   "
            >
              Car for 12/16
            </Link>
          </div>
          <div className="">
            <span className="check-icon me-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                  fill="white"
                />
              </svg>
            </span>{" "}
            <Link
              to={"/contact"}
              className="  link-underline link-underline-opacity-0 text-light"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
      <hr />
      <div className="d-flex flex-column flex-sm-row justify-content-between  container-xl px-3 "  style={{maxWidth:"1500px"}}>
        <p className="mb-2 " style={{ fontSize: "12px" }}>
          Copywrite &copy; 2025. All rights reserved
        </p>
        <p className="mb-2" style={{ fontSize: "12px" }}>
          Designed & Developed by : <strong>Cloud1 Web Solutions</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
