import Topbar from "../../components/topbar/Topbar";
import "./airdrop.scss";

const Airdrop = () => {
  return (
    <div className="airdrop">
      <Topbar />
      <div className="airdropCon">
        <section>
          <h4>Procedure for airdrop participation</h4>
          <hr />
        </section>

        <section>
          <div className="timerSect">
            <h4>Airdrop ending</h4>
            <div className="timerBox">
              <p>
                00<span>days</span>
              </p>
              <span>:</span>
              <p>
                00<span>hours</span>
              </p>
              <span>:</span>
              <p>
                00<span>minutes</span>
              </p>
              <span>:</span>
              <p>
                00<span>seconds</span>
              </p>
            </div>
          </div>
        </section>

        <section>
          <form className="row">
            <div className="col">
              <label htmlFor="">
                <span>Follow us on Telegram</span>{" "}
                <span className="follow">follow</span>
              </label>
              <input
                type="text"
                placeholder="Input your telegram username"
                required
              />
            </div>
            <div className="col">
              <label htmlFor="">
                <span>Follow us on Twitter</span>{" "}
                <span className="follow">follow</span>
              </label>
              <input
                type="text"
                placeholder="Input your twitter username"
                required
              />
            </div>
            <div className="col">
              <label htmlFor="">Retweet our Airdrop tweet</label>
              <input
                type="text"
                placeholder="(Copy and drop your retweet link)"
                required
              />
            </div>
            <div className="col">
              <label htmlFor="">Input your CORE address</label>
              <input
                type="text"
                placeholder="Input your CORE address"
                required
              />
            </div>
            <button>SUBMIT</button>
          </form>
        </section>

        <section>
          <div className="airdropDetails">
            <h5>
              Refer Link:{" "}
              <span>
                <a href="/">https://asicore.org/QW23E</a>
              </span>
            </h5>
            <p>
              Copy and share your refer link,you will be rewarded 3 ASICORE and
              the invitee will be rewarded 0.09ASI at the same time, each person
              can invite up to 3 ASI token
            </p>

            <div className="details">
              <div className="det">
                <h5>0.09</h5>
                <h4>ASICORE</h4>
                <p>Balance</p>
              </div>
              <div className="det">
                <h5>0.09</h5>
                <p>Referred</p>
              </div>
              <div className="det">
                <h5>0.09</h5>
                <h4>ASICORE</h4>
                <p>Rewards</p>
              </div>
            </div>
            <button>WITHDRAW</button>
          </div>
        </section>

        <div className="alertBox">
          <div className="title">
            <p>Prompt</p>
            <span className="material-icons icon">close</span>
          </div>
          <hr />
          <div className="content">
            Minimal withdraw 0.10 ASICORE. Keep referring
          </div>
        </div>
      </div>
    </div>
  );
};

export default Airdrop;
