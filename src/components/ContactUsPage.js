import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './ContactUsPageStyles.css'
import {Card} from 'react-bootstrap';

import shoppingcartImage from '../assets/images/shoppingcart.svg';
import { Navigate, useNavigate  } from 'react-router-dom';
import CartList from './CartList';

function ContactUsPage(props) {
    const navigate = useNavigate();
    return (
        <div class = "ContactUsPage">
            <br></br><br></br><br></br><br></br>
            <h1>Contact Us</h1>
            <br></br><br></br><br></br>
            <div className='ContactUsCards'>
            <div class="row">
            <div class="col-6 col-sm-4">
                <Card style={{ width: '18rem'}}>
                <Card.Body>
                    <Card.Title>Phone</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                    <Card.Text>
                    <br></br>
                    1-800-JynX
                    </Card.Text>
                    <Card.Link href="#"></Card.Link>
                </Card.Body>
                </Card>
            </div>
            <div class="col-6 col-sm-4">
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Email</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                    <Card.Text>
                        <br></br>
                    contact@jynxapparel.com
                    </Card.Text>
                    <Card.Link href="#"></Card.Link>
                </Card.Body>
                </Card>
            </div>

            
            <div class="w-100 gy-5 d-none d-md-block"></div>
            

            <div class="col-6 col-sm-4">
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Live Chat</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                    <Card.Text>
                        <br></br>
                        <button type="button" class="btn btn-dark btn-sm btn-block w-50" onClick={
                            () => {
                            alert("No Representatives Currently Available, Please Try Again Later.") ;
                            }
                            }>Join a Live Chat</button>
                    </Card.Text>
                    <Card.Link href="#"></Card.Link>
                </Card.Body>
                </Card>
            </div>
            <div class="col-6 col-sm-4">
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Location</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                    <Card.Text>
                        <br></br>
                    Media, PA
                    </Card.Text>
                    <Card.Link href="#"></Card.Link>
                </Card.Body>
                </Card>
            </div>
            
            </div>
            </div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

        </div>
    );
}

export default ContactUsPage;