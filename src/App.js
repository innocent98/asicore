import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import Admin from "./pages/admin/Admin";
const Airdrop = lazy(() => import("./pages/airdrop/Airdrop"));
const Login = lazy(() => import("./pages/airdrop/Login"));
const Home = lazy(() => import("./pages/home/Home"));

function App() {
  const user = useSelector((state) => state.user.currentUser);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<div></div>}>
          <Home />
        </Suspense>
      ),
    },
    {
      path: "/airdrop",
      element: (
        <Suspense fallback={<div></div>}>
          <Airdrop />
        </Suspense>
      ),
    },
    {
      path: "/asicore-check",
      element: (
        <Suspense fallback={<div></div>}>
          <Admin />
        </Suspense>
      ),
    },
    {
      path: "/login",
      element: !user ? (
        <Suspense fallback={<div></div>}>
          <Login />
        </Suspense>
      ) : (
        <Navigate to="/airdrop" />
      ),
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
