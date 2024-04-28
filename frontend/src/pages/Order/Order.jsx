import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import DeliveryInformation from 'components/Orders/DeliveryInformation';
import DeliveryMethod from 'components/Orders/DeliveryMethod';
import PaymentMethod from 'components/Orders/PaymentMethod';
import "style/pages/Order/Order.scss"
import OrderBill from 'components/Orders/OrderBill';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
Order.propTypes = {

};


function Order(props) {
    const location = useLocation();
    const orderItems = location.state?.data;
    // const totalOrderAmount = orderItems.reduce((total, item) => total + (item.moneyCurrent * item.number), 0);
    const totalOrderAmount = location.state?.total
    const temporaryAmount = location.state?.temporary
    const discountAmount = location.state?.discount
    console.log(location.state)
    const [deliveryInformation, setDeliveryInformation] = useState('')
    const defaultUser = JSON.parse(localStorage.getItem('user'));
    const defaultUserData = defaultUser[0]
    const id = defaultUserData._id;
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/account/shipping-addresses/${id}`)
            .then((response) => {
                const addressDefault = response.data.find((item) => {
                    return item.is_default === true;
                });
                setDeliveryInformation(addressDefault);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);



    const onSuccess = () => {
        axios
            .get(`http://localhost:8000/api/account/shipping-addresses/${id}`)
            .then((response) => {
                const addressDefault = response.data.find((item) => {
                    return item.is_default === true;
                });
                setDeliveryInformation(addressDefault);
                
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    const [deliveryMethodSelected, setDeliveryMethodSelected] = useState(false);
    const [paymentMethodSelected, setPaymentMethodSelected] = useState(false);

    const handleDeliveryMethodChange = (selected) => {
        setDeliveryMethodSelected(selected)

    };

    const handlePaymentMethodChange = (selected) => {
        setPaymentMethodSelected(selected);
    };

    return (
        <Container className="order" fluid>
            <Row className='order__content'>
                <Col lg={8} md={12} className='order__content__list'>
                    <DeliveryInformation
                        deliveryInformation={deliveryInformation}
                        onSuccess={onSuccess}
                    />

                    <DeliveryMethod
                        onDeliveryMethodChange={handleDeliveryMethodChange} />
                    <PaymentMethod
                        onPaymentMethodChange={handlePaymentMethodChange}
                        // deliveryPaymentDefault={deliveryPaymentDefault}
                        id={id}
                    />
                </Col>
                <Col lg={4} md={12} className="order__content__bill">
                    <OrderBill
                        orderItems={orderItems}
                        totalOrderAmount={totalOrderAmount}
                        deliveryMethodSelected={deliveryMethodSelected} paymentMethodSelected={paymentMethodSelected}
                        temporaryAmount={temporaryAmount}
                        discountAmount={discountAmount}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Order;