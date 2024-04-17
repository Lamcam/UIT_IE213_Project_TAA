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
      const response = await axios.get('http://localhost:8000/products');
      setData(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const applyFilter = (filterOption) => {
    // Áp dụng bộ lọc vào dữ liệu và cập nhật state data
    // Ví dụ: lọc sản phẩm theo filterOption và cập nhật state data
    // setData(filteredData);
  };
  return (
    <Container className="product" fluid>
      <ProductFilter applyFilter={applyFilter} />
      <Row className="product__content">
        <Col lg={3} md={3}>
          <ProductMenu />
        </Col>
        <Col lg={9} md={9} className="product__list">
          <Row className="row-cols-1 row-cols-md-3 g-3">
            {data.map((product) => (
              <Col key={product._id} lg={4} md={6} xs={6}>
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