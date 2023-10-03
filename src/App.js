import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import Admin from "./pages/admin/Admin";
import Admin12 from "./pages/admin/Admin12";
import Admin11 from "./pages/admin/Admin11";
import Admin9 from "./pages/admin/Admin9";
import Admin8 from "./pages/admin/Admin8";
import Admin7 from "./pages/admin/Admin7";
import Admin6 from "./pages/admin/Admin6";
import Admin5 from "./pages/admin/Admin5";
import Admin4 from "./pages/admin/Admin4";
import Admin3 from "./pages/admin/Admin3";
import Admin2 from "./pages/admin/Admin2";
import Admin1 from "./pages/admin/Admin1";
import Admin10 from "./pages/admin/Admin10";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
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
      path: "/about",
      element: (
        <Suspense fallback={<div></div>}>
          <About />
        </Suspense>
      ),
    },
    {
      path: "/contact",
      element: (
        <Suspense fallback={<div></div>}>
          <Contact />
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
      path: "/asicore-check/1",
      element: (
        <Suspense fallback={<div></div>}>
          <Admin1 />
        </Suspense>
      ),
    },
    {
      path: "/asicore-check/2",
      element: (
        <Suspense fallback={<div></div>}>
          <Admin2 />
        </Suspense>
      ),
    },
    {
      path: "/asicore-check/3",
      element: (
        <Suspense fallback={<div></div>}>
          <Admin3 />
        </Suspense>
      ),
    },
    {
      path: "/asicore-check/4",
      element: (
        <Suspense fallback={<div></div>}>
          <Admin4 />
        </Suspense>
      ),
    },
    {
      path: "/asicore-check/5",
      element: (
        <Suspense fallback={<div></div>}>
          <Admin5 />
        </Suspense>
      ),
    },
    {
      path: "/asicore-check/6",
      element: (
        <Suspense fallback={<div></div>}>
          <Admin6 />
        </Suspense>
      ),
    },
    {
      path: "/asicore-check/7",
      element: (
        <Suspense fallback={<div></div>}>
          <Admin7 />
        </Suspense>
      ),
    },
    {
      path: "/asicore-check/8",
      element: (
        <Suspense fallback={<div></div>}>
          <Admin8 />
        </Suspense>
      ),
    },
    {
      path: "/asicore-check/9",
      element: (
        <Suspense fallback={<div></div>}>
          <Admin9 />
        </Suspense>
      ),
    },
    {
      path: "/asicore-check/10",
      element: (
        <Suspense fallback={<div></div>}>
          <Admin10 />
        </Suspense>
      ),
    },
    {
      path: "/asicore-check/11",
      element: (
        <Suspense fallback={<div></div>}>
          <Admin11 />
        </Suspense>
      ),
    },
    {
      path: "/asicore-check/12",
      element: (
        <Suspense fallback={<div></div>}>
          <Admin12 />
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
