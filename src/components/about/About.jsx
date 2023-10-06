import Topbar from "../topbar/Topbar";
import "./about.scss";
import { Zoom } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="about">
      <Topbar />

      <section>
        <Zoom triggerOnce>
          <div className="wrapper">
            <h2>What is ASI?</h2>
            <p>
              ASI, which stands for Artificial Super Intelligence Core, is a
              groundbreaking new meme token that is set to revolutionize the
              world of cryptocurrency. At its Core is the power of super
              artificial intelligence, which is harnessed to create a unique and
              innovative investment opportunity for the cryptocurrency market.
            </p>

            <button className="button">Read More</button>
          </div>

          <div className="wrapper">
            <h2>Why ASI?</h2>
            <p>
              With ASI , investors have the opportunity to tap into the power of
              super artificial intelligence and leverage its capabilities to
              make better investment decisions. The token is designed to be
              powered by a sophisticated AI system that uses advanced algorithms
              and machine learning to analyze market trends and predict future
              price movements.
            </p>

            <button className="button">Read More</button>
          </div>

          <div className="wrapper">
            <h2>MISSION</h2>
            <p>
              ASI is a Artificial Super Intelligence that aims to provide
              next-generation artificial intelligence solutions for businesses
              and individuals. One of the unique features of the ASI token is
              its use in the project's NFT marketplace. The ASI token is also
              used to power the project's decentralized exchange (DEX), which
              allows users to swap the token with other cryptocurrencies and
              tokens.
            </p>
          </div>

          <div className="wrapper">
            <h2>OUR TEAM</h2>
            <p>
              The team behind ASI is made up of experienced and knowledgeable
              professionals who are passionate about blockchain technology and
              its potential to transform the world of finance. The team is led
              by a group of experts with a deep understanding of the
              cryptocurrency market and years of experience in developing
              blockchain-based products and services.
            </p>

            <button className="button">Read More</button>
          </div>
        </Zoom>
      </section>

      <section>
        <Zoom triggerOnce>
          <div className="inTouch">
            {/* <h2>GET IN TOUCH</h2> */}
            <div className="img">
              <a href="https://twitter.com/asi_core" target="_blanc">
                <img src="images/tw.png" alt="" />
              </a>
              <a href="https://t.me/asi_core" target="_blanc">
                <img src="images/tg.png" alt="" />
              </a>

              <a href="https://youtube.com/@asi_core?si=rVRUylvgnqZ3-XlU" target="_blanc">
                <img src="images/you.png" alt="" />
              </a>
            </div>
            <hr />
            <p>(c) 2023 ASI CORE. All Rights Reserved</p>
          </div>
        </Zoom>
      </section>
    </div>
  );
};

export default About;
