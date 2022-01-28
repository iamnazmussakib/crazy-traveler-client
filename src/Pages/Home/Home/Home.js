import React, { useEffect, useState } from 'react';
import { Button, Card, Carousel, Col, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './Home.css';
import bnr1 from '../../../images/bnr1.jpg'
import bnr2 from '../../../images/bnr2.jpg'
import bnr3 from '../../../images/bnr3.jpg'
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import { Link } from 'react-router-dom';
import Sidebar from '../../Sidebar/Sidebar';
import { Pagination, Rating } from '@mui/material';

const contents = [
    {
        id: 1,
        banner: bnr1,
        name: 'Luxury Apartments Darvina StreetOpens in new window',
        desc: 'Free Wi-Fi, a balcony and a flat-screen TV are features of these apartments in Kiev. The apartments are in the city centre and all within 700 metres of the Olympic Stadium.'
    },
    {
        id: 2,
        banner: bnr2,
        name: 'Apartment Mihailovskaya',
        desc: 'Situated within the Shevchenkivskyj district in Kyiv, Apartment Mihailovskaya has air conditioning, a balcony, and city views. It is located 700 metres from St.'
    },
    {
        id: 3,
        banner: bnr3,
        name: 'Premier Hotel Lybid',
        desc: 'Lybid Hotel offers in the heart of Kiev city centre, beside the Ukraina Shopping Mall. Kiev Train Station and Vokzalnaya Metro Stationa are a 7-minute walk from the hotel.'
    }
]

const Home = () => {
    const {isLoading} = useAuth();
    const [blogs, setBlogs] = useState([]);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const size = 6;
    useEffect(() => {
        fetch(`http://localhost:5000/blogs?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setBlogs(data.blogs);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            });
    }, [page]);



    const approvedBlog = blogs.filter(art => art.status === 'approved');
    console.log(approvedBlog);
    if(isLoading){
        return <div className="text-center mt-5">
            <Spinner className="mt-5" animation="grow" />
        </div>
    }
    return (
        <>
        <Navigation></Navigation>
        <div className="home">
            <div className="sliders">
                <Carousel>
                {
                    contents.map(content =>
                        
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={content.banner}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h1>{content.name}</h1>
                            <p style={{textShadow: '2px 2px 2px #000000'}}>{content.desc}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                }
                </Carousel>
            </div>
            
            
        </div>
        <div className='container-fluid'>
            <div className="row">
                <div className="col-12 col-md-8">
                    <h2 className="text-center my-5">Travel Experience</h2>
                    <Row xs={1} md={2} className="g-4">
                    {
                        approvedBlog.map(sBlog => <Col>
                                <Card style={{border: '1px solid transparent'}} className='text-center'>
                                    <Card.Img style={{borderRadius: 25, maxHeight:400}} variant="top" src={`data:image/png;base64,${sBlog.image}`} />
                                    <Card.Body>
                                    <Card.Title>{sBlog.title}</Card.Title>
                                    <Card.Text>
                                        {sBlog.desc.slice(0, 150)}
                                    </Card.Text>
                                    <Card.Text>
                                        {sBlog.date}
                                    </Card.Text>
                                    <Card.Text>
                                        <Rating name="read-only" value={parseInt(sBlog.ratings)} readOnly />
                                    </Card.Text>
                                    <Link to={`/blogs/${sBlog._id}`}><Button variant="primary">View Details</Button></Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                    </Row>
                    <p className='text-center'>Pages</p>
                    <div className="col-12 text-center d-flex justify-content-center">
                        {
                            [...Array(pageCount).keys()]
                                .map(number => <button
                                    className={`btn btn-primary mx-2 ${number === page ? 'selected' : ''}`}
                                    key={number}
                                    onClick={() => setPage(number)}
                                >{number + 1}</button>)
                        }
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <Sidebar></Sidebar>
                </div>
            </div>
        </div>
        
            <div className="container mx-auto about-us">
                <img className="" src="https://image.freepik.com/free-vector/organic-flat-feedback-concept-illustrated_23-2148951369.jpg" alt="" />
                <div className="about-content">
                    <h2>You can share your travel experience</h2>
                    <p className="text-dark">Amazing Tours is leading tour operator of Bangladesh and we are member of BD TOUR and Tour Operators Association of Bangladesh (TOAB). We are not only for tour operator, our Established Software company, This company provide many product is travel related and others kinds of software. Amazing Tours provides inbound and outbound tour operate. Inbound tours provide experience guide, standard and any categorys hotel, best tours spot selection and your security.</p>
                </div>
            </div>
        <Footer></Footer>
        </>
    );
};

export default Home;