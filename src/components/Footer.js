import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './HomePageStyles.css'
import shoppingcartImage from './images/shoppingcart.svg';

function Footer(props) {
    return (
        <div class = "Footer">
            <div class="container">
                <footer class="bg-dark text-white py-3 my-4">
                    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
                    </ul>
                    <p class="text-center text-muted">&copy; 2021 Company, Inc</p>
        </footer>
</div>

        </div>
    );
}

export default Footer;