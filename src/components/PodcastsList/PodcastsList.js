import React, { useEffect } from "react";
import PodcastCard from "../PodcastCard/PodcastCard";
import fetchPodcasts from "../../api/podcastApi";
import "./PodcastsList.scss"
import { useContext } from "react";
import { PodcastContext } from "../../contexts/PodcastContext";
import { Box, Grid } from '@mui/material';
import { checkIfNeedsRecall } from "../utils/PodcastUtils";

const PodcastsList = (props) => {
  const { podcasts, setPodcasts, podcastFiltered, setNumPodcast } = useContext(PodcastContext);

  useEffect(() => {
    const getPodcasts = async () => {
      const recall = checkIfNeedsRecall();
      if (recall?.needed) {
        try {
          const data = await fetchPodcasts();
          const entry = data?.feed?.entry;

          setPodcasts(entry);
          setNumPodcast(entry.length);
          const localStorage = {
            entry,
            date: new Date()
          }
          window.localStorage.setItem('podcast', JSON.stringify(localStorage));
        } catch (error) {
          console.error(error);
        }
      } else {
        setPodcasts(recall.entry);
        setNumPodcast(recall.entry.length);
      }

    };
    getPodcasts();
  }, []);
  console.log(podcasts);

  return (
    <Grid container sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        display="grid"
        gridTemplateColumns={{
          xs: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={3}
      >
        {podcastFiltered && (
          podcastFiltered?.map((podcast, index) => (
            <PodcastCard key={index} podcast={podcast} />
          ))
        )}
        {!podcastFiltered && (
          podcasts?.map((podcast, index) => (
            <PodcastCard key={index} podcast={podcast} />
          ))
        )}
      </Box>
    </Grid>
  );
};

export default PodcastsList;


