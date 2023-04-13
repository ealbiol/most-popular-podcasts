import React, { useContext } from "react";
import { Chip, Stack } from '@mui/material';
import { PodcastContext } from "../../../contexts/PodcastContext";

export default function NumberChip() {
    const { numPodcast } = useContext(PodcastContext);

    return (
        <Stack direction="row" spacing={1}>
            <Chip sx={{ fontWeight: "bold", fontSize:"20px" }} label={numPodcast} color="primary" />
        </Stack>
    )
}
