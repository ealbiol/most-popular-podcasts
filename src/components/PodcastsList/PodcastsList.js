import React, { useEffect } from "react";
import PodcastCard from "../PodcastCard/PodcastCard";
import fetchPodcasts from "../../api/podcastApi";
import "./PodcastsList.scss"
import { useContext } from "react";
import { PodcastContext } from "../../contexts/PodcastContext";
import { Box, Grid } from '@mui/material';


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
  console.log(podcasts);

  return (

    <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          display="grid"
          gridTemplateColumns="repeat(4, 1fr)"
          sx={{ m: 4 }}
          gap={4}
          style={{ border: "1px solid red" }}
        >
          {podcasts?.map((podcast, index) => (
            <PodcastCard key={index} podcast={podcast} />
          ))}
        </Box>


    </Grid>
  );
};

export default PodcastsList;


