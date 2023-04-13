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
  Paper,
  Divider
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { fetchEpisodesPodcast } from '../api/podcastApi';

export default function PodcastDetails() {
  const { podcastDetails } = useContext(PodcastContext);
  const [episodesPodcast, setEpisodesPodcast] = useState(null)
  const [episodesCount, setEpisodesCount] = useState(null)
  console.log(episodesPodcast);

  useEffect(() => {
    console.log("DETAILS IN PODDETAILS", podcastDetails['id']['attributes']['im:id'])
    const id = podcastDetails['id']['attributes']['im:id'];
    const getEpisodes = async (id) => {
      try {
        const data = await fetchEpisodesPodcast(id);
        setEpisodesCount(data.resultCount)
        setEpisodesPodcast(data.results.slice(1))
        console.log("Episodes: ", data);
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

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
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
            <Typography align="left" variant="subtitle2" sx={{ fontStyle: 'italic', marginBottom: "18px" }}>Song by: {name}</Typography>
            <Divider />
            {/*<Typography variant="subtitle1" color="text.secondary">{artist}</Typography>*/}
            <Typography align="left" variant="subtitle2" sx={{ fontWeight: 'bold', marginTop: "18px" }}>Description:</Typography>
            <Typography align="left" variant="body1" sx={{ fontStyle: 'italic' }}>{description}</Typography>
          </CardContent>
        </Card>

        <br />
        <br />

        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">Episodes: {episodesCount}</Typography>
          </CardContent>
        </Card>

        <br />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Title</StyledTableCell>
                <StyledTableCell align="right">Date</StyledTableCell>
                <StyledTableCell align="right">Duration</StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {episodesPodcast?.map((episode, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {episode.trackName}
                  </StyledTableCell>
                  <StyledTableCell align="right">{episode.releaseDate}</StyledTableCell>
                  <StyledTableCell align="right">{episode.trackTimeMillis}</StyledTableCell>

                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

    </>
  )
}
