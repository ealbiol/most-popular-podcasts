import React from "react";
import {Card,CardMedia,CardContent,Typography} from '@mui/material';
import "./PodcastCard.css"

const PodcastCard = ({ podcast }) => {
  const { title, "im:artist": artist, "im:image": image, "im:releaseDate": releaseDate } = podcast;
  const imageUrl = image[2].label;

  return (
    <Card sx={{ maxWidth: 345 }} className="podcast-card">
      <CardMedia
        component="img"
        height="100%"
        image={imageUrl}
        alt={`Cover art for ${title.label}`}
      />
      <CardContent className="podcast-details">
        <Typography gutterBottom variant="h5" component="div">{title.label}</Typography>
        <Typography variant="body2" color="text.secondary">{artist.label}</Typography>
        <Typography variant="body2" color="text.secondary">{releaseDate.attributes.label}</Typography>
      </CardContent>
    </Card>
  );
};

export default PodcastCard;
