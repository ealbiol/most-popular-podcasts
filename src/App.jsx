import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { PodcastContext } from "./contexts/PodcastContext";

import PodcastDetails from "./pages/PodcastDetails";
import PodcastsPage from "./pages/PodcastsPage";

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
        setPodcastDetails,
      }}
    >
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<PodcastsPage />} />
            <Route path="podcast/:id" element={<PodcastDetails />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </PodcastContext.Provider>
  );
};

export default App;
