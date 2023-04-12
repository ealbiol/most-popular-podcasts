import React, { useState, useContext } from 'react';
import { TextField } from '@mui/material';
import { PodcastContext } from '../../../contexts/PodcastContext';

function SearchBar(props) {
  const [term, setTerm] = useState('');
  const { podcasts, setPodcastFiltered, setNumPodcast } = useContext(PodcastContext);
  
  const handleSearchChange = (event) => {
    // setSearchTerm(event.target.value);
    handleKeyUp(event.target.value);
  };

  const handleKeyUp = (searchTerm) => {
    console.log(`Searching for "${searchTerm}"`);

    const filteredPodcasts = podcasts.filter((podcast) => {
      const artistName = podcast["im:artist"].label.toLowerCase();
      const title = podcast.title.label.toLowerCase();
      const searchTermLowerCase = searchTerm.toLowerCase();

      return title.includes(searchTermLowerCase) || artistName.includes(searchTermLowerCase);
    });

    setPodcastFiltered(filteredPodcasts);
    setNumPodcast(filteredPodcasts.length);
    setTerm(searchTerm);
  };

  return (
    <>
      <TextField
        value={term}
        onChange={handleSearchChange}
        placeholder="Filter Podcasts..."
        // onKeyUp={handleKeyUp}
        sx={{ width: "400px", marginLeft:"20px" }}
        {...props}
      />
    </>
  );
}

export default SearchBar;
