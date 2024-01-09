import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import About from "./components/Routes/About";
import Error from "./components/Routes/Error";
import Body from "./components/Body/Body";
import ContactUs from "./components/Routes/ContactUs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieCard from "./components/Routes/MovieCard";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/movies/:imdbID",
        element: <MovieCard />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
