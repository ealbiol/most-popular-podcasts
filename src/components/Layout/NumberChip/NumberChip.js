import React, { useContext, useEffect, useState } from "react";
import { Chip, Stack } from '@mui/material';
import fetchPodcasts from "../../../api/podcastApi";
import { PodcastContext } from "../../../contexts/PodcastContext";

export default function NumberChip() {
    const {numPodcast} = useContext(PodcastContext);

    return (
        <Stack direction="row" spacing={1}>
            <Chip label={numPodcast} color="primary" />
        </Stack>
    )
}
