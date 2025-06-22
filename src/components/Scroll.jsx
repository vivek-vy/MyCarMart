import { useState, useEffect } from "react";

function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  const [ishover, setIsHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight /2) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0,left:0, behavior: "smooth" });
  };

  const scrollBtnStyle = {
    right: "27px",
    bottom: show ? "25px" : "-50vh",
    opacity: show ? 1 : 0,
    border: ishover ? "2px solid rgb(30, 79, 188)" : "2px solid black",
    background: ishover ? " rgb(30, 79, 188)" : "none",
    padding: "22.5px",
    cursor: "pointer",
    transition: "bottom 0.5s ease, opacity 0.5s ease",
  };

  return (
    <button
      className="scrollbtn  position-fixed z-3 rounded-circle d-none d-md-block "
      style={scrollBtnStyle}
      onClick={scrollToTop}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    ></button>
  );
}

export default ScrollToTopButton;
