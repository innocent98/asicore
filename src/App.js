import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Airdrop from "./pages/airdrop/Airdrop";
import Home from "./pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/airdrop",
    element: <Airdrop />,
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
