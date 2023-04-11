import React, { useEffect } from "react";
import PodcastCard from "../PodcastCard/PodcastCard";
import fetchPodcasts from "../../api/podcastApi";
import "./PodcastsList.scss"
import { useContext } from "react";
import { PodcastContext } from "../../contexts/PodcastContext";

const PodcastsList = (props) => {

  const { podcasts, setPodcasts } = useContext(PodcastContext);

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
    <div className="podcasts-list">
      {podcasts?.map((podcast, index) => (
        <PodcastCard key={index} podcast={podcast} />
      ))}
    </div>
  );
};

export default PodcastsList;
