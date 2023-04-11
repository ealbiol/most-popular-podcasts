import React from "react";
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import "./PodcastCard.scss"

const PodcastCard = ({ podcast }) => {
  const { title, "im:artist": artist, "im:image": image, "im:releaseDate": releaseDate } = podcast;
  const imageUrl = image[2].label;


  return (
    <Card align="center" sx={{ width: 245 }} className="podcast-card">
      <CardMedia
        component="img"
        image={imageUrl}
        sx={{ width: 150 }}
        alt={`Cover for ${title.label}`}
        className="rounded-image"
      />
      <CardContent className="podcast-details">
        <Typography gutterBottom variant="h6" component="div">{title.label}</Typography>
        <Typography variant="body2" color="text.secondary">Author: {artist.label}</Typography>
        {/*<Typography variant="body2" color="text.secondary">{releaseDate.attributes.label}</Typography>*/}
      </CardContent>
    </Card>
  );
};

export default PodcastCard;
