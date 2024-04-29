import CartBill from 'components/Carts/CartBill';
import CartItem from 'components/Carts/CartItem';
import { Col, Container, Row } from 'react-bootstrap';
import 'style/pages/Cart/Cart.scss';
import React, { useEffect, useState } from 'react';
import { useGetUserCart } from 'hooks/useGetUserCart';
import { useAsyncValue } from 'react-router-dom';
import axios from 'axios';
import notFound from '../../assets/image/account/no-data.jpg';

function Cart(props) {
  const [checkedItemsInfo, setCheckedItemsInfo] = useState([]);
  const [temporaryAmount, setTemporaryAmount] = useState(0);
  let discountAmount;
  if (temporaryAmount > 0) {
    // const min = 5000; // Giá trị nhỏ nhất
    // const max = 50000; // Giá trị lớn nhất
    // const step = 5000; // Bước nhảy

    // Tính toán số ngẫu nhiên
    // const randomSteps = Math.floor(Math.random() * ((max - min) / step + 1));
    // discountAmount = min + randomSteps * step;
    discountAmount = 5000 * checkedItemsInfo.length;
    if (discountAmount > 50000) discountAmount = 50000;
  } else {
    discountAmount = 0;
  }
  const totalAmount = temporaryAmount - discountAmount;
  const [cartItems1, setCartItems] = useState([]);
  const [notProduct, setNotProduct] = useState(false);

  const handleCheckedItemsChange = (checkedItemsInfo) => {
    setCheckedItemsInfo(checkedItemsInfo);
  };
  console.log(checkedItemsInfo);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const userID = (await localStorage.getItem('user'))
          ? JSON.parse(localStorage.getItem('user'))[0]._id
          : null;

        console.log(userID);

        const res = await axios.post('http://localhost:8000/cart/get', {
          user_id: userID,
        });
        if (res.status === 200) {
          if (Array.isArray(res.data) && res.data.length === 0) {
            setNotProduct(true)
          }
          else {
            setNotProduct(false)
            const data = res.data.map((item) => {
              const productObject = item.product.length > 0 ? item.product[0] : null;
              return {
                ...item,
                product: createItem(productObject),
              };
            });
            setCartItems(data);

            console.log('cartitm', data);
            return res.data;
          }
        } else if (res.status === 404) {
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
      _id: item._id,
      imageUrl: item.prod_img[0],
      productName: item.prod_name,
      moneyCurrent: item.prod_cost.$numberDecimal * (1 - item.prod_discount.$numberDecimal),
      moneyBeforeDiscount: item.prod_cost.$numberDecimal,
    };
  };

  // Danh sách các mục trong giỏ hàng
  //
  // const cartItems = [
  //   {
  //     imageUrl: 'https://www.junie.vn/cdn/shop/files/vong-tay-amanda-14.jpg?v=1696476825',
  //     productName: 'Vongf tay ddinhs ddas raats rta nhieu ne haha',
  //     moneyCurrent: 100000,
  //     moneyBeforeDiscount: 150000,
  //   },
  //   {
  //     imageUrl: 'https://www.junie.vn/cdn/shop/files/vong-tay-amanda-14.jpg?v=1696476825',
  //     productName: 'Ten san pham 2',
  //     moneyCurrent: 120000,
  //     // moneyBeforeDiscount: 170000
  //   },
  //   // Thêm các mục khác nếu cần
  // ];
  const handleDeleteCartItem = async (updatedCartItems) => {
    // Cập nhật danh sách cartItems sau khi xóa sản phẩm
    setCartItems(updatedCartItems);
  };
  return (
    <Container className="cart" fluid id="cart">
      <Row className="cart__content">
        <Col xl={9} lg={9} md={12} className="cart__content__item">
          {/* Truyền danh sách các mục vào CartItem */}
          <CartItem
            cartItems={cartItems1}
            setMoneyAll={setTemporaryAmount}
            onCheckedItemsChange={handleCheckedItemsChange}
            onDeleteCartItem={handleDeleteCartItem}
          />
          {notProduct && (
          <div className="no-data">
              <img src={notFound} alt="Not found"/>
              <p className="body-large">Oops! Giỏ hàng của bạn trống rỗng :((</p>
          </div>
        )}
        </Col>
        <Col xl={3} lg={3} md={12} className="cart__content__bill">
          <CartBill
            temporaryAmount={temporaryAmount}
            discountAmount={discountAmount}
            totalAmount={totalAmount}
            checkedItemsInfo={checkedItemsInfo}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
