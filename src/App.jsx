import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import Layout from "./components/Layout/Layout";
import { PodcastContext } from "./contexts/PodcastContext";


const App = () => {
  const [podcasts, setPodcasts] = useState(null);
  const [podcastFiltered, setPodcastFiltered] = useState(null);
  const [numPodcast, setNumPodcast] = useState(null);
  const [podcastDetails, setPodcastDetails] = useState(null);

  return (
    <PodcastContext.Provider
      value={{
        podcasts,
        setPodcasts,
        podcastFiltered,
        setPodcastFiltered,
        numPodcast,
        setNumPodcast,
        podcastDetails,
        setPodcastDetails
      }}>
      <Layout>
        <RouterProvider router={routes} />
      </Layout>
    </PodcastContext.Provider>

  );
};

export default App;
