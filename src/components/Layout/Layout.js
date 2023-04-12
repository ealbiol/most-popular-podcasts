import React from 'react';
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import NumberChip from './NumberChip/NumberChip';
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom';

function Layout({ children }) {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <>
            <Header />
            <Box sx={{ p: 4, display: 'flex', flexDirection: 'row-reverse', alignItems: 'center' }}>
                {currentPath === "/" &&
                    <>
                        <SearchBar />
                        <NumberChip />
                    </>
                }
            </Box>
            {children}
        </>
    );
}

export default Layout;
