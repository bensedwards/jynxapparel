import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './HomePageStyles.css';
import './CheckOutPage.css';


import shoppingcartImage from '../assets/images/shoppingcart.svg';
import { Navigate, useNavigate } from 'react-router-dom';

function CheckOutPage(props) {
    const navigate = useNavigate();
    return (
        <div class="CheckOutPage">
            <br></br>
            <h1>Checkout</h1>
            <br></br>


            <div class="GridButton"><button class="button button1"
                onClick={() => { navigate("/products") }} type="button">
                View our products.</button><br />


            </div>
            <br></br>
            <div class="container">
                <div class="row">
                    <div class="col"><img src={shoppingcartImage} alt="Shopping Cart" width="70%"></img><br />Easy
                        Checkout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    <div class="col"><img src={require('../assets/images/shirticon.png')} alt="Shirt" width="70%"></img><br />Looks Great</div>
                    <div class="col"><img src={require('../assets/images/cycleicon.png')} alt="Environmental Friendly" width="70%"></img><br />Environmental
                        <br />Friendly</div>
                    <div class="col"><img src={require('../assets/images/moneyicon.png')} alt="Costs Less" width="70%"></img><br />Costs Less</div>
                    <div class="Text">
                        <br></br>

                    </div>
                    <div class="input-fields">
                        <div class="column-1">

                            <h3>Payment Infomation</h3>

                            <label for="email">Email Address</label>
                            <input type="text" id="email" placeholder="Enter E-mail Address" />

                            <label for="cardholder">Name of Cardholder</label>
                            <input type="text" id="cardholder" placeholder="John Doe" />

                            <div class="small-inputs">
                                <div>
                                    <label for="date">Expiration Date</label>
                                    <input type="text" id="date" placeholder="MM / YY" />
                                </div>

                                <div>
                                    <label for="verification">CVV or CVC *</label>
                                    <input type="password" id="verification" placeholder="Enter 3 digits" />
                                </div>
                            </div>

                        </div>
                        <div class="column-2">
                            <label for="cardnumber">Card Number</label>
                            <input type="password" id="cardnumber" placeholder="Enter a 16 digit number" />

                            <h3>Billing Address</h3>
                            <label for="fname"><i class="fa fa-user"></i> Full Name</label>

                            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>

                            <input type="text" id="adr" name="address"></input>
                                <label for="city"><i class="fa fa-institution"></i> City</label>
                                <input type="text" id="city" name="city"></input>

                                    <div class="row">
                                        <div class="col-50">
                                            <label for="state">State</label>
                                            <input type="text" id="state" name="state" placeholder="XX"></input>
                                        </div>


                                        <div class="col-50">
                                            <label for="zip">Zip Code</label>
                                            <input type="text" id="zip" name="zip" placeholder="XXXXX"></input>



                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default CheckOutPage;