import React, { useEffect, useState } from "react";
import { Chip, Stack } from '@mui/material';
import fetchPodcasts from "../../../api/podcastApi";

export default function NumberChip() {
    const [numPodcasts, setNumPodcasts] = useState(null);

    useEffect(() => {
        const getPodcasts = async () => {
          try {
            const data = await fetchPodcasts();
            setNumPodcasts(data.feed.entry);
          } catch (error) {
            console.error(error);
          }
        };
        getPodcasts();
      }, []);

    return (
        <Stack direction="row" spacing={1}>
            <Chip label="100" color="primary" />
        </Stack>
    )
}
