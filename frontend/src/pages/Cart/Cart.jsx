import CartBill from 'components/Carts/CartBill';
import CartItem from 'components/Carts/CartItem';
import { Col, Container, Row } from 'react-bootstrap';
import 'style/pages/Cart/Cart.scss';
import React, { useEffect, useState } from 'react';
import { useGetUserCart } from 'hooks/useGetUserCart';
import { useAsyncValue } from 'react-router-dom';
import axios from 'axios';

function Cart(props) {
  const temporaryAmount = 350000;
  const discountAmount = 50000;
  const totalAmount = temporaryAmount - discountAmount;
  const [cartItems1, setCartItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const userID = await localStorage.getItem('user')
          ? JSON.parse(localStorage.getItem('user'))[0]._id
          : null;

        console.log(userID);

        const res = await axios.post('http://localhost:8000/cart/get', {
            user_id: userID,
        });
        if (res.status === 200) {
          setCartItems(res.data.map((item) => createItem(item)));
          return res.data;

        } else if(res.status === 404){
            alert('Cart is empty or user not found');
        } else {
          alert('Error fetching cart items');
        }
        // setCartItems(data.map(item => createItem(item)));
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };
    fetchItems();
  }, []);

  const createItem = (item) => {
    return {
      imageUrl: item.prod_img[0],
      productName: item.prod_name,
      moneyCurrent: item.prod_cost.$numberDecimal * (1 - item.prod_discount.$numberDecimal),
      moneyBeforeDiscount: item.prod_cost.$numberDecimal,
    };
  };

  // Danh sách các mục trong giỏ hàng
  //
  const cartItems = [
    {
      imageUrl: 'https://www.junie.vn/cdn/shop/files/vong-tay-amanda-14.jpg?v=1696476825',
      productName: 'Vongf tay ddinhs ddas raats rta nhieu ne haha',
      moneyCurrent: 100000,
      moneyBeforeDiscount: 150000,
    },
    {
      imageUrl: 'https://www.junie.vn/cdn/shop/files/vong-tay-amanda-14.jpg?v=1696476825',
      productName: 'Ten san pham 2',
      moneyCurrent: 120000,
      // moneyBeforeDiscount: 170000
    },
    // Thêm các mục khác nếu cần
  ];

  return (
    <Container className="cart">
      <Row className="cart__content">
        <Col lg={9} md={12} className="cart__content__item">
          {/* Truyền danh sách các mục vào CartItem */}
          <CartItem cartItems={cartItems1} />
        </Col>
        <Col lg={3} md={12} className="cart__content__bill">
          <CartBill
            temporaryAmount={temporaryAmount}
            discountAmount={discountAmount}
            totalAmount={totalAmount}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
