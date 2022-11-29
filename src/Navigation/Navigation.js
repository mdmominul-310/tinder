import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navigation.css'
import logo from '../img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'


export default function Navigation() {
    return (
        <div className='sticky-top'>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} className="logo-img" /> Tinder
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <div className='dropdown-container'>
                                <a className='nav-item' href='#'>Products</a>
                                <div className='dropdown-content'>
                                    <a className='dropdown-item-nav' href='#'>Premium Features</a>
                                    <a className='dropdown-item-nav' href='#'>Subscription Tiers</a>
                                    <dvi className="sub-nav">
                                        <a className='dropdown-item-nav' href='#'>Tinder Plus</a>
                                        <a className='dropdown-item-nav' href='#'>Tinder Gold</a>
                                        <a className='dropdown-item-nav' href='#'>Tinder Plutinum</a>
                                    </dvi>
                                    <a className='dropdown-item-nav' href='#'>Swipe Night</a>
                                </div>
                            </div>

                            <div className='dropdown-container'>
                                <a className='nav-item' href='#'>Learn</a>
                                <div className='dropdown-content'>
                                    <a className='dropdown-item-nav' href='#'>Premium Features</a>

                                </div>
                            </div>

                            <div className='dropdown-container'>
                                <a className='nav-item' href='#'>Safety</a>
                                <div className='dropdown-content'>
                                    <a className='dropdown-item-nav' href='#'>community Guide Lines</a>
                                    <a className='dropdown-item-nav' href='#'>Saftey Tips</a>
                                    <a className='dropdown-item-nav' href='#'>Saftey and policy</a>
                                    <a className='dropdown-item-nav' href='#'>Saftey and Reporting</a>
                                    <a className='dropdown-item-nav' href='#'>Secqurity</a>





                                </div>
                            </div>

                            <div className='dropdown-container'>
                                <a className='nav-item' href='#'>Support</a>

                            </div>

                            <div className='dropdown-container'>
                                <a className='nav-item' href='#'>Download</a>

                            </div>
                        </Nav>
                        <Nav>
                            <a className='nav-item pe-5 d-flex align-items-center' href='#' >
                                <FontAwesomeIcon icon={faGlobe} className="me-2" />
                                English
                            </a>
                            <button className='btn-nav'>
                                Login
                            </button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
