import React from 'react';
import {Grid, Typography, Button} from '@mui/material';

const Home = () => {
    //style
    const centering = {display: "flex", justifyContent: "center", alignItems:"center"};
    const btnStyle = {minWidth: "150px", minHeight: "50px", fontSize: "25px"};

    return (
        <Grid container spacing={6} marginTop={5} direction="row" style={centering} >
            <Grid item xs={12} style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
                <Typography variant='h1'>Welcome to Dev-Duel</Typography>
            </Grid>        

            <Grid item xs={6} direction="column" style={centering}>
                <Button href="/inspect" variant="outlined" style={btnStyle}>Inspect</Button>
                <Typography variant="h5">Look up a fellow dev's Github info.</Typography>
            </Grid>
                
            <Grid item xs={6} direction="column" style={centering}>
                <Button href="/duel" variant="outlined" style={btnStyle}>Duel</Button>
                <Typography variant="h5">Pick two devs to go head to head.</Typography>
            </Grid>
        </Grid>
    )
}

export default Home;