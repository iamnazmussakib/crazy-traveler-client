import { Button, Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ManageArticle = ({ article, allArticle, setAllArticle }) => {
    const { title, desc, expense, image, _id, status } = article;
    const [bStatus, setBStatus] = useState(status);
    const handleDeleteBtn = id => {
        const procced = window.confirm('Are You Sure To Delete This article?');
        if (procced) {
            fetch(`http://localhost:5000/blogs/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('article Deleted Successfully');
                        const leftArticle = allArticle.filter(article => article._id !== id);
                        setAllArticle(leftArticle);
                    }
                });
        }
    };

    const handleUpdate = id => {
        fetch(`http://localhost:5000/blogs/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Status Approved');
                    setBStatus('Approved');
                }
            })
    }
    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 5, textAlign: 'center' }}>
                <Typography sx={{ textTransform: 'uppercase', textAlign: 'center', my: 1 }} variant="h5" color="secondary">{bStatus}</Typography>
                <img style={{ width: '100%' }} src={`data:image/png;base64,${image}`} alt="" />
                <Typography sx={{ my: 2 }} variant="h5">{title}</Typography>
                <Typography sx={{ my: 2 }} variant="body1">expense: {expense}</Typography>
                <Typography sx={{ my: 2 }} variant="body1">Desc: {desc.slice(0, 100)}</Typography>
                <Button onClick={() => { handleUpdate(_id) }} sx={{ width: '100%', my:1 }} color="primary" variant="contained">Approve Article</Button>
                <Link to={`/blogs/${_id}`}><Button sx={{ width: '100%', my:1 }} color="primary" variant="contained">View Article</Button></Link>
                <Button onClick={() => { handleDeleteBtn(_id) }} sx={{ width: '100%', my:1 }} color="primary" variant="contained">Update Article</Button>
                <Button onClick={() => { handleDeleteBtn(_id) }} sx={{ width: '100%', my:1 }} color="primary" variant="contained">Delete Article</Button>
            </Paper>

        </Grid>
    );
};

export default ManageArticle;