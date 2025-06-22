
 import "../styles/header.css";

import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = () => {
  return (
    <header
      className="sticky-top px-3 px-sm-0"
      style={{ backgroundColor: "white" }}
    >
      <nav className="navbar navbar-expand-lg container-xl justify-content-between d-flex flex-nowrap" style={{maxWidth:'1625px'
      }}>
        <button
          className="menu-icon navbar-togglerr me-5 d-lg-none px-3 py-1  rounded-3 text-white border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          style={{ backgroundColor: "#1e4fbc" }}
        >
         
        </button>

        <div className="navbar-brand fw-bold fs-1 text-black">MyCarMart</div>

        <div
          className="offcanvas offcanvas-start bg-white align-items-lg-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          style={{ width: "75%" }}
        >
  
          <button
            type="button"
            className="btn-close d-lg-none position-absolute end-0  text-center bg-white  text-dark opacity-100"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          > &times;
            {" "}
          </button>

          <div className="offcanvas-body mt-5 pt-3 m-lg-0">
            <ul className="navbar-nav flex-column flex-lg-row gap-3 fw-bold">
              <li className="nav-item fs-5">
                <NavLink to="/" className="nav-link text-black position-relative ">
                  Car for 12/16
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/contact" className="nav-link text-black position-relative fs-5">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mobile-login ms-auto d-lg-none">
          <NavLink
            to="/login"
            className="button text-white px-3 py-2 fw-bold text-decoration-none rounded-5 "
            style={{ backgroundColor: "#1e4fbc" }}
          >
            LOGIN
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
