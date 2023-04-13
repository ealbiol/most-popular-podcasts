import React from 'react'
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Box,
    Divider,
    Link
} from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function CardPodcaster(props) {
    const { imageUrl, name, artist, description, podcastId } = props;

    const navigate = useNavigate();


    const handleEpisodeId = () => {
        navigate(`/podcast/${podcastId}`)

    }

    return (
        <Box>
            <Card align="center" sx={{ width: 245 }}>
                <Link sx={{ cursor: "pointer" }} onClick={() => handleEpisodeId(podcastId)}>
                    <CardMedia
                        component="img"
                        sx={{ borderRadius: '4%', width: "170px", m: "1", marginTop: "25px", marginBottom: "10px" }}
                        image={imageUrl}
                    />
                </Link>
                <CardContent>
                    <Divider />
                    <Typography align="left" variant="subtitle2" sx={{ fontWeight: 'bold', marginTop: "18px" }}>{name}</Typography>
                    <Link sx={{ cursor: "pointer" }} onClick={() => handleEpisodeId(podcastId)}>
                        <Typography align="left" variant="subtitle2" sx={{ fontStyle: 'italic', marginBottom: "18px" }}>by {artist}</Typography>
                    </Link>
                    <Divider />
                    <Typography align="left" variant="subtitle2" sx={{ fontWeight: 'bold', marginTop: "18px" }}>Description:</Typography>
                    <Typography align="left" variant="subtitle2" sx={{ fontStyle: 'italic' }}>{description}</Typography>
                </CardContent>
            </Card>
        </Box>
    )
}
