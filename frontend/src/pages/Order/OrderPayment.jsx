import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import 'style/pages/Order/OrderPayment.scss';
import axios from 'axios';
import OrderPaymentBill from 'components/Orders/OrderPaymentBill';
import OrderPaymentQR from 'components/Orders/OrderPaymentQR';
import OrderPaymentQRMethod from 'components/Orders/OrderPaymentQRMethod';

function OrderPayment() {
  const location = useLocation();
  const orderItems = location.state?.data;
  // const totalOrderAmount = location.state?.total;
  const temporary = location.state?.temporary;
  const discount = location.state?.discount;
  const deliveryFee = location.state?.deliveryFee;
  const last = location.state?.last;
  const dataAddress = location.state?.dataAddress;
  const dataDeliveryMethod = location.state?.dataDeliveryMethod;
  const [paymentSelected, setPaymentSelected] = useState(null);

  const handleOnPaymentChange = (selected) => {
    setPaymentSelected(selected);
  };

  return (
    <Container fluid>
      <Row className='order-payment'>
        <Col xs={12} md={3} className="order-payment-QR-method">
          <OrderPaymentQRMethod
            onPaymentChange={handleOnPaymentChange } />
        </Col>
        <Col xs={12} md={5} className="order-payment-QR">
          <OrderPaymentQR
            orderItems={orderItems}
            temporary={temporary}
            discount={discount}
            last={last}
            paymentSelected={paymentSelected}
          />
        </Col>
        <Col className='order-payment-bill'
          xs={12}
          md={4}
        >
          <OrderPaymentBill
            orderItems={orderItems}
            temporary={temporary}
            discount={discount}
            deliveryFee={deliveryFee}
            last={last}
            dataAddress={dataAddress}
            dataDeliveryMethod={dataDeliveryMethod}
          />
        </Col>
      </Row>
    </Container>
  );
}
export default OrderPayment;
