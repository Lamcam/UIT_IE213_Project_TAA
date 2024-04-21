import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Button1 from 'components/Common/Button1';
import ButtonIcon from 'components/Common/ButtonIcon';
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
function Orders() {
  const defaultUserData1 = {
    _id: '65f3e9a27ef3c2b6f3b7d0d8',
    user_name: 'Nguyễn Văn B',
    user_phone: '0987654321',
    user_email: 'def@gmail.com',
    user_pass: 'Abcd@456',
    user_avatar:
      'https://res.cloudinary.com/dg40uppx3/image/upload/v1713435732/IMG_5365_bw6k0p.jpg',
    local_default_id: '65f466a46a8ec30cb1038009',
    bank_default_id: '65f471776a8ec30cb1038013',
    user_username: 'def',
    user_cccd: '072303001112',
  };
  // Lưu thông tin người dùng vào Local Storage
  localStorage.setItem('user', JSON.stringify(defaultUserData1));
  const defaultUserData = JSON.parse(localStorage.getItem('user'));
  const id = defaultUserData._id;
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/account/orders/${id}`)
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
  const [showMore, setShowMore] = useState(false);
  const handleSeeMore = (orderId) => {
    console.log(showMore)
    setOrders((prevOrders) =>
    prevOrders.map((order) => {
      if (order.order._id === orderId) {
        return { ...order, order: { ...order.order, showMore: !order.order.showMore } };
      }
      return order;
    })
    );
  };
  return (
    <div id="orders">
      <article className="section__content visible article">
        <div className="section__info visible">
          <h2 className="headline-large">Đơn hàng</h2>
          <p className="body-medium">Trang cung cấp thông tin về các đơn hàng theo danh mục</p>
        </div>
      </article>

      {orders.map((order) => (
        <React.Fragment key={order._id}>
          <article className=" section__content visible order-content section__content--orders">
            {order.orderDetails.map((ord, index) => (
              <ul className={`orders-list ${order.order.showMore ? 'active' : ''}`} key={ord._id} >
                <li>
                  <div className="orders-item__wrapper">
                    <div className="img-status">
                      <img className="orders-item__img" src={ord.product.prod_img} alt="" />
                      <span className="status headline-small">
                        {order.order.order_status === 1 ? 'Đã giao' : 'Chưa giao'}
                      </span>
                    </div>
                    <div className="orders-item__info">
                      <div className="name-status">
                        <p className="name body-large">{ord.product.prod_name}</p>
                        <span className="status label-large">
                          {order.order.order_status === 1 ? 'Đã giao' : 'Chưa giao'}
                        </span>
                      </div>
                      <div className="quantity-price body-large">
                        <p className="quatity">
                          <label>Số lượng:</label> {ord.orderDetail.quantity}
                        </p>
                        <p className="price">
                          <label>Giá tiền:</label>{' '}
                          {parseFloat(ord.orderDetail.price.$numberDecimal) + ' đ'}
                        </p>
                      </div>
                      <div className="total-cost body-large">
                        <p>
                          <label>Thành tiền:</label>{' '}
                          {parseFloat(order.order.order_total_cost.$numberDecimal) + ' đ'}
                        </p>
                      </div>
                      <div className="appreciate-repurchase">
                        <Button1 label="Đánh giá" className="appreciate" />
                        <Button1
                          className="repurchase"
                          label="Mua lại sản phẩm"
                          labelColor="#F1EFE7"
                          backgroundColor="#785B5B"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                {index > 0 && index < order.orderDetails.length - 1 && <hr />}
                {order.orderDetails.length > 1 && index === 0 && (
                  <React.Fragment>
                    <hr />
                    <div className="see-more">
                      <p className='body-medium see-more__content'>{order.order.showMore ? 'Ẩn bớt' : `Xem thêm ${order.orderDetails.length - 1} sản phẩm`}</p>
                      <ButtonIcon border="none" backgroundColor="transparent" width="25px" height="25px"
                        onClick={() => handleSeeMore(order.order._id)} label={order.order.showMore ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />} />
                    </div>
                  </React.Fragment>
                )}
                
              </ul>
            ))}
          </article>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Orders;