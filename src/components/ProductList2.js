import React, { useState, Component } from 'react'  // can be removed if using React ver 17 or above
//import './Movie.css'
import 'bootstrap/dist/css/bootstrap.css';
import myProductList2 from '../assets/data/ProductList2.json';
import myCartList from '../assets/data/CartList.json';
import Product from './Product'; 
var cartList;
export{cartList}; 


function ProductList2() {

    const [allProducts, updateProductList] = useState(myProductList2);

    function delProduct(productId){
        const newList = allProducts.filter(
            (p) => {
                console.log(p.id);
                return (p.id !== productId);
            }
        );
        updateProductList(newList);
    }

    const [cartList, updateCartList] = useState(myCartList);

    function addProductToCart(productId){
        const newCartList = cartList.concat(
            (p) => {
                console.log(p.id);
                return (p.id === productId);
            }
        );
        updateCartList(newCartList);
    }
   


    return (
        <div>
            <div class="container-lg">
            <div class="row gx-4 gy-4">
            
            {
                allProducts.map(
                    (product) => {
                    return (<Product image = {product.image} title={product.title} price={product.price} color={product.colors} description={product.description} material={product.material} id={product.id} key={product.id}
                        addToCart={addProductToCart} 
                        handleDel={delProduct}/>);
                    }
                )
            }
        </div>
        </ div>
        </div>
    );
}
export default ProductList2;