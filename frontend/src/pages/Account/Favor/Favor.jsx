import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductPagination from 'components/Products/ProductPagination';
import ProductItem from 'components/Products/ProductItem';

function Favor() {
  const defaultUser = JSON.parse(localStorage.getItem('user'));
  const defaultUserData = defaultUser[0]
  // const id = defaultUserData._id;
  const id = "65f3e9a27ef3c2b6f3b7d0d8"
  const [favors, setFavors] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/account/favors/${id}`)
      .then((response) => {
        const nonNullData = response.data.filter(item => item !== null);
        console.log(nonNullData)
        setFavors(nonNullData);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
  return (
    <div id='orders'>
    <article className="section__content visible article">
      <div className="section__info visible">
        <h2 className="headline-large">Sản phẩm yêu thích</h2>
        <p className="body-medium">Trang cung cấp thông tin về các sản phẩm đã yêu thích</p>
      </div>
      </article>
      {/* <article className="section__content visible article"> */}
      <Row className="row-cols-1 row-cols-md-3 g-3">
            {favors.map((favor) => (
              <Col key={favor._id}>
                <ProductItem product={favor} />
              </Col>
            ))}
          </Row>
          <Row className="product__pagination">
            
            {/* {totalPages > 1 && (
              <ProductPagination totalPages={totalPages} activePage={activePage} onPageChange={handlePageChange} />
            )} */}
          <ProductPagination />
          </Row>
      {/* </article> */}

    </div>
  );
}

export default Favor;