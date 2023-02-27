import { useState } from "react";
import About from "../../components/about/About";
import Asi from "../../components/asi/Asi";
import Contact from "../../components/contact/Contact";
import Intro from "../../components/intro/Intro";
import Topbar from "../../components/topbar/Topbar";
import "./home.scss";

const Home = () => {
  const [home, setHome] = useState(true);
  const [contact, setContact] = useState(false);
  const [about, setAbout] = useState(false);

  return (
    <div className="home">
      <Topbar
        home={home}
        setHome={setHome}
        about={about}
        setAbout={setAbout}
        contact={contact}
        setContact={setContact}
      />
      <Intro />
      {home && <Asi />}
      {contact && <Contact />}
      {about && <About />}
    </div>
  );
};

export default Home;
