
import {  createBrowserRouter } from "react-router-dom";
import { PodcastsPage } from "../pages/PodcastsPage";

export const routes = createBrowserRouter([
    {
      path: "/",
      element: <PodcastsPage />,
    },
  ]);
  