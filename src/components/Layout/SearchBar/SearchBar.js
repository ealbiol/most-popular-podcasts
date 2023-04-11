import React, { useState, useContext } from 'react';
import { TextField } from '@mui/material';
import { PodcastContext } from '../../../contexts/PodcastContext';

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const { podcasts, setPodcasts } = useContext(PodcastContext);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyUp = (event) => {
    console.log(`Searching for "${searchTerm}"`);

    const filteredPodcasts = podcasts.filter((podcast) => {
      const artistName = podcast["im:artist"].label.toLowerCase();
      const title = podcast.title.label.toLowerCase();
      const searchTermLowerCase = searchTerm.toLowerCase();

      return title.includes(searchTermLowerCase) || artistName.includes(searchTermLowerCase);
    });

    setPodcasts(filteredPodcasts);
  };

  return (
    <>
      <TextField
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Filter Podcasts..."
        onKeyUp={handleKeyUp}
        {...props}
      />
    </>
  );
}

export default SearchBar;
