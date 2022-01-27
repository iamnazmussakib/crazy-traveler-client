import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ManageProduct from './ManageAllArticle';

const ManageAllArticles = () => {
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
            <Container>
                <Typography sx={{ my: 5, textAlign: 'center' }} variant="h2">Manage All Products</Typography>
                <Grid container spacing={2}>
                    {
                        allProducts.map(product => <ManageProduct
                            key={product._id}
                            product={product}
                            allProducts={allProducts}
                            setAllProducts={setAllProducts}
                        ></ManageProduct>)
                    }

                </Grid>
            </Container>
        </>
    );
};

export default ManageAllArticles;