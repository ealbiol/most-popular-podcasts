import React, { useContext, useEffect, useState } from 'react';
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
  Paper
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { fetchEpisodesPodcast } from '../api/podcastApi';
import { episodesNeedRecall } from '../components/utils/PodcastUtils';
import CardPodcaster from '../components/CardPodcaster/CardPodcaster';
import { useNavigate } from 'react-router-dom';

export default function PodcastDetails() {
  const { podcastDetails, setSelectedEpisode } = useContext(PodcastContext);
  const [episodesPodcast, setEpisodesPodcast] = useState(null)
  const [episodesCount, setEpisodesCount] = useState(null)

  const navigate = useNavigate();

  const handleEpisodeDetails = (episode) => {
    setSelectedEpisode(episode);
    console.log("tracked", episode.trackId);
    navigate(`/podcast/${podcastDetails['id']['attributes']['im:id']}/episode/${episode.trackId}`)
  }


  const getEpisodesRecord = async (response, id) => {
    let record = [];
    if (response.needed) {
      const data = await fetchEpisodesPodcast(id);
      const episodesRecord = {
        id_podcast: id,
        date: new Date(),
        episodes: data.results
      }
      record = episodesRecord;

    } else {
      record = response.episodes;
    }
    return record;
  }

  useEffect(() => {
    console.log("DETAILS IN PODDETAILS", podcastDetails['id']['attributes']['im:id'])
    const id = podcastDetails['id']['attributes']['im:id'];
    const getEpisodes = async (id) => {
      try {
        const arrEpisodes = JSON.parse(window.localStorage.getItem('podcastEpisodes')) || [];

        const response = episodesNeedRecall(arrEpisodes, id);
        const record = await getEpisodesRecord(response, id);
        console.log("RECORD", record);
        arrEpisodes.push(record);
        window.localStorage.setItem('podcastEpisodes', JSON.stringify(arrEpisodes));

        setEpisodesCount(record.episodes.length - 1)
        setEpisodesPodcast(record.episodes.slice(1))

      } catch (error) {
        console.error(error);
      }
    };
    getEpisodes(id)
  }, [])


  const name = podcastDetails['im:name']['label'];
  const artist = podcastDetails['im:artist']['label'];
  const description = podcastDetails.summary.label;
  const imageUrl = podcastDetails['im:image'][2]['label'];
  const podcastId = podcastDetails['id']['attributes']['im:id'];

  console.log("podcastDetails", podcastId);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
      fontWeight: 'bold'
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "40px" }}>

        <CardPodcaster 
        imageUrl={imageUrl} 
        name={name} 
        artist={artist} 
        description={description}
        podcastId={podcastId}
        />

        <br />
        <br />

        <Box>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>Episodes: {episodesCount}</Typography>
            </CardContent>
          </Card>

          <br />

          <TableContainer sx={{ marginBottom: "25px" }} component={Paper}>
            <Table sx={{ minWidth: 1000 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Title</StyledTableCell>
                  <StyledTableCell align="right">Date</StyledTableCell>
                  <StyledTableCell align="right">Duration</StyledTableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {episodesPodcast?.map((episode, index) => (
                  <React.Fragment key={index}>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        <Link sx={{cursor:"pointer"}} onClick={() => handleEpisodeDetails(episode)}>
                          {episode.trackName.substring(episode.trackName.indexOf('|') + 1).trim().replace(/^"(.*)"$/, '$1')}
                        </Link>
                      </StyledTableCell>
                      <StyledTableCell align="right">{episode.releaseDate.slice(0, 10)}</StyledTableCell>
                      <StyledTableCell align="right">{episode.trackTimeMillis ? new Date(episode.trackTimeMillis).toISOString().slice(11, 16) : ""}</StyledTableCell>
                    </StyledTableRow>
                  </React.Fragment>
                ))}
              </TableBody>

            </Table>
          </TableContainer>
        </Box>

      </Box>

    </>
  )
}
