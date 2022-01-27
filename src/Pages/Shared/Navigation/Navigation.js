import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth'
import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png';


const Navigation = () => {
    const {user, logout} = useAuth();
    return (
        <Navbar expand="lg">
            <Container>
            <Navbar.Brand><Link to="/">
                <img src={logo} alt="" className="d-inline-block align-top" />
                </Link>
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Nav className='align-items-center'>
                    <Nav.Link><Link to="/db-login"><Navbar.Text className="text-white mx-1 p-0">Database</Navbar.Text></Link></Nav.Link>
                    {user.email && <Nav.Link><Link to="/addblog"><Navbar.Text className="text-white mx-1 p-0">Share Your Experience</Navbar.Text></Link></Nav.Link>}
                    {user.email && <Navbar.Text className="text-white mx-1">
                        Signed in as: {user.displayName}
                    </Navbar.Text>}
                    <Nav.Link><Link to="/login">{!user.email ? 'Login' : <button className="btn btn-outline-light" onClick={logout}>LogOut</button>}</Link></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;