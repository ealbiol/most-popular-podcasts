import React, {useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Link, Box } from '@mui/material';
import { useContext } from "react";
import { PodcastContext } from "../../contexts/PodcastContext";
import "./PodcastCard.scss"

const PodcastCard = ({ podcast }) => {
  const { setPodcastDetails } = useContext(PodcastContext);
  const navigate = useNavigate();

  const {
    //title, 
    "im:artist": artist,
    "im:image": image,
    //"im:releaseDate": releaseDate, 
    "im:name": name
  } = podcast;
  const imageUrl = image[2].label;


  const handlePodcastDetails = () => {
    setPodcastDetails(podcast);
    const attributes = podcast.id.attributes;
    const idPodcast = attributes["im:id"];
    console.log(podcast);
    navigate(`/podcasts/${idPodcast}`);
  }


  return (
    <>
      <Link onClick={handlePodcastDetails} underline="none" color="black" href="">
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <CardMedia
            component="img"
            image={imageUrl}
            sx={{ width: 150, position: "relative", top: "90px" }}
            alt={`Cover for ${artist.label}`}
            className="rounded-image"
          />
          <Card align="center" sx={{ width: 245 }} className="podcast-card">
            <CardContent style={{ paddingTop: "100px" }}>
              <Typography gutterBottom variant="h6" component="div">{name.label}</Typography>
              <Typography variant="body2" color="text.secondary">Author: {artist.label}</Typography>
              {/*<Typography variant="body2" color="text.secondary">{releaseDate.attributes.label}</Typography>*/}
            </CardContent>
          </Card>
        </Box>
      </Link>
    </>
  );
};

export default PodcastCard;
