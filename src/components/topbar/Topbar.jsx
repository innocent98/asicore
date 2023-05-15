import { useLocation } from "react-router-dom";
import "./topbar.scss";
import { useState } from "react";

const Topbar = ({ home, setHome, contact, setContact, about, setAbout }) => {
  const location = useLocation();
  const path = location.pathname;

  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleHome = () => {
    if (path === "/airdrop") {
      window.location.replace("/");
    } else {
      setContact(false);
      setAbout(false);
      setMenu(false);
      setHome(true);
    }
  };

  const handleContact = () => {
    if (path === "/airdrop") {
      window.location.replace("/");
    } else {
      setContact(true);
      setHome(false);
      setAbout(false);
      setMenu(false);
    }
  };

  const handleAbout = () => {
    if (path === "/airdrop") {
      window.location.replace("/");
    } else {
      setAbout(true);
      setContact(false);
      setHome(false);
      setMenu(false);
    }
  };

  return (
    <div className="topbar">
      <div className="left">
        <img src="images/asi.jpg" alt="" style={{ width: "80px" }} />
        <p>ASI CORE</p>
      </div>
      <div className="right">
        <ul>
          <li className={home ? "active" : ""} onClick={handleHome}>
            Home
          </li>
          <li>
            <a
              href="https://asicore.xyz/file/ASICORE_WHITEPAPER.pdf"
              target="_blank"
              rel="noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              Whitepaper
            </a>
          </li>
          <li className={about ? "active" : ""} onClick={handleAbout}>
            About
          </li>
          <li className={contact ? "active" : ""} onClick={handleContact}>
            Contact
          </li>
          <li className={contact ? "active" : ""}>
            <a href="/login" style={{ color: "white" }}>
              Login
            </a>
          </li>
        </ul>
        <span className="material-icons menu" onClick={handleMenu}>
          menu
        </span>
      </div>

      <div className={"sideMenu " + (menu && "active")}>
        <ul>
          <span className="material-icons menu" onClick={handleMenu}>
            close
          </span>
          <li className={home ? "active" : ""} onClick={handleHome}>
            Home
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1OlC5bpiiBiJeFclhKXS7ln3CuqFAZvHI/view?usp=drivesdk"
              download="ASICORE WHITEPAPER"
              style={{ color: "white", textDecoration: "none" }}
            >
              Whitepaper
            </a>
          </li>
          <li className={about ? "active" : ""} onClick={handleAbout}>
            About
          </li>
          <li className={contact ? "active" : ""} onClick={handleContact}>
            Contact
          </li>
          <li className={contact ? "active" : ""}>
            <a href="/login" style={{ color: "white" }}>
              Login
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
