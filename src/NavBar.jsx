import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  Link } from "react-router-dom";
import './App.css'


const NavBar = () => {



  return (
    <>
        
        <Navbar id='firnav' style={{backgroundColor: 'rgba(0, 0, 0, 0)'}} expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src="img/logo.PNG" alt="" /> <b style={{marginTop: '40px'}}>ROLEX</b>
                </Navbar.Brand>
                <Navbar.Toggle style={{border: 'none'}} aria-controls="basic-navbar-nav">
                    <img src="img/grid.svg" alt="" />
                </Navbar.Toggle>
                
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link className='link' to="/"><b style={{color: 'hsl(31, 100%, 70%)'}}>Home</b></Link>
                    <Link className='link' to="#link"><b>Featured</b></Link>
                    <Link className='link' to="#home"><b>Products</b></Link>
                    <Link className='link' to="#link"><b>New</b></Link>
                </Nav>

                <Nav className="ms-auto">
                    <Link className='link' to="/dark"><b><img src="img/6714978.png" width="30" /></b></Link>
                    <Link className='link' to="#home"><b><img src="img/cart-38.png" width="30" /></b></Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>





        
    </>  
  )
}

export default NavBar
