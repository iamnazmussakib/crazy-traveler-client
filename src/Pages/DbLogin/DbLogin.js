import { Button, Container, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

const DbLogin = () => {
    const [loginData, setLoginData] = useState({});
    // const [admin, setAdmin] = useState(false);
    const navigate = useNavigate();
    // const location = useLocation();
    const handleField = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }
    const [user, setUser] = useState(false);
    useEffect(()=>{
        fetch('https://vast-inlet-83299.herokuapp.com/users')
        .then(res => res.json())
        .then(data => data.map(dt => setUser(dt)))
    }, [])
    const handleLogin = e => {
        if(loginData.email === user.email && loginData.password === user.pass){
            console.log('login success');
            navigate('/dashboard');
        }
        // loginData.email, loginData.password, navigate, location;
        e.preventDefault();
    }
    return (

        <>
            <Container>
                <Box sx={{ width: '75%', textAlign: 'center', mx: 'auto', mt: 16 }}>
                    <form onSubmit={handleLogin}>
                        <Paper elevation={2} sx={{ py: 5 }}>
                            <Typography color="primary" sx={{ mb: 5 }} variant="h5">Database Login</Typography>
                            <TextField
                                sx={{ width: '80%', m: 1 }}
                                id="outlined-size-small"
                                label="Email"
                                type="email"
                                name="email"
                                onBlur={handleField}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '80%', m: 1 }}
                                id="outlined-size-small"
                                label="Password"
                                name="password"
                                onBlur={handleField}
                                type="password"
                                size="small"
                            />
                            <Button color="primary" variant="contained" sx={{ width: '80%', mt: 5 }} type="submit">Sign In</Button>
                        </Paper>

                    </form>
                </Box>
                    
                   
            </Container>
        </>
    );
};

export default DbLogin;