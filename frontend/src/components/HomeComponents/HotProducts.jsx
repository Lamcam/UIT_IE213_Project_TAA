import React from "react";
import { Container, Row } from 'react-bootstrap';
import data from './data.js';
import ProductCard from './ProductCard.jsx';
import Carousel from 'react-bootstrap/Carousel';

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

// function PreviewCard(){
//     console.log(data);
//     return (
//         <section className="preview_product_section">
//         <Container>
//             <Row>
//                 {data.slice(0,4).map(createCard)} 
//             </Row>
//         </Container>
//         </section>
//     )
// }

function PreviewCard() {
    return (
    <section className="preview_product_section">
      <Carousel>
      
        <Carousel.Item interval={1000}>
            <Row>
                {data.slice(0,4).map(createCard)} 
            </Row>
        </Carousel.Item>

        <Carousel.Item interval={500}>
            <Row>
                {data.slice(0,4).map(createCard)} 
            </Row>
        </Carousel.Item>

        <Carousel.Item>
            <Row>
                {data.slice(0,4).map(createCard)} 
            </Row>
          
        </Carousel.Item>
      </Carousel>
    </section>
    );
}
export default PreviewCard;

