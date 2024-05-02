import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import OnBoarding from "./pages/OnBoarding";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/boarding", element: <OnBoarding /> }],
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
