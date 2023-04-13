import React, {useContext} from 'react';
import { PodcastContext } from '../contexts/PodcastContext';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Box,
    Divider
} from '@mui/material';
import CardPodcaster from '../components/CardPodcaster/CardPodcaster';

export default function PodcastEpisode() {
    const { podcastDetails, selectedEpisode } = useContext(PodcastContext);

    const name = podcastDetails['im:name']['label'];
    const artist = podcastDetails['im:artist']['label'];
    const description = podcastDetails.summary.label;
    const imageUrl = podcastDetails['im:image'][2]['label'];

    console.log("selected", selectedEpisode);

    return (
        <>
            <Box>
                <CardPodcaster name={name} artist={artist} description={description} imageUrl={imageUrl}/>
            </Box>
        </>
    )
}
