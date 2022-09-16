import React, {useState} from 'react';
import {Grid, Button, Alert} from '@mui/material';
import ResultCard from './ResultCard';
import DevForm from './DevForm';

//backend
import { inspectUser} from '../services/userService';

const Inspect = () => {
    const [user, setUser] = useState(null);

   //style
    const centering = {display: "flex", justifyContent: "center", alignItems:"center"};
    const userStyle = {minWidth: "150px", minHeight: "30px", fontSize: "20px"};

    //getting user information and handle user not found
    const getUser = async(username) => {
        try {
            const userData = await inspectUser(username);
            setUser(userData);
        } catch (err) {
            handleError();
            console.log(err.message);
        }
    }

    //handle inspecting user
    const [inspect, setInspect] = useState(false);
    const handleInspect = () => {
        setInspect(true);
    }

    //handle inspecting user
    const [error, setError] = useState(false);
    const handleError = () => {
        setError(true);
        setTimeout(() => {
            setError(false);
        }, "8000");
    }

    return (       
            <Grid container marginTop={5} direction="row" style={centering} >
                {error === true ?
                    <Grid item xs={12} style={centering}> 
                        <Alert severity="error">Please enter an existing gitHub user!!!</Alert>
                    </Grid>
                :
                null            
                }
                
                <DevForm type='inspect' handleType={handleInspect} getDev={getUser}></DevForm>

                {user !== null && inspect === true ? 
                    <Grid item xs={12} style={centering} direction='column'>
                        <h3>***</h3>
                        <Button variant="contained" size="large" disableElevation style={userStyle}>{user.username}</Button>
                        <ResultCard user={user} />
                    </Grid>
                    : 
                    null
                }

            </Grid>
    )
}

export default Inspect;