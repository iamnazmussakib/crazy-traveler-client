import { Alert, Button, Container, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBlog = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [desc, setDesc] = useState('')
    const [address, setAddress] = useState('')
    const [expense, setExpense] = useState('')
    const [handleRating, setHandleRating] = useState('');
    const handleOnChange = e => {
        setHandleRating(e.target.value);
    }
    const navigate = useNavigate();
    const [singleBlog, setSingleBlog] = useState({});
     const initialValue = {
            title: singleBlog.title,
            date: singleBlog.date,
            desc: singleBlog.desc,
            address: singleBlog.address,
            ratings: handleRating,
            expense: singleBlog.expense}
    const { blogIdUd } = useParams();
    useEffect(() => {
        fetch(`https://vast-inlet-83299.herokuapp.com/blogsUd/${blogIdUd}`)
            .then(res => res.json())
            .then(data => setSingleBlog(data));
    }, [])
    const handleUpdateBlog = e => {
        e.preventDefault();

        // const formData = new FormData();
        // formData.append('title', title);
        // formData.append('date', date);
        // formData.append('desc', desc);
        // formData.append('address', address);
        // formData.append('ratings', handleRating);
        // formData.append('expense', expense);
        const formDatas = {
            ...initialValue,
            title,
            date,
            desc,
            address,
            ratings: handleRating,
            expense,
        }
       
        fetch(`https://vast-inlet-83299.herokuapp.com/blogs/${blogIdUd}`, {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(formDatas)
        })
            .then(res => res.json())
            .then(result => {
                if(result.modifiedCount > 0)
                setSuccess(true)
                navigate('/dashboard/manage-article')
            })
            .catch(error => {
                setError(error);
            })

    }
    return (
        <>
            <Container>

                <Box sx={{ width: '75%', textAlign: 'center', mx: 'auto', mt: 16 }}>
                    <form className='d-flex justify-content-center' id="addProduct" onSubmit={handleUpdateBlog}>
                        <Paper elevation={2} sx={{ py: 5 }}>
                            <Typography color="primary" sx={{ mb: 5 }} variant="h5">Updating {singleBlog.title}</Typography>
                            <input
                                style={{ width: '80%', margin: '10px auto' }}
                                className='form-control'
                                defaultValue={singleBlog.title}
                                name="name"
                                onBlur={e => setTitle(e.target.value)}
                            />
                            <input
                                style={{ width: '80%', margin: '10px auto' }}
                                className='form-control'
                                name="desc"
                                value={singleBlog.desc}
                                onChange={e => setDesc(e.target.value)}
                                size="small"
                            />
                            <input
                                style={{ width: '80%', margin: '10px auto' }}
                                className='form-control'
                                name="date"
                                defaultValue={singleBlog.date || ''}
                                onChange={e => setDate(e.target.value)}
                                size="small"
                            />
                            <input
                                style={{ width: '80%', margin: '10px auto' }}
                                className='form-control'
                                name="expense"
                                defaultValue={singleBlog.expense || ''}
                                onChange={e => setExpense(e.target.value)}
                                size="small"
                            />
                            <input
                                style={{ width: '80%', margin: '10px auto' }}
                                className='form-control'
                                name="address"
                                defaultValue={singleBlog.address || ''}
                                onChange={e => setAddress(e.target.value)}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '80%', m: 1 }}
                                id="outlined-size-small"
                                name="img"
                                type="file"
                                size="small"
                            />
                            <FormControl sx={{ width: '80%', m: 1 }}>
                                <InputLabel id="demo-simple-select-label">Rating</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={handleRating}
                                    label="Rating"
                                    onChange={handleOnChange}
                                >
                                    <MenuItem value={1}>One</MenuItem>
                                    <MenuItem value={2}>Two</MenuItem>
                                    <MenuItem value={3}>Three</MenuItem>
                                    <MenuItem value={4}>Four</MenuItem>
                                    <MenuItem value={5}>Five</MenuItem>
                                </Select>
                            </FormControl>
                            <Button color="primary" variant="contained" sx={{ width: '80%', mt: 5 }} type="submit">Confirm Update</Button>

                        </Paper>
                    </form>

                    {
                        success && <Alert severity="success">Blog Update Successfully!</Alert>
                    }
                    {
                        error && <Alert severity="error">something went wrong</Alert>
                    }

                </Box>

            </Container>
        </>
    );
};

export default UpdateBlog;