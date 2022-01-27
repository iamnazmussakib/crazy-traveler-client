import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import './ShareExperience.css';

const ShareExperience = () => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState(null)
    const [address, setAddress] = useState('')
    const [time, setTime] = useState('')
    const [ratings, setRatings] = useState('')
    const [expense, setExpense] = useState('')
    const [success, setSuccess] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('date', date);
        formData.append('desc', desc);
        formData.append('image', image);
        formData.append('address', address);
        formData.append('time', time);
        formData.append('ratings', ratings);
        formData.append('expense', expense);
        formData.append('status', 'pending');
        

        fetch('https://vast-inlet-83299.herokuapp.com/blogs', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                setSuccess(true)
            })
            .catch(error => {
                console.log('error:', error)
            })

            console.log(formData)

            console.log(image)

    }
    return (
        <>
        <Navigation></Navigation>
        <Container className='addblog'>
            <h1 className='text-center my-5'>Share Your Beautifull Moment</h1>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control onChange={e => setTitle(e.target.value)} type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Date</Form.Label>
                    <Form.Control onChange={e => setDate(e.target.value)} type="text" placeholder="" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Short desc</Form.Label>
                    <Form.Control onChange={e => setDesc(e.target.value)} placeholder="" />
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Default file input example</Form.Label>
                    <Form.Control onChange={e => setImage(e.target.files[0])} type="file" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address</Form.Label>
                    <Form.Control onChange={e => setAddress(e.target.value)} placeholder="" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Time</Form.Label>
                    <Form.Control onChange={e => setTime(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Rattings</Form.Label>
                    <Form.Select onChange={e => setRatings(e.target.value)} defaultValue="Choose...">
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                        <option value={4}>Four</option>
                        <option value={5}>Five</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Expense</Form.Label>
                    <Form.Control onChange={e => setExpense(e.target.value)} />
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
                {success && <Alert variant='success'>Thanks for share. We got your article and wait for approve.</Alert>}
        </Container>
        <Footer></Footer>
        </>
    );
};

export default ShareExperience;