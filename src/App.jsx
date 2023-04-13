import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { PodcastContext } from "./contexts/PodcastContext";
import PodcastDetails from "./pages/PodcastDetails";
import PodcastsPage from "./pages/PodcastsPage";
import PodcastEpisode from "./pages/PodcastEpisode";

const App = () => {
  const [podcasts, setPodcasts] = useState(null);
  const [podcastFiltered, setPodcastFiltered] = useState(null);
  const [numPodcast, setNumPodcast] = useState(null);
  const [podcastDetails, setPodcastDetails] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState(null)

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
        selectedEpisode,
        setSelectedEpisode
      }}
    >
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<PodcastsPage />} />
            <Route path="podcast/:id" element={<PodcastDetails />} />
            <Route path="podcast/:id/episode/:id" element={<PodcastEpisode />} />

          </Routes>
        </Layout>
      </BrowserRouter>
    </PodcastContext.Provider>
  );
};

export default App;
