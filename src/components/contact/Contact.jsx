import "./contact.scss";
import { Zoom } from "react-awesome-reveal";

const Contact = () => {
  return (
    <div className="contact">
      <Zoom triggerOnce>
        <section>
          <div className="wrapper">
            <h2>Contact Us</h2>
            <button><a href="https://t.me/asi_core">Telegram</a></button>
            <hr />
            <button><a href="https://twitter.com/asi_core">Twitter</a></button>
          </div>
        </section>

        <section>
          <div className="inTouch">
            <h2>GET IN TOUCH</h2>
            <div className="img">
              <a href="https://twitter.com/asi_core">
                <img src="images/tw.png" alt="" />
              </a>
              <a href="https://t.me/asi_core">
                <img src="images/tg.png" alt="" />
              </a>
            </div>
            <hr />
            <p>(c) 2023 ASI CORE. All Rights Reserved</p>
          </div>
        </section>
      </Zoom>
    </div>
  );
};

export default Contact;
