import "./topbar.scss";
import { useState } from "react";

const Topbar = ({ home, setHome, contact, setContact, about, setAbout }) => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleHome = () => {
    setHome(true);
    setContact(false);
    setAbout(false);
    setMenu(false);
  };

  const handleContact = () => {
    setContact(true);
    setHome(false);
    setAbout(false);
    setMenu(false);
  };

  const handleAbout = () => {
    setAbout(true);
    setContact(false);
    setHome(false);
    setMenu(false);
  };

  return (
    <div className="topbar">
      <div className="left">
        <img src="images/asi.jpg" alt="" style={{width: '80px'}} />
        <p>ASI CORE</p>
      </div>
      <div className="right">
        <ul>
          <li className={home ? "active" : ""} onClick={handleHome}>
            Home
          </li>
          <li>Whitepaper</li>
          <li className={about ? "active" : ""} onClick={handleAbout}>
            About
          </li>
          <li className={contact ? "active" : ""} onClick={handleContact}>
            Contact
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
          <li>Whitepaper</li>
          <li className={about ? "active" : ""} onClick={handleAbout}>
            About
          </li>
          <li className={contact ? "active" : ""} onClick={handleContact}>
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
