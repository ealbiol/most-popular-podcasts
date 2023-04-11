import React from 'react';
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import NumberChip from './NumberChip/NumberChip';


function Layout({ children }) {

    return (
        <>
            <Header />
            <br />
            <NumberChip />
            <SearchBar />

            {children}
        </>
    );
}

export default Layout;
