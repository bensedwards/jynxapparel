import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './HomePageStyles.css'

import shoppingcartImage from '../assets/images/shoppingcart.svg';
import { Navigate, useNavigate  } from 'react-router-dom';

function HomePage(props) {
    const navigate = useNavigate();
    return (
        <div class = "HomePage">
            <br></br>
            <h1>JynX Apparel</h1>
            <br></br>
            <h3> You'll feel as good as you look.</h3>
            <br></br>
            
            <div class="GridButton"><button class="button button1"
                onClick={() => { navigate("/products") }} type="button">
                View our products.</button><br />
            </div>
            <br></br>
        <div class="container">
            <div class = "row">
                <div class="col"><img src={shoppingcartImage} alt="Shopping Cart" width="70%"></img><br />Easy
                Checkout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <div class="col"><img src={require('../assets/images/shirticon.png')} alt="Shirt" width="70%"></img><br />Looks Great</div>
                <div class="col"><img src={require('../assets/images/cycleicon.png')} alt="Environmental Friendly" width="70%"></img><br />Environmental
                <br />Friendly</div>
                <div class="col"><img src={require('../assets/images/moneyicon.png')} alt="Costs Less" width="70%"></img><br />Costs Less</div>
                <div class="Text">
                <br></br>
                <h2><br />Our goal.</h2>
                <p>There is a seemingly endless and incessant pandering that other companies may partake in to get the
                    attention of the consumer,
                    but not us. We don't need to. At JynX, we have upmost faith in every bit of our hard working team.
                    From the designers, to manufacturers, to owners, and even our customers. You are a part of our family.
                    We strive for perfection in every aspect of production. From the drawing board to the delivery.
                    We use only the finest materials, without using animal cruelty to get them, unlike much of our
                    competition.
                    Everything is hand crafted with meticulous care, no second-rate child labor here.</p>
                    <br></br>
                </div>
            </div>
        </div>
            

        </div>
    );
}

export default HomePage;