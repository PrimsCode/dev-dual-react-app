import React, {Fragment} from 'react';
import {Card, Grid, Typography, Button} from '@mui/material';

const ResultCard = ({user, winner}) => {
    const {bio, ['avatar-url'] : url , ...userInfo} = user;
    //style
    const centeringGrid = { display: "flex", justifyContent: "center", alignItems:"center" };

    return (
        <Fragment>
            {winner === user.username ? 
                <Card direction="row" style={{padding:"5px", marginTop:"30px"}} sx={{border: "3px solid #32CD32", width:'450px'}}>
                    <Grid container direction="row">
                        <Grid item xs={4} direction="column" align="center" style={centeringGrid}>
                            <img src={url} alt={userInfo.username} width="100" height="100" style={{"borderRadius":"50%"}}></img>
                            <h5>{bio}</h5>
                        </Grid>
                        <Grid item xs={8}>
                            <ul style={{"listStyle": "none"}}>
                            {Object.entries(userInfo).map(([key, value]) => 
                            <li style={{padding: "2px"}}><Typography variant='body1'><Button variant="contained" size="small">{key}</Button> {value}</Typography></li>
                            )}
                            </ul>
                        </Grid>
                    </Grid>
                </Card>
            :
                <Card direction="row" style={{padding:"5px", marginTop:"30px"}} sx={{width:'450px'}}>
                    <Grid container direction="row">
                        <Grid item xs={5} direction="column" align="center" style={centeringGrid}>
                            <img src={url} alt={userInfo.username} width="100" height="100" style={{"borderRadius":"50%"}}></img>
                            <h6>{bio}</h6>
                        </Grid>
                        <Grid item xs={5}>
                            <ul style={{"listStyle": "none"}}>
                            {Object.entries(userInfo).map(([key, value]) => 
                            <li style={{padding: "2px"}}><Typography variant='body1'><Button variant="contained" size="small" disableElevation>{key}</Button> {value}</Typography></li>
                            )}
                            </ul>
                        </Grid>
                    </Grid>
                </Card>
            }
        </Fragment>

    )
}

export default ResultCard;