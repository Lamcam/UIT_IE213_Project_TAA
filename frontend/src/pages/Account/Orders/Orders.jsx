import React from 'react';
import { useState } from 'react';
import Button1 from 'components/Common/Button1';

function Orders() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      productName: 'Tên sản phẩm',
      price: 1000,
      quantity: 1,
      orderStatus: 0,
      orderTotalcost: 1000,
    },
    {
      id: 2,
      productName: 'Tên sản phẩm',
      price: 1000,
      quantity: 1,
      orderStatus: 1,
      orderTotalcost: 1000,
    },
    {
      id: 3,
      productName: 'Tên sản phẩm',
      price: 1000,
      quantity: 2,
      orderStatus: 1,
      orderTotalcost: 2000,
    },
  ]);
  // const handleSetStatus = (order) => {
  //   setOrders(orders.map((ord) => {
  //     if (ord === order) {
  //       ord.orderStatus = 0;
  //     } else {
  //       ord.orderStatus = 1;
  //     }
  //     return ord;
  //   }))
  // }
  return (
    <div id='orders'>
    <article className="section__content visible">
      <div className="section__info visible">
        <h2 className="headline-large">Đơn hàng</h2>
        <p className="body-medium">Trang cung cấp thông tin về các đơn hàng theo danh mục</p>
      </div>
      </article>
      <article className=" section__content visible order-content">
        <ul className="orders-list">
          {orders.map((order, index) => (
            <React.Fragment key={order.id}>
              <li>
                <div className="orders-item__wrapper">
                  <img src="" alt="" width="157px" height="157px" />
                  <div className="orders-item__info">
                    <div className="name-status">
                      <p className="body-large">Tên sản phẩm</p>
                      <span className="status">
                        {order.orderStatus === 1 ? 'Đã giao' : 'Chưa giao'}
                      </span>
                    </div>
                    <div className="quantity-price">
                      <p className="quatity">Số lượng: {order.quantity}</p>
                      <p className="price">Giá tiền: {order.price} đ</p>
                    </div>
                    <div className="total-cost">
                      <p>Thành tiền: {order.orderTotalcost} đ</p>
                    </div>
                    <div className="appreciate-repurchase">
                      <Button1 label="Đánh giá" />
                      <Button1
                        label="Mua lại sản phẩm"
                        labelColor="#F1EFE7"
                        backgroundColor="#785B5B"
                      />
                    </div>
                  </div>
                </div>
              </li>
              {index < orders.length - 1 && <hr />}
            </React.Fragment>
          ))}
        </ul>
      </article>
      </div>
  );
}

export default Orders;
