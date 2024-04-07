import React from "react";
import { Container, Row } from 'react-bootstrap';
import data from './data.js';
import ProductCard from './ProductCard.jsx';

function createCard(product) {
    const {product_id, name, imgURL, prod_cost, prod_discount, status } = product;
    
    return (
      <ProductCard
        key={product_id}
        name={name}
        imgURL={imgURL}
        price={prod_cost}
        discount={prod_discount}
        status={status}
      />
    );
}

function PreviewCard(){
    console.log(data);
    return (
        <section className="preview_product_section">
        <Container>
            <Row>
                {data.map(createCard)} 
            </Row>
        </Container>
        </section>
    )
}

export default PreviewCard;