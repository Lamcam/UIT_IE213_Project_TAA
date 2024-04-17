import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";
import 'style/components/Carts/CartBill.scss'
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
function CartBill(props) {

    const { temporaryAmount, discountAmount, totalAmount } = props;

    return (
        <div className="cart__bill">
            <div className="cart__bill__header title-large">
                Hóa đơn của bạn
            </div>
            <div className="cart__bill__line"></div>
            <div className="cart__bill__body title-medium">
                <div className="cart__bill__money__temporary">
                    <div className="money__temporary__title">Tạm tính:</div>
                    <div className="money__temporary__value">{numberWithCommas(temporaryAmount)} đ</div>
                </div>
                <div className="cart__bill__discount">
                    <div className="money__discount__title">Giảm giá:</div>
                    <div className="money__discount__value">{numberWithCommas(discountAmount)} đ</div>
                </div>
            </div>
            <div className="cart__bill__line"></div>
            <div className="cart__bill__footer">
                <div className="cart__bill__total__money title-medium">
                    <div className="money__total__title">Tổng cộng:</div>
                    <div className="money__total__value">{numberWithCommas(totalAmount)} đ</div>
                </div>
                <div className="cart__bill__note title-medium">(Đã bao gồm VAT)</div>
                <div className="cart__bill__order">
                    <Button className="button__order body-large">Tiến hành đặt hàng</Button>
                </div>
            </div>
        </div>
    );
}

CartBill.propTypes = {
    temporaryAmount: PropTypes.number.isRequired,
    discountAmount: PropTypes.number.isRequired,
    totalAmount: PropTypes.number.isRequired
};

export default CartBill;
