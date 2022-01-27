import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Sunglass from '../Sunglass/Sunglass';

const Sunglasses = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-ravine-85233.herokuapp.com/sunglasses')
            .then(res => res.json())
            .then(data => {
                setAllProducts(data)
            });
    }, [])
    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Typography sx={{ my: 5, textAlign: 'center' }} variant="h2">Our All Sunglasses</Typography>
                <Grid container spacing={2}>
                    {
                        allProducts.map(product => <Sunglass
                            key={product._id}
                            product={product}
                        ></Sunglass>)
                    }

                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Sunglasses;