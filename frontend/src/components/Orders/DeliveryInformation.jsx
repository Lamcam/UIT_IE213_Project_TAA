import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Common/Button1';
import "style/components/Orders/DeliveryInformation.scss"
import { MdEdit } from 'react-icons/md';
DeliveryInformation.propTypes = {
    deliveryInformation: PropTypes.shape({
        name: PropTypes.string.isRequired,
        phoneNumber: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
    }).isRequired,
};

function DeliveryInformation(props) {
    const { name, phoneNumber, address } = props.deliveryInformation;
    const hiddenPhoneNumber = phoneNumber.replace(/.(?=.{3})/g, "*");
    return (
        <div className="delivery__info">
            <div className="delivery__info__title title-large">1. Thông tin nhận hàng</div>
            <div className="delivery__info__location">
                <div className="location__detail">
                    <div className="detail__name__phone">
                        <div className="person__name title-medium">{name}</div>
                        <div className="person__phone body-medium">{hiddenPhoneNumber}</div>
                        <div className="label__default body-medium">Mặc định</div>
                    </div>
                    <div className="detail__address body-medium">
                        {address}
                    </div>
                </div>
                <div className="location__button">
                    <Button
                        icon={MdEdit}
                        iconWidth={18}
                        iconHeight={18}
                        label="Thay đổi địa chỉ"
                        type="submit"
                        labelColor="#F1EFE7"
                        backgroundColor="#785B5B" />
                </div>
            </div>
        </div>

    );
}

export default DeliveryInformation;