import { Button } from "react-bootstrap";
import bgImg from "../assets/images/loginBg.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  const correctPass = "Openitnow";
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({ password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((pre) => ({ ...pre, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted", formData);

    if (correctPass === formData.password) {
      navigate("/");
    } else {
      alert("incorrect password");
      setFormData({ password: "" });
    }
  };

  return (
    <div
      className="d-flex align-items-lg-start align-items-center justify-content-center flex-column gap-3 p-0 ps-lg-5"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="m-0 ms-sm-5 ">
        <h2 className="fw-bold fs-1 text-center mb-3 text-success ">CarMart</h2>
        <form
          onSubmit={handleFormSubmit}
          className="d-flex flex-column bg-white  gap-3 justify-content-center align-items-center "
          style={{
            borderRadius: "20px",
            border: " 3px solid #c2b9b9",
            boxShadow: `0 1px 3px rgba(0,0,0,.04) `,
            padding: "4rem 1.5rem",
            minHeight: "200px",
          }}
        >
          <label htmlFor="LoginPass" style={{ fontSize: "14px" }}>
            {" "}
            Password
            <div className="input-group shadow-none">
              <input
                className=" fs-5"
                type={showPassword ? "text" : "password"}
                name="password"
                id="LoginPass"
                value={formData.password}
                onChange={handleInputChange}
                required
                class="form-control shadow-none"
              />
              <Button
                id="pp-hide-show-password"
                className=" button "
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((pre) => !pre)}
                style={{
                  backgroundColor: "#ffffff",
                  color: "blue",
                  width: "50px",
                }}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </Button>
            </div>
          </label>
          <Button
            style={{
              display: "block",
              backgroundColor: "#121e92",
              padding: "6px 30px",
              fontSize: "13px",
              border: "0",
              minHeight: "32px",
              lineHeight: "2.30769231",
            }}
            type="submit"
          >
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

