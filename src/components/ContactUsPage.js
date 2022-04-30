import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './HomePageStyles.css'

import shoppingcartImage from '../assets/images/shoppingcart.svg';
import { Navigate, useNavigate  } from 'react-router-dom';
import CartList from './CartList';

function ContactUsPage(props) {
    const navigate = useNavigate();
    return (
        <div class = "ContactUsPage">
            <br></br>
            <h1>JynX Apparel</h1>
            <br></br>
            <h3> You'll feel as good as you look.</h3>
            <br></br>
            <div> </div>
        </div>
    );
}

export default ContactUsPage;