import React, { Component } from 'react'  // can be removed if using React ver 17 or above
import './ProductStyle.css'
import 'bootstrap/dist/css/bootstrap.css';
import ProductList from './ProductList';
import getImage from '../assets/images/getImage';

export default function Product({ image, title, price, color, description, itemType,material, id, handleDel} ) {
  return (
    
    <div class="col-sm-6">
      <div class="row-lg">
      <div className="product" class = "container product">
          <div className="product-image" class = "product-image">
          <img className = "image" src={getImage(id)}/>
          </div>
          <div className="product-title" class = "product-title">
             Product Title: {title}
          </div>
          <div className="product-price" class = "product-price">
            Product Price: {price}
          </div>
          <div className="product-color" class = "product-color">
            Color: {color}
          </div>
          <div className="product-description" class = "product-description">
            Description: {description}
          </div>
          <div>
          <button type="button" class="btn btn-dark btn-sm" onClick={
            () => {
              handleDel(id);
            }
          }>Delete</button>
          <br></br>
          </div>
      </div>
      </div>
    </div>
  )
}