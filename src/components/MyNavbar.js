import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav} from 'react-bootstrap';
import shoppingcartImage from '../assets/images/shoppingcart.svg';
//import './NavbarStyles.css';
import { Navigate, useNavigate } from 'react-router-dom';
    

export default class MyNavBar extends Component {
  render() {
    
    return (
      <Navbar bg="light" expand="lg" sticky="top" variant="light">
        <Container>
          <Navbar.Brand href="/home"> 
          <img src= {require('../assets/images/jynxblacklogo.png')} alt = "" width="30"></img> 
            <spacer>  </spacer>JynX Apparel</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/cart">Cart</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
              {/*
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#news">News</Nav.Link>
              <Nav.Link href="#publications">Publications</Nav.Link>
              */}
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}