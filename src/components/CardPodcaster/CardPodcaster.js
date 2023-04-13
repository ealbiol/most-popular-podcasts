import React from 'react'
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Box,
    Divider
} from '@mui/material';

export default function CardPodcaster(props) {
    const { imageUrl, name, artist, description } = props;
    return (
        <Box>
            <Card align="center" sx={{ width: 245 }}>
                <CardMedia
                    component="img"
                    sx={{ borderRadius: '4%', width: "170px", m: "1", marginTop: "25px", marginBottom: "10px" }}
                    image={imageUrl}
                />
                <CardContent>
                    <Divider />
                    <Typography align="left" variant="subtitle2" sx={{ fontWeight: 'bold', marginTop: "18px" }}>{name}</Typography>
                    <Typography align="left" variant="subtitle2" sx={{ fontStyle: 'italic', marginBottom: "18px" }}>by {artist}</Typography>
                    <Divider />
                    {/*<Typography variant="subtitle1" color="text.secondary">{artist}</Typography>*/}
                    <Typography align="left" variant="subtitle2" sx={{ fontWeight: 'bold', marginTop: "18px" }}>Description:</Typography>
                    <Typography align="left" variant="subtitle2" sx={{ fontStyle: 'italic' }}>{description}</Typography>
                </CardContent>
            </Card>
        </Box>
    )
}
