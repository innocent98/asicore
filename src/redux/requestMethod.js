import axios from "axios"

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const forgetPassword = user && JSON.parse(user).forgetPassword;
// const TOKEN = currentUser?.accessToken;
// const FORGOTTOKEN = forgetPassword?.forgotToken;

export const userRequest = axios.create({
  proxy: "http://localhost:8600/api/",
//   headers: { token: `Bearer ${TOKEN}` },
});

