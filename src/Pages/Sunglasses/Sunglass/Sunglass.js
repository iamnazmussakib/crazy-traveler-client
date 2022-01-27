import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Sunglass = ({ product }) => {
    const { name, desc, price, img, _id } = product;
    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 5, textAlign: 'center' }}>
                <div style={{minHeight: '400px'}}>
                    <img style={{ width: '100%', height: '130px' }} src={img} alt="" />
                    <div style={{minHeight: '80px', paddingTop: '20px'}}><Typography sx={{ }} variant="h5">{name}</Typography></div>
                    <Typography sx={{ my: 2 }} variant="body1">Price: {price}</Typography>
                    <div style={{minHeight: '50px', marginBottom: '40px'}}><Typography sx={{ my: 2 }} variant="body1">Price: {desc}</Typography></div>
                    <Link to={`/sunglasses/${_id}`} style={{ textDecoration: 'none' }}>
                        <Button sx={{ width: '100%' }} color="secondary" variant="contained">Buy Now</Button>
                    </Link>
                </div>
            </Paper>

        </Grid>
    );
};

export default Sunglass;