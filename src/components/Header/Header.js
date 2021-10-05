import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {Link, NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <>
            <Navbar variant="dark" className="nav-bg py-3">
                <Container>
                <Link to="/" className="navbar-brand brand"> 
                  <span className="english">English </span>
                    Academy
                </Link>
                    <Nav className="ms-auto">
                        <NavLink className="my-link" activeClassName="nav-active" to="/home">Home</NavLink>
                        <NavLink className="my-link" activeClassName="nav-active" to="/services">Services</NavLink>
                        <NavLink className="my-link" activeClassName="nav-active" to="/about">About</NavLink>
                        <NavLink className="my-link" activeClassName="nav-active" to="/contact">Contact</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;