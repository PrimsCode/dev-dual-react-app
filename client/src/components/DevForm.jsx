import React, {Fragment, useState} from "react";
import {Grid, Button, TextField} from '@mui/material';

const DevForm = ({type, handleType, getDev}) => {
    const centering = {display: "flex", justifyContent: "center", alignItems:"center", margin: "20px"};
    const btnStyle = {minWidth: "150px", minHeight: "50px", fontSize: "25px"};

    const [username, setUsername] = useState(null);
    const [users, setUsers] = useState({});

    //handle form change, submit, and validate if all data are inputted
    const handleChange = (e) => {
        e.preventDefault();
        const username = e.target.value;
        const {name, value} = e.target;
        if (type === 'duel'){
            setUsers(data => ({
                ...data,
                [name]: value
            }))
        } else {
            setUsername(username);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (handleValidation() === true){
            if (type === 'duel') {
                const bothUsers = Object.values(users);
                await getDev(bothUsers[0], bothUsers[1]);
                // setUsers({});
            } else {
                await getDev(username);
                setUsername(null);
                handleType();
            }
        }
        // handleType()
        return;
    }

    const handleValidation = () => {
        if (username === null && users === null) {
            alert(`${username} was not filled`);
            return false;
        }
        return true;
    }
    
    return (
        <Fragment> 
                {type === 'inspect' ?
                <form onSubmit={handleSubmit}>
                    <Grid item xs={12} style={centering}>
                        <TextField name="username"
                                    type="username" 
                                    label="username" 
                                    placeholder="Enter dev username"
                                    variant="filled" 
                                    inputProps={{style:{fontSize:'20px'}}} onChange={handleChange} fullWidth required />
                    </Grid>
                    <Grid item xs={12} style={centering}>
                        <Button type="submit" variant="outlined" style={btnStyle}>Inspect</Button>
                    </Grid>
                </form>
                :
                <form onSubmit={handleSubmit}>
                <Grid item xs={12} style={centering}>
                <TextField name="username1"
                                    type="username1" 
                                    label="username #1" 
                                    placeholder="Enter dev username"
                                    variant="filled"
                                    style={{paddingRight:"10px", paddingLeft:'10px'}} 
                                    inputProps={{style:{fontSize:'20px'}}} onChange={handleChange} fullWidth required />
                <TextField name="username2"
                                    type="username2" 
                                    label="username #2" 
                                    placeholder="Enter dev username"
                                    variant="filled" 
                                    style={{paddingRight:"10px", paddingLeft:'10px'}} 
                                    inputProps={{style:{fontSize:'20px'}}} onChange={handleChange} fullWidth required />
                </Grid>
                <Grid item xs={12} style={centering}>
                        <Button type="submit" variant="outlined" style={btnStyle}>Duel</Button>
                </Grid>
                </form>
            }
        </Fragment>
    )
}

export default DevForm;