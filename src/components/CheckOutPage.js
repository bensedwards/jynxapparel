import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './HomePageStyles.css';
import './CheckOutPage.css';
import CartProduct from './CartProduct';
import shoppingcartImage from '../assets/images/shoppingcart.svg';
import { Navigate, useNavigate } from 'react-router-dom';

function CheckOutPage(props) {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    var totalPrice = 0;
    return (
        <div class="CheckOutPage">
            <br></br>
            <h1>Checkout</h1>
            <br></br>

            <div class="GridButton"><button class="button button1"
                onClick={() => { navigate("/cart") }} type="button">
                Go Back.</button><br />



                <div classname="col-md-5">
                    <table className="table table-bordered">
                        <thread>
                            <tr>
                                <th width="50%">product</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thread>
                        <tbody>

                            

                            
                            <td>JynX Gorilla Warfare Socks</td>
                            <td>$19</td>
                            <td>1</td>
                            <td>12.14</td>
                            
                           
                                                              
                        
                        
                            <tr>
                                <td colSpan="2" className="text-end">Grand Total</td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>

                            

            </div>
            <br></br>
            <div class="container" className='checkoutcontainer'>
                <div class="row">




                    <div class="input-fields">
                        <div class="column-1">

                            <h3>Payment Infomation</h3>

                            <label for="email">Email Address</label>
                            <input type="text" id="email" placeholder="Enter E-mail Address" />

                            <div class="col-25">
                                <h3>Payment</h3>
                                <label for="fname">All sorts of Payment accepted</label>


                                <label for="cardholder">Name of Cardholder</label>
                                <input type="text" id="cardholder" placeholder="John Doe" />

                                <div class="small-inputs">
                                    <div>
                                        <label for="date">Expiration Date</label>
                                        <input type="text" id="date" placeholder="MM / YY" />
                                    </div>

                                    <div>
                                        <div class="col-50">
                                            <label for="verification">CVV or CVC *</label>
                                            <input type="password" id="verification" placeholder="Enter 3 digits" />
                                        </div>
                                    </div>

                                </div>
                                <div class="col-50">
                                    <label for="cardnumber">Card Number</label>
                                    <input type="password" id="cardnumber" placeholder="Enter a 16 digit number" />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div><br></br><br></br></div>
                    <div class="container" className='checkoutcontainer'>
                        <div class="row">

                            <div class="input-fields">
                                <div class="column-2">

                                    <h3>Billing Address</h3>
                                    <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                                    <input type="text" id="fname" name="firstname" placeholder="John Doe"></input>

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



                                    <div class="container" className='checkoutcontainer'>
                                        <div class="row">

                                            <div class="input-fields">
                                                <div class="column-1">

                                                    <h3>Shipping Address</h3>
                                                    <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                                                    <input type="text" id="fname" name="firstname" placeholder="John Doe"></input>

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


                                                    <div class="GridButton"><button class="button button1"
                                                        onClick={() => { navigate("/InvoicePage") }} type="button">
                                                        Continue to Checkout.</button><br />


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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