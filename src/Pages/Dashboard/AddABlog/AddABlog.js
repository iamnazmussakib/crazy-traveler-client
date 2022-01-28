import { Alert, Button, Container, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const AddABlog = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState(null)
    const [address, setAddress] = useState('')
    const [expense, setExpense] = useState('')
    const [handleRating, setHandleRating] = useState('');
    const handleOnChange = e => {
        setHandleRating(e.target.value);
    }
    // const handleField = e => {
    //     const field = e.target.name;
    //     const value = e.target.value;
    //     const newLoginData = { ...productData };
    //     newLoginData[field] = value;
    //     setProductData(newLoginData);

    // }
    const handleAddBlog = e => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('date', date);
        formData.append('desc', desc);
        formData.append('image', image);
        formData.append('address', address);
        formData.append('ratings', handleRating);
        formData.append('expense', expense);
        formData.append('status', 'approved');
        // formData.append('title', productData.name);
        // formData.append('date', productData.date,);
        // formData.append('desc', productData.desc);
        // formData.append('image', productData.img);
        // formData.append('address', productData.address);
        // formData.append('rattings', handleRating);
        // formData.append('expense', `${productData.expense} TK`);

        fetch('https://vast-inlet-83299.herokuapp.com/blogs', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                setSuccess(true)
            })
            .catch(error => {
                setError(error);
            })

            console.log(formData)

    

        // const product = {
        //     name: productData.name,
        //     desc: productData.desc,
        //     date: productData.date,
        //     expense: `${productData.expense} TK`,
        //     address: productData.address,
        //     img: productData.img,
        //     status: 'approved',
        //     ratings: handleRating,
        // }
        // if (productData.img && productData.name && productData.desc) {
        //     fetch('https://aqueous-ravine-85233.herokuapp.com/sunglasses', {
        //         method: 'POST',
        //         headers: {
        //             'content-type': 'application/json'
        //         },
        //         body: JSON.stringify(product)
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             if (data.insertedId) {
        //                 setSuccess(true)
        //                 document.getElementById("addProduct").reset();
        //             }
        //         })
        // }
    }
    return (
        <>
            <Container>

                <Box sx={{ width: '75%', textAlign: 'center', mx: 'auto', mt: 16 }}>
                    <form id="addProduct" onSubmit={handleAddBlog}>
                        <Paper elevation={2} sx={{ py: 5 }}>
                            <Typography color="primary" sx={{ mb: 5 }} variant="h5">Add A Product</Typography>
                            <TextField
                                sx={{ width: '80%', m: 1 }}
                                id="outlined-size-small"
                                label="Name"
                                name="name"
                                onBlur={e => setTitle(e.target.value)}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '80%', m: 1 }}
                                id="outlined-size-small"
                                label="Short Description"
                                name="desc"
                                onBlur={e => setDesc(e.target.value)}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '80%', m: 1 }}
                                id="outlined-size-small"
                                label="Date"
                                name="date"
                                onBlur={e => setDate(e.target.value)}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '80%', m: 1 }}
                                id="outlined-size-small"
                                label="Expense"
                                name="expense"
                                onBlur={e => setExpense(e.target.value)}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '80%', m: 1 }}
                                id="outlined-size-small"
                                label="Address"
                                name="address"
                                onBlur={e => setAddress(e.target.value)}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '80%', m: 1 }}
                                id="outlined-size-small"
                                name="img"
                                type="file"
                                onBlur={e => setImage(e.target.files[0])}
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
                            <Button color="primary" variant="contained" sx={{ width: '80%', mt: 5 }} type="submit">Add Product</Button>

                        </Paper>
                    </form>

                    {
                        success && <Alert severity="success">Blog Added Successfully!</Alert>
                    }
                    {
                        error && <Alert severity="error">something went wrong</Alert>
                    }

                </Box>

            </Container>
        </>
    );
};

export default AddABlog;