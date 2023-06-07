import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UpdatePage from "./pages/UpdatePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
          <HomePage />
      ),
    },
    {
      path: "/login",
      element: (
          <LoginPage />
      ),
    },
    {
      path: "/update",
      element: (
          <UpdatePage />
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
