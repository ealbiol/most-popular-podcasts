import React, { useContext } from 'react'
import { PodcastContext } from '../contexts/PodcastContext';

export default function PodcastDetails() {
  const { podcastDetails, setPodcastDetails } = useContext(PodcastContext);
  console.log("DETAILS", podcastDetails);
  return (
    <div>PodcastDetails</div>
  )
}
