import React, { useState, useContext } from 'react';
import { TextField } from '@mui/material';
import { PodcastContext } from '../../../contexts/PodcastContext';

function SearchBar(props) {
  const msg = useContext(PodcastContext);
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event) => {
    console.log(`Searching for "${searchTerm}"`);

  };

  return (
    <>
      <TextField
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search"
        onKeyDown={handleKeyDown}
        {...props}
      />
      <div>{msg}</div>
    </>

  );
}

export default SearchBar;
