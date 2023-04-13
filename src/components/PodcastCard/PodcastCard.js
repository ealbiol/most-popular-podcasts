import React, {useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Link, Box } from '@mui/material';
import { useContext } from "react";
import { PodcastContext } from "../../contexts/PodcastContext";

const PodcastCard = ({ podcast }) => {
  const { podcastDetails, setPodcastDetails } = useContext(PodcastContext);
  const navigate = useNavigate();

  const {
    //title, 
    "im:artist": artist,
    "im:image": image,
    //"im:releaseDate": releaseDate, 
    "im:name": name
  } = podcast;
  const imageUrl = image[2].label;


  const handlePodcastDetails = (e) => {
    e.preventDefault();
    setPodcastDetails(podcast);
  }
  useEffect(() => {
    if(podcastDetails){
      const attributes = podcastDetails.id.attributes;

      const idPodcast = attributes["im:id"];
      navigate(`/podcast/${idPodcast}`);
    }
  }, [podcastDetails])
  


  return (
    <>
      <Link onClick={handlePodcastDetails} underline="none" color="black" href="">
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <CardMedia
            component="img"
            image={imageUrl}
            sx={{ width: 150, position: "relative", top: "90px", borderRadius: '50%' }}
            alt={`Cover for ${artist.label}`}
          />
          <Card align="center" sx={{ width: 245 }}>
            <CardContent sx={{ paddingTop: "100px" }}>
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
