
import {  createBrowserRouter } from "react-router-dom";
import PodcastsPage  from "../pages/PodcastsPage";
import PodcastDetails from "../pages/PodcastDetails";
export const routes = createBrowserRouter([
    {
      path: "/",
      element: <PodcastsPage />,
    },
    {
      path: "podcasts/:id",
      element: <PodcastDetails />
    }
  ]);
  