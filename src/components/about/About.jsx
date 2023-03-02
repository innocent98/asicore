import "./about.scss";
import { Zoom } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="about">
      <section>
        <Zoom triggerOnce>
          <div className="wrapper">
            <h2>About Us</h2>
            <p>
              The team behind ASI CORE is made up of experienced and
              knowledgeable professionals who are passionate about blockchain
              technology and its potential to transform the world of finance.
              The team is led by a group of experts with a deep understanding of
              the cryptocurrency market and years of experience in developing
              blockchain-based products and services. <br />
              <br /> The team's expertise is diverse, ranging from software
              development and cryptography to finance and marketing. They are
              committed to creating a successful and sustainable project that is
              built on the principles of transparency, community involvement,
              and innovation. <br />
              <br /> The development team has a proven track record of building
              successful blockchain projects and has deep knowledge of the
              challenges and opportunities that come with deploying a meme token
              on a blockchain. They have a clear understanding of the technical
              and operational aspects of the project, and are dedicated to
              delivering a high-quality product that meets the needs of the ASI
              CORE community. <br />
              <br /> The marketing team is skilled at building strong and
              engaged communities around blockchain projects. They are committed
              to ensuring that ASI CORE has a vibrant and active community of
              supporters and investors who are excited about the project's
              potential. They will work tirelessly to raise awareness of the
              token, connect with potential investors, and ensure that the ASI
              CORE project reaches its full potential. <br />
              <br /> Overall, the team behind ASI CORE is one of the project's
              greatest strengths. They bring a wealth of expertise, experience,
              and passion to the project, and are dedicated to building a
              successful and sustainable meme token that will become a core part
              of the meme coin ecosystem.
            </p>
          </div>
        </Zoom>
      </section>

      <section>
        <Zoom triggerOnce>
          <div className="inTouch">
            <h2>GET IN TOUCH</h2>
            <div className="img">
              <img src="images/tw.png" alt="" />
              <img src="images/tg.png" alt="" />
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
