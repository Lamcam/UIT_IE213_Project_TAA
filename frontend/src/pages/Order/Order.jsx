import React from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import DeliveryInformation from 'components/Orders/DeliveryInformation';
import DeliveryMethod from 'components/Orders/DeliveryMethod';
import PaymentMethod from 'components/Orders/PaymentMethod';
import "style/pages/Order/Order.scss"
import OrderBill from 'components/Orders/OrderBill';
Order.propTypes = {

};


const deliveryInformation = {
    name: 'Lâm Cẩm',
    phoneNumber: '1234567890',
    address: 'KTX Khu A, ĐHQG, Thành phố Hồ Chí Minh',
};
const orderItems = [
    {
        imageUrl: "https://www.junie.vn/cdn/shop/files/vong-tay-amanda-14.jpg?v=1696476825",
        productName: "Vongf tay ddinhs ddas raats rta nhieu ne haha",
        moneyCurrent: 100000,
        // moneyBeforeDiscount: 150000
        number: 1,
    },
    {
        imageUrl: "https://www.junie.vn/cdn/shop/files/vong-tay-amanda-14.jpg?v=1696476825",
        productName: "Ten san pham 2",
        moneyCurrent: 120000,
        // moneyBeforeDiscount: 170000
        number: 1,
    },
    {
        imageUrl: "https://www.junie.vn/cdn/shop/files/vong-tay-amanda-14.jpg?v=1696476825",
        productName: "Ten san pham 3",
        moneyCurrent: 120000,
        // moneyBeforeDiscount: 170000
        number: 1,
    },
    {
        imageUrl: "https://www.junie.vn/cdn/shop/files/vong-tay-amanda-14.jpg?v=1696476825",
        productName: "Ten san pham 4",
        moneyCurrent: 120000,
        // moneyBeforeDiscount: 170000
        number: 1,
    },
];
const totalOrderAmount = orderItems.reduce((total, item) => total + (item.moneyCurrent * item.number), 0);

function Order(props) {
    const [deliveryMethodSelected, setDeliveryMethodSelected] = useState(false);
    const [paymentMethodSelected, setPaymentMethodSelected] = useState(false);

    const handleDeliveryMethodChange = (selected) => {
        setDeliveryMethodSelected(selected);
    };

    const handlePaymentMethodChange = (selected) => {
        setPaymentMethodSelected(selected);
    };
    
    return (
        <Container className="order">
            <Row className='order__content'>
                <Col lg={8} md={12} className='order__content__list'>
                    <DeliveryInformation
                        deliveryInformation={deliveryInformation} />
                    <DeliveryMethod
                        onDeliveryMethodChange={handleDeliveryMethodChange} />
                    <PaymentMethod
                        onPaymentMethodChange={handlePaymentMethodChange} />
                </Col>
                <Col lg={4} md={12} className="order__content__bill">
                    <OrderBill
                        orderItems={orderItems}
                        totalOrderAmount={totalOrderAmount}
                        deliveryMethodSelected={deliveryMethodSelected} paymentMethodSelected={paymentMethodSelected} />
                </Col>
            </Row>
        </Container>
    );
}

export default Order;