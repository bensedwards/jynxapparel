import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './HomePageStyles.css'
import shoppingcartImage from './images/shoppingcart.svg';

function Footer(props) {
    return (
        <div class = "Footer" id= "footer">
            
                <footer class="bg-light text-white py-3 my-4">
                    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item"><a href="/home" class="nav-link px-2 text-muted">Home</a></li>
                    <li class="nav-item"><a href="/products" class="nav-link px-2 text-muted">Products</a></li>
                    <li class="nav-item"><a href="/cart" class="nav-link px-2 text-muted">Cart</a></li>
                    <li class="nav-item"><a href="/contact" class="nav-link px-2 text-muted">Contact Us</a></li>
                    </ul>
                    <p class="text-center text-muted">&copy; 2022 JynX Apparel</p>
                </footer>
            

        </div>
    );
}

export default Footer;