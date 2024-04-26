import React from 'react';
import PropTypes from 'prop-types';
import 'style/components/Orders/OrderBill.scss'
import Button from 'components/Common/Button1'
import { MdEdit } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom';

// function numberWithCommas(x) {
//     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
// }
OrderBill.propTypes = {
    orderItems: PropTypes.arrayOf(
        PropTypes.shape({
            imageUrl: PropTypes.string.isRequired,
            productName: PropTypes.string.isRequired,
            moneyCurrent: PropTypes.number.isRequired,
            number: PropTypes.number.isRequired
        })
    ).isRequired,
    totalOrderAmount: PropTypes.number.isRequired,
    deliveryMethodSelected: PropTypes.bool,
    paymentMethodSelected: PropTypes.bool,
};
function OrderBill(props) {
    console.log(props.deliveryMethodSelected)
    console.log(props.paymentMethodSelected)
    const color = props.deliveryMethodSelected && props.paymentMethodSelected ? "#F1EFE7" : "#201A1A";
    const backgroundColor = props.deliveryMethodSelected && props.paymentMethodSelected ? "#785B5B" : "rgba(29, 27, 32, 0.12)";
    const border = props.deliveryMethodSelected && props.paymentMethodSelected ? "1px solid #857373" : "none";

    const navigate = useNavigate();

    const handleModifyButtonClick = () => {
        navigate('/cart');
    }
    return (
        <div className="order__bill">
            <div className="order__bill__header title-large">
                <div>Đơn hàng</div>
                <div>
                    <Button
                        icon={MdEdit}
                        iconWidth={18}
                        iconHeight={18}
                        label="Sửa"
                        type="submit"
                        labelColor="#F1EFE7"
                        backgroundColor="#785B5B"
                        onClick={handleModifyButtonClick} />
                </div>

            </div>
            <div className="order__bill__line"></div>
            {props.orderItems.map((item, index) => (
                <div key={index} className="order__item__product">
                    <div className="order__product__image">
                        <img src={item.imageUrl} alt={item.productName} />
                    </div>
                    <div className="order__item__info body-large">
                        <div className="order__product__name">{item.productName}</div>
                        <div className="order__product__number__price">
                            <div className="order__product__number">SL: {item.number}</div>
                            {/* <div className="order__product__price">x{numberWithCommas(item.moneyCurrent)} đ</div> */}
                            <div className="order__product__price">x{item.moneyCurrent} đ</div>

                        </div>
                    </div>
                </div>
            ))}
            <div className="order__bill__link body-medium">
                <NavLink className="primary-text">Xem tất cả</NavLink>
            </div>
            <div className="order__bill__line"></div>
            <div className="order__bill__money__temporary title-medium">
                <div className="money__temporary__title">Tạm tính:</div>
                {/* <div className="money__temporary__value">{numberWithCommas(props.totalOrderAmount)} đ</div> */}
                <div className="order__product__price">x{props.totalOrderAmount} đ</div>

            </div>
            <div className="order__bill__money__ship title-medium">
                <div className="money__ship__title">Phí vận chuyển:</div>
                <div className="money__ship__value">2 đ</div>
            </div>
            <div className="order__bill__line"></div>
            <div className="order__bill__total__money title-medium">
                <div className="money__total__title">Thành tiền:</div>
                {/* <div className="money__total__value">{numberWithCommas(props.totalOrderAmount)} đ</div> */}
                <div className="money__total__value">{props.totalOrderAmount} đ</div>

            </div>
            <div className="order__bill__note title-medium">Đã bao gồm VAT, phí đóng gói, phí vận chuyển và cả chi phí khác.</div>
            <div className="order__bill__button">
                <Button
                    label="Đặt hàng"
                    type="submit"
                    border={border}
                    labelColor={color}
                    backgroundColor={backgroundColor}
                />
            </div>

        </div>
    );
}


export default OrderBill;