import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import Layout from "./components/Layout/Layout";
import { PodcastContext } from "./contexts/PodcastContext";


const App = () => {
  const [podcasts, setPodcasts] = useState(null);

  return (
    <PodcastContext.Provider value={{ podcasts, setPodcasts }}>
      <Layout>
        <RouterProvider router={routes} />
      </Layout>
    </PodcastContext.Provider>

  );
};

export default App;
