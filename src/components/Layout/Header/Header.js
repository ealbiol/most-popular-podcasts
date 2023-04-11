import React from 'react'
import { Typography, AppBar, Box, Toolbar, Link } from '@mui/material';

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar color="transparent" position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link href="/" style={{textDecoration: 'none'}}>Podcaster</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
