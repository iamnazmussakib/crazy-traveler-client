import React, { useState } from 'react';
import './Footer.css';
import emailjs from '@emailjs/browser';
import { Alert } from 'react-bootstrap';

const Footer = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nunsd52', 'template_jvbo9gf', e.target, 'user_ozjW9sFhb75aOGKGcLR9o')
            .then((result) => {
                setSuccess(true)
                setError('');
                e.target.reset();
            }, (error) => {
                setError(error.text);
            });
    };
    return (
        <>
            <section className="contact">
            <div className="container">
                <div className="text-white text-start section-heading col-12"><h2>Contact <span>Me</span></h2></div>
                <div className="row">
                    <div className="left-area col-12 col-md-4">
                        <div className="title text-start" ><h3>DON'T BE SHY !</h3></div>
                        <div className="desc" ><p>Our shops are located in
                  the heart of the city. You can easily reach us by metro or by
                  land transport.</p></div>
                        <div className="mail" >
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <div className="text text-start">
                                <p>mail me</p>
                                <p><span>nazmussakibppp22@gmail.com</span></p>
                            </div>
                        </div>
                        <div className="call" >
                            <i className="fa fa-phone-square" aria-hidden="true"></i>
                            <div className="text text-start">
                                <p>call me</p>
                                <p><span>01403102334</span></p>
                            </div>
                        </div>
                        <div className="social-icon">
                            <i className="fab fa-facebook" aria-hidden="true"></i>
                            <i className="fab fa-twitter" aria-hidden="true"></i>
                            <i className="fab fa-youtube" aria-hidden="true"></i>
                            <i className="fab fa-dribbble" aria-hidden="true"></i>
                        </div>
                    </div>

                    <div className="right-area col-12 col-md-8">
                        <div className="row">
                            <form onSubmit={sendEmail}>
                                <input required className="name ps-4" type="text" placeholder="Your Name" name="name" />
                                <input required className="email ps-4" type="email" placeholder="Your Email" name="email" />
                                <input required className="subject ps-4" type="text" placeholder="Your Subject" name="subject" />
                                <textarea required className="msg col-12 ps-4" name="" cols="30" rows="10" name="message" placeholder="Your Massage"></textarea>
                                <input type="submit" value="Send Massage" />
                            </form>
                            {success && <Alert variant="success">
                                Message Send Successfully
                            </Alert>}
                            {error && <Alert variant="danger">
                                {error}
                            </Alert>}
                        </div>


                    </div>
                </div>
            </div>
        </section>
        <div className="footer">
            <div className="copyright-text">
                <p>Copyright © 2021 CRAZY TRAVELER Rights Reserved.</p>
            </div>
        </div>
        </>
    );
};

export default Footer;