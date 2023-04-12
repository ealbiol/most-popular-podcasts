import React from 'react';
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import NumberChip from './NumberChip/NumberChip';
import Box from '@mui/material/Box';


function Layout({ children }) {

    return (
        <>
            <Header />
            <Box sx={{ p: 4, display: 'flex', flexDirection: 'row-reverse', alignItems: 'center' }}>
                <SearchBar />                
                <NumberChip />
            </Box>
            {children}

        </>
    );
}

export default Layout;
