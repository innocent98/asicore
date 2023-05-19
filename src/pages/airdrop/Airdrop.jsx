import Topbar from "../../components/topbar/Topbar";
import "./airdrop.scss";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logout,
} from "../../redux/userRedux";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { getRemainingTimeUntilMsTimestamp } from "../../components/utils/utils";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const Airdrop = () => {
  const user = useSelector((state) => state.user.currentUser);
  const { isFetching } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.search;

  const [inputs, setInputs] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [withdrawPrompt, setWithdrawPrompt] = useState(false);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleAirdrop = async (e) => {
    e.preventDefault();
    // dispatch(loginStart());
    try {
      const res = await axios.post(
        path
          ? "https://api.asicore.xyz/api/user/register" + path
          : "https://api.asicore.xyz/api/user/register",
        { ...inputs }
      );
      // dispatch(loginSuccess(res.data));
      alert(res.data);
      // alert("You have successfully participated in the airdrop.");
    } catch (error) {
      console.log(error);
      // dispatch(loginFailure());
    }
  };

  // get user info
  const findUser = useCallback(async () => {
    if (user) {
      const res = await axios.get(
        "https://api.asicore.xyz/api/user/user/" + user?.address
      );
      setUserInfo(res.data);
    }
  }, [setUserInfo, user]);

  useEffect(() => {
    let unsubscribe = findUser();
    return () => unsubscribe;
  }, [findUser, setUserInfo]);

  const userLogout = useCallback(async () => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      const timeout = setTimeout(() => {
        userLogout();
      }, 3600000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [user]);

  // get countdown
  const [remainingTimeToUnlock, setRemainingTimeToUnlock] =
    useState(defaultRemainingTime);
  let monthsToAdd = new Date("3 May 2023");
  const futureDate = monthsToAdd.setMonth(monthsToAdd.getMonth() + 1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTimeToUnlock(futureDate);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [futureDate]);

  function updateRemainingTimeToUnlock(countdown) {
    setRemainingTimeToUnlock(getRemainingTimeUntilMsTimestamp(countdown));
  }

  // handle withdraw prompt
  const handleWithdrawPromt = () => {
    setWithdrawPrompt(!withdrawPrompt);
  };

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
                {remainingTimeToUnlock.days}
                <span>days</span>
              </p>
              <span>:</span>
              <p>
                {remainingTimeToUnlock.hours}
                <span>hours</span>
              </p>
              <span>:</span>
              <p>
                {remainingTimeToUnlock.minutes}
                <span>minutes</span>
              </p>
              <span>:</span>
              <p>
                {remainingTimeToUnlock.seconds}
                <span>seconds</span>
              </p>
            </div>
          </div>
        </section>

        {!user && (
          <section>
            <form className="row" onSubmit={handleAirdrop}>
              <div className="col">
                <label htmlFor="">
                  <span>Join us on Telegram</span>{" "}
                  <a
                    href="https://t.me/asi_core"
                    target="_blank"
                    rel="noreferrer"
                    className="follow"
                  >
                    join
                  </a>
                </label>
                <input
                  type="text"
                  placeholder="Input your telegram username"
                  required
                  name="telegram"
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <label htmlFor="">
                  <span>Follow us on Twitter</span>{" "}
                  <a
                    href="https://twitter.com/asi_core"
                    target="_blank"
                    rel="noreferrer"
                    className="follow"
                  >
                    follow
                  </a>
                </label>
                <input
                  type="text"
                  placeholder="Input your twitter username"
                  required
                  name="twitter"
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <label htmlFor="">
                  <span>Like and Retweet our Airdrop tweet</span>
                  <a
                    href="https://twitter.com/asi_core/status/1657113213434056731?t=HFJY8svRn12ufVq4MaLRKA&s=19"
                    target="_blank"
                    rel="noreferrer"
                    className="follow"
                  >
                    retweet
                  </a>
                </label>
                <input
                  type="text"
                  placeholder="(Copy and drop your retweet link)"
                  required
                  name="link"
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <label htmlFor="">Input your CORE address on DEX</label>
                <input
                  type="text"
                  placeholder="Input your CORE address"
                  required
                  name="address"
                  onChange={handleChange}
                />
              </div>
              <button type="submit" disabled={isFetching}>
                {isFetching ? "Please wait..." : "SUBMIT"}
              </button>
            </form>
          </section>
        )}

        {user && (
          <section>
            <div className="airdropDetails">
              <h5>
                Refer Link:{" "}
                <span>
                  <a href="/">{`https://asicore.xyz/airdrop?_id=${user?._id}`}</a>
                </span>
              </h5>
              <p>
                Copy and share your refer link, you will be rewarded 1000ASI and
                the invitee will be rewarded 1000ASI at the same time.
              </p>

              <div className="details">
                <div className="det">
                  <h5>{userInfo?.balance}</h5>
                  <h4>ASICORE</h4>
                  <p>Balance</p>
                </div>
                <div className="det">
                  <h5>
                    {userInfo?.referred / 1000 > 0
                      ? userInfo?.referred / 1000
                      : 0}
                  </h5>
                  <p>Referred</p>
                </div>
                <div className="det">
                  <h5>{userInfo?.referred}</h5>
                  <h4>ASICORE</h4>
                  <p>Rewards</p>
                </div>
              </div>
              <button onClick={handleWithdrawPromt}>WITHDRAW</button>
            </div>
          </section>
        )}

        {withdrawPrompt && (
          <div className="alertBox">
            <div className="title">
              <p>Prompt</p>
              <span
                className="material-icons icon"
                onClick={handleWithdrawPromt}
              >
                close
              </span>
            </div>
            <hr />
            <div className="content">
              Kindly wait patiently for Airdrop to be over
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Airdrop;
