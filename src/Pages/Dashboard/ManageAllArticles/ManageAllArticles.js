import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ManageArticle from './ManageAllArticle'

const ManageAllArticles = () => {
    const [allArticle, setAllArticle] = useState([]);
    useEffect(() => {
        fetch('https://vast-inlet-83299.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => {
                setAllArticle(data)
            });
    }, [])
    return (
        <>
            <Container>
                <Typography sx={{ my: 5, textAlign: 'center' }} variant="h2">Manage All Articles</Typography>
                <Grid container spacing={2}>
                    {
                        allArticle.map(article => <ManageArticle
                            key={article._id}
                            article={article}
                            allArticle={allArticle}
                            setAllArticle={setAllArticle}
                        ></ManageArticle>)
                    }

                </Grid>
            </Container>
        </>
    );
};

export default ManageAllArticles;