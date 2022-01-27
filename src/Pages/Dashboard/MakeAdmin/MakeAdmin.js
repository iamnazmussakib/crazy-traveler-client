import { Alert, Button, Container, Grid, Paper, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [success, setSeccess] = useState(false);
        
        
    const handleAdmin = e => {
        const user = { email, pass, role: 'admin' };
        fetch('https://vast-inlet-83299.herokuapp.com/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSeccess(true);
                }
                console.log(data);
            })
        e.preventDefault();
    }
    return (
        <Container>
            <Grid sx={{ mt: 8 }} container spacing={2}>
                <Grid item xs={12} md={6}>
                    <h1>Make Sure To Create An Admin</h1>
                    <h3>An admin will Manage -All Articles-, -Add A Ariticle-, -Make Admin-.</h3>
                </Grid>
                <Grid item xs={12} md={6}>
                    <form onSubmit={handleAdmin}>
                        <Paper elevation={2} sx={{ py: 5, textAlign: 'center' }}>
                            <h3 style={{ textAlign: 'center' }}>Create An Admin</h3>
                            <TextField
                                sx={{ width: '80%', m: 1 }}
                                id="outlined-size-small"
                                label="Email"
                                type="email"
                                onBlur={e => setEmail(e.target.value)}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '80%', m: 1 }}
                                id="outlined-size-small"
                                label="Password"
                                type="text"
                                onBlur={e => setPass(e.target.value)}
                                size="small"
                            />
                            <Button color="primary" variant="contained" sx={{ width: '80%', mt: 5 }} type="submit">Add Admin</Button>
                            {success && <Alert severity="success">Make Admin Successfully!</Alert>}
                        </Paper>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default MakeAdmin;