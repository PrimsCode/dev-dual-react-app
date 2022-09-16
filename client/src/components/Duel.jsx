import React, {Fragment, useState} from 'react';
import {Grid, Typography, Alert} from '@mui/material';
import ResultCard from '../components/ResultCard';
import DevForm from './DevForm';
//backend
import {duelUsers} from '../services/userService';

const Duel = () => {
    //style
    const centering = {display: "flex", justifyContent: "center", alignItems:"center"};

    //getting user information and handle user not found      
    const [users, setUsers] = useState([]);
    const getUsers = async(username1, username2) => {
        try {
            const data = await duelUsers(username1, username2);
            setUsers(data);
            (data[0]['total-stars'] > data[1]['total-stars'] ? setWinner(data[0].username) : setWinner(data[1].username))
            handleDuel();
        } catch (err) {
            handleError();
            console.log(err.message);
        }
    }
    
    //handle error
    const [error, setError] = useState(false);
    const handleError = () => {
        setError(true);
        setTimeout(() => {
            setError(false);
        }, "8000");
    }

    //handle dueling and winner
    const [duel, setDuel] = useState(false);
    const [winner, setWinner] = useState(null);
    const handleDuel = () => {
        setDuel(true);
    }

    return (
        <Fragment>
            <Grid container marginTop={5} direction="row" style={centering} >

            {error === true ?
                <Grid item xs={12} style={centering}> 
                    <Alert severity="error">Please enter existing gitHub users!!!</Alert>
                </Grid>
            :
            null            
            }

            <DevForm type='duel' handleType={handleDuel} getDev={getUsers}></DevForm>

            {users !== null && duel === true ?
            <Fragment>
                <Grid item xs={12} style={centering}>
                    <Typography variant='h3' style={{"color":"#32CD32"}}>{winner} is the WINNER!!!</Typography>
                </Grid>

                <Grid container style={centering}>
                    <Grid item xs={6} style={centering}>
                        <ResultCard user={users[0]} winner={winner}/>
                    </Grid>
                    <Grid item xs={6} style={centering}>
                        <ResultCard user={users[1]} winner={winner}/>
                    </Grid>
                </Grid>
            </Fragment>
            :
            null
            }

        </Grid>
    </Fragment>
    )
}

export default Duel;