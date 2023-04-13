import React, { useContext } from 'react';
import { PodcastContext } from '../contexts/PodcastContext';
import {
    Card,
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
            <Box sx={{ display: "flex", justifyContent: "center", gap: "40px" }}>
                <Box>
                    <CardPodcaster name={name} artist={artist} description={description} imageUrl={imageUrl} />
                </Box>
                <Box>
                    <Card sx={{ maxWidth: "700px" }}>
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                {selectedEpisode.trackName.substring(selectedEpisode.trackName.indexOf('|') + 1).trim().replace(/^"(.*)"$/, '$1')}
                            </Typography>
                            <Typography sx={{ marginBottom: "18px" }} variant="body2">
                                {selectedEpisode.shortDescription}
                            </Typography>
                            <Divider />

                            <Typography sx={{ marginTop: "18px" }} variant="body2">
                                <audio style={{width:"100%"}} controls>
                                    <source src={selectedEpisode.episodeUrl} type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>



                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </>
    )
}
