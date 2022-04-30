import React, { Component, useState, useContext } from 'react'  // can be removed if using React ver 17 or above
import './ProductStyle.css'
import 'bootstrap/dist/css/bootstrap.css';
import {useAccordionButton, AccordionContext, Accordion, Card} from 'react-bootstrap';
import ProductList from './ProductList';
import getImage from '../assets/images/getImage';


function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button" class="btn btn-dark btn-sm w-100"
      style={{ backgroundColor: isCurrentEventKey ? 'grey' : 'black' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

export default function Product({ image, title, price, color, description, itemType, material, id, handleDel, addToCart} ) {
  return (
    
    <div class="col-sm-4">
      <div class="row-lg">
      <div className="product" class = "container product">
          <div className="product-image" class = "product-image">
          <img className = "image" src={getImage(id)}/>
          </div>

          <div className="product-title" class = "product-title">
            {title}
          </div>
          <div className="product-price" class = "product-price">
            {price}
          </div>
          <Accordion defaultActiveKey="-1" flush>
            <Card>
              <Card.Header> 
                
                <button type="button" class="btn btn-dark btn-sm btn-block w-100" onClick={
                  () => {
                    addToCart(id);
                  }
                  }>Add to Cart</button>
                  <ContextAwareToggle eventKey="0">View More Details </ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body> 
                <div className='product-details'>
                <div className="product-description" class = "product-description">
                  Description: {description}</div>
                  <div className="product-color" class = "product-color">
                  Colors Available: {color}
                  </div>
                  Material: {material}
                </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          {/* <div>
          <button type="button" class="btn btn-dark btn-sm" onClick={
            () => {
              handleDel(id);
            }
          }>Delete</button>
        </div> */}
      </div>
      </div>
    </div>
  )
}