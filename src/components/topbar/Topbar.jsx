import "./topbar.scss";

const Topbar = ({ home, setHome, contact, setContact, about, setAbout }) => {
  const handleHome = () => {
    setHome(true);
    setContact(false);
    setAbout(false);
  };

  const handleContact = () => {
    setContact(true);
    setHome(false);
    setAbout(false);
  };

  const handleAbout = () => {
    setAbout(true);
    setContact(false);
    setHome(false);
  };

  return (
    <div className="topbar">
      <div className="left">
        <img src="images/logo.png" alt="" />
        <p>ASI CORE</p>
      </div>
      <div className="right">
        <ul>
          <li className={home ? "active": ""} onClick={handleHome}>Home</li>
          <li>Whitepaper</li>
          <li className={about ? "active" : ""} onClick={handleAbout}>About</li>
          <li className={contact ? "active" : ""} onClick={handleContact}>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
