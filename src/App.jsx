import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
          <HomePage />
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
      <RouterProvider router={router} />
  );
}
export default App;
