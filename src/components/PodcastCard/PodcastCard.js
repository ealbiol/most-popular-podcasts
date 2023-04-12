import React from "react";
import { Card, CardMedia, CardContent, Typography, Link, Box } from '@mui/material';
import "./PodcastCard.scss"

const PodcastCard = ({ podcast }) => {
  const { title, "im:artist": artist, "im:image": image, "im:releaseDate": releaseDate } = podcast;
  const imageUrl = image[2].label;


  return (
    <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <CardMedia
        component="img"
        image={imageUrl}
        sx={{ width: 150, position:"relative", top:"90px" }}
        alt={`Cover for ${title.label}`}
        className="rounded-image"
      />
      <Card align="center" sx={{ width: 245 }} className="podcast-card">
        <Link underline="none" color="black" href="#">

          <CardContent style={{paddingTop:"100px"}}>
            <Typography gutterBottom variant="h6" component="div">{title.label}</Typography>
            <Typography variant="body2" color="text.secondary">Author: {artist.label}</Typography>
            <Typography variant="body2" color="text.secondary">{releaseDate.attributes.label}</Typography>
          </CardContent>
        </Link>
      </Card>
    </Box>

  );
};

export default PodcastCard;
