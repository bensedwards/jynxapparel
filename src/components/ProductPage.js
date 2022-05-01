import React from 'react';
import ProductList from './ProductList';
import ProductList2 from './ProductList2';
import './ProductStyle.css'

function ProductPage(props) {
    return (
        <div class = "ProductPage">
             <br></br>
            <h1>Products</h1><br></br>
            <h2>Clothes</h2>
            <ProductList /><br></br>
            <h2>Accessories</h2><br></br>
            <ProductList2 />
            
            
        </div>
    );
}

export default ProductPage;