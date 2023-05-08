import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
const Airdrop = lazy(() => import("./pages/airdrop/Airdrop"));
const Home = lazy(() => import("./pages/home/Home"));

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
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
