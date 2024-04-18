import React from "react";
import { Container, Row } from 'react-bootstrap';
import data from './data.js';
import ProductCard from './ProductCard';
import Carousel from 'react-bootstrap/Carousel';
import 'style/components/Home/HotProduct.scss'

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

function HotProducts() {
    return (
    <section className="preview_product_section">
      <Container fluid>
      <h1> Sản phẩm nổi bật trong tuần</h1>
      <Carousel fluid >     
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
      </Container>
    </section>
    );
}
export default HotProducts;

