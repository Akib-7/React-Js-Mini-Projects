import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  useParams,
} from "react-router-dom";
import { Layout } from "./Layout.jsx";
import { Home, About, GithubLoader, User, GithubCustomHook } from "./index.jsx";
import { githubInfoLoader } from "./Components/GithubLoader.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        loader={githubInfoLoader}
        path="githubLoader/:username?"
        element={<GithubLoader />}
      />
      <Route
        path="githubCustomHook/:username?"
        element={<GithubCustomHook />}
      />

      <Route path="users/:user_id" element={<User />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
