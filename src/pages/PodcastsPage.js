import React, {useContext} from 'react'
import PodcastsList from '../components/PodcastsList/PodcastsList'
import { PodcastContext } from '../contexts/PodcastContext';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Link,
    Box,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Divider
  } from '@mui/material';

export default function PodcastsPage() {
    const { episodesPodcast, setEpisodesPodcast } = useContext(PodcastContext);

    console.log("SINGLE PODCAST DETAILS", episodesPodcast);
    return (
        <>
            <PodcastsList />
            <Box>

            </Box>
        </>
    )
}
