import Topbar from "../../components/topbar/Topbar";
import "./airdrop.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../../redux/userRedux";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const { isFetching } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleAirdrop = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("https://api.asicore.xyz/api/user/login", {
        ...inputs,
      });
      dispatch(loginSuccess(res.data));
    } catch (error) {
      alert(error.response.data);
      dispatch(loginFailure());
    }
  };

  return (
    <div className="airdrop">
      <Topbar />
      <div className="airdropCon">
        <section>
          <h4>Login to see your airdrop information</h4>
          <hr />
        </section>

        <section>
          <form className="row" onSubmit={handleAirdrop}>
            <div className="col">
              <label htmlFor="" style={{ textAlign: "center", margin: "20px" }}>
                Input your registered CORE address to login
              </label>
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
      </div>
    </div>
  );
};

export default Login;
