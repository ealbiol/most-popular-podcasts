import React, { useEffect, useState } from "react";
import PodcastCard from "../PodcastCard/PodcastCard";
import fetchPodcasts from "../../api/podcastApi";
import "./PodcastsList.css"

const PodcastsList = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    const getPodcasts = async () => {
      try {
        const data = await fetchPodcasts();
        setPodcasts(data.feed.entry);
      } catch (error) {
        console.error(error);
      }
    };
    getPodcasts();
  }, []);

  return (
    <>
      {podcasts.map((podcast) => (
        <PodcastCard key={podcast.id.attributes["im:id"]} podcast={podcast} />
      ))}
    </>
  );
};

export default PodcastsList;
