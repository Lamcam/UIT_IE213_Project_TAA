import Button from 'components/Common/Button1';
import ProductItem from 'components/Products/ProductItem';
import ProductMenu from 'components/Products/ProductMenu';
import { useEffect, useState } from 'react';
import { Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import { BsCheck2 } from 'react-icons/bs';
// import 'style/components/button.css';
import axios from 'axios';
import 'style/pages/Products/ProductStyle.scss';
import ProductFilter from 'components/Products/ProductFilter';

function Products() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/products');
      setData(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Container className="product">
      <ProductFilter />
      <Row className="product__content">
        <Col lg={3} md={12}>
          <ProductMenu />
        </Col>
        <Col lg={9} md={12} className="product__list">
          {/* {data.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))} */}
          {/* {data.map((product) => (
          <Col key={product._id} lg={4} md={6} sm={6} xs={12}>
            <ProductItem product={product} />
          </Col>
        ))} */}
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            {data.map((product) => (
              <Col key={product._id}>
                <ProductItem product={product} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default Products;