import { useState } from "react";
import { Suspense, lazy } from "react";
import Topbar from "../../components/topbar/Topbar";
import "./home.scss";
const About = lazy(()=> import("../../components/about/About"));
const Asi = lazy(()=> import("../../components/asi/Asi"));
const Contact = lazy(()=> import("../../components/contact/Contact"));
const Intro = lazy(()=> import("../../components/intro/Intro"));

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
      <Suspense fallback={<div></div>}><Intro /></Suspense>
      {home && <Suspense fallback={<div></div>}><Asi /></Suspense>}
      {contact && <Suspense fallback={<div></div>}><Contact /></Suspense>}
      {about && <Suspense fallback={<div></div>}><About /></Suspense>}
    </div>
  );
};

export default Home;
