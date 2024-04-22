import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductPagination from 'components/Products/ProductPagination';
import ProductItem from 'components/Products/ProductItem';

function Favor() {
  const defaultUserData1 = {
    _id: '65f3e8eb7ef3c2b6f3b74ac6',
    user_name: 'Nguyễn Văn A',
    user_phone: '0123456789',
    user_email: 'abc@gmail.com',
    user_pass: 'Abcd@123',
    user_avatar: 'user_avatar_3',
    local_default_id: '65f4645b6a8ec30cb1038008',
    bank_default_id: '65f4708f6a8ec30cb1038012',
    user_username: 'abcfff',
    user_cccd: '072303001111',
  };
  // Lưu thông tin người dùng vào Local Storage
  localStorage.setItem('user', JSON.stringify(defaultUserData1));
  const defaultUserData = JSON.parse(localStorage.getItem('user'));
  const id = defaultUserData._id;
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