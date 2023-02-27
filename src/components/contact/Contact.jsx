import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <section>
        <div className="wrapper">
          <h2>Contact Us</h2>
          <button>Telegram</button>
          <hr />
          <button>Twitter</button>
        </div>
      </section>

      <section>
        <div className="inTouch">
          <h2>GET IN TOUCH</h2>
          <div className="img">
            <img src="images/tw.png" alt="" />
            <img src="images/tg.png" alt="" />
          </div>
          <hr />
          <p>(c) 2023 ASI CORE. All Rights Reserved</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
