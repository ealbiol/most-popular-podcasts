import React, { useState, useEffect } from 'react';
import { Typography, AppBar, Grid, Link, CircularProgress } from '@mui/material';
import { useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <AppBar color="transparent" position="static">
            <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                    <Typography sx={{ margin: "18px" }} variant="h6" component="div">
                        <Link href="/" underline="none">
                            Podcaster
                        </Link>
                    </Typography>
                </Grid>
                <Grid sx={{ marginRight: "40px" }} item>
                    {isLoading && <CircularProgress />}
                </Grid>
            </Grid>
        </AppBar>
    );
}
