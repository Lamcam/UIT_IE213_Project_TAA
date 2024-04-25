import React, {useState, useEffect} from "react";
import { Container, Row } from 'react-bootstrap';
import data from './data.js';
import ProductCard from './ProductCard';
import Carousel from 'react-bootstrap/Carousel';
import 'style/components/Home/HotProduct.scss'
import axios from "axios";

function createCard(product) {
  
  const {_id, prod_name, prod_img, prod_cost, prod_discount, prod_num_avai } = product;
  const cost = prod_cost.$numberDecimal;
  const discout = prod_discount.$numberDecimal;

    return (
      <ProductCard
        key={_id}
        name={prod_name}
        imgURL={prod_img}
        price={cost}
        discount={discout}
        status={prod_num_avai > 0 ? "Còn hàng" : "Hết hàng"}
      />
    );
}

function HotProducts() {
    const [products, setProducts] = useState([]); 

    const getHotProducts = async () => {
      try {
          const response = await axios.get("http://localhost:8000/products/hot");
          setProducts(response.data);
          // console.log(products);
        } catch (error) {
          console.error(error);
      }
    }
    
    useEffect(() => {
      getHotProducts();
    },[])


    return (
    <section className="preview_product_section">
      <Container fluid>
      <h1 className="title_section"> Sản phẩm nổi bật trong tuần</h1>
      <Carousel fluid >     
        <Carousel.Item interval={1000}>
            <Row>
                {products.slice(0,4).map(createCard)} 
            </Row>
        </Carousel.Item>

        <Carousel.Item interval={500}>
            <Row>
                {products.slice(5,9).map(createCard)} 
            </Row>
        </Carousel.Item>

        <Carousel.Item>
            <Row>
                {products.slice(10,14).map(createCard)} 
            </Row>
          
        </Carousel.Item>
      </Carousel>
      </Container>
    </section>
    );
}
export default HotProducts;

