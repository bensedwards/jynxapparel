import React, { useState, Component } from 'react'  // can be removed if using React ver 17 or above
//import './Movie.css'
import 'bootstrap/dist/css/bootstrap.css';
import myProductList from '../assets/data/ProductList.json';
import {cartList} from './ProductList';
import CartProduct from './CartProduct';

function CartList() {

    const [cartProducts, updateCartList] = useState(myProductList);

    function delProduct(productId){
        const newList = cartProducts.filter(
            (p) => {
                console.log(p.id);
                return (p.id !== productId);
            }
        );
        updateCartList(newList);
    }

    return (
        <div>
            <div class="container-lg">
            <div class="row gx-4 gy-4">
            
            {
                cartProducts.map(
                    (product) => {
                    return (<CartProduct image = {product.image} title={product.title} price={product.price} color={product.colors} description={product.description} material={product.material} id={product.id} key={product.id}
                    handleDel={delProduct}/>);
                    }
                )
            }

            </div>
            </div>
        </div>
    );
}
export default CartList;