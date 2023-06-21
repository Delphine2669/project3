import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";

function LoginPage() {
  return <div>LOGIN</div>;
}

function SignUpPage() {
  return <div>SIGn</div>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
