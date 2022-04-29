import React from 'react';
import ProductList from './ProductList';
import './ProductStyle.css'

function ProductPage(props) {
    return (
        <div class = "ProductPage">
             <br></br>
            <h1>Products</h1>
            <ProductList />
            
        </div>
    );
}

export default ProductPage;