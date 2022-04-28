import React, { useState, Component } from 'react'  // can be removed if using React ver 17 or above
//import './Movie.css'
import 'bootstrap/dist/css/bootstrap.css';
import myProductList from '../assets/data/ProductList.json';
import Product from './Product';

function ProductList() {

    const [allProducts, updateProductList] = useState(myProductList);

    function delProduct(productId){
        const newList = allProducts.filter(
            (p) => {
                console.log(p.id);
                return (p.id != productId);
            }
        );
        updateProductList(newList);
    }

    return (
        <div>
            <div class="container-lg">
            <div class="row gx-4 gy-4">
            
            {
                allProducts.map(
                    (product) => {
                    return (<Product image = {product.image} title={product.title} price={product.price} color={product.colors} description={product.description} id={product.id} key={product.id}
                    handleDel={delProduct}/>);
                    }
                )
            }
        </div>
        </ div>
        </div>
    );
}
export default ProductList;