import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'components/Common/Button1';
import "style/components/Orders/DeliveryInformation.scss"
import { MdEdit } from 'react-icons/md';
import EditAddress from '../../pages/Account/Modal/modal--edit-address';
import notFound from 'assets/image/account/no-data.jpg';
import AddAddress from 'pages/Account/Modal/modal--add-address';
import "pages/Account/index.scss"
import ModalDeliveryAddress from './Modal--DeliveryAddress';
// DeliveryInformation.propTypes = {
//     deliveryInformation: PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         phoneNumber: PropTypes.string.isRequired,
//         address: PropTypes.string.isRequired,
//     }).isRequired,
// };

function DeliveryInformation(props) {
    // const { name, phoneNumber, address } = props.deliveryInformation;
    // const hiddenPhoneNumber = props.deliveryInformation.loca_pers_phone.replace(/.(?=.{3})/g, "*");
    const [isOpenEdit, setIsOpenEdit] = useState(false)
    const [isOpenAdd, setIsOpenAdd] = useState(false);
    const defaultUser = JSON.parse(localStorage.getItem('user'));
    const defaultUserData = defaultUser[0]
    const id = defaultUserData._id;
    const [isModalDeliveryAddress, setIsModalDeliveryAddress] = useState(false);
    const [selectedItems, setSelectedItems] = useState({});
    const handleCheckedItems = (item) => {
        setSelectedItems(item);
    };
    console.log(selectedItems)

    return (
        <div className="delivery__info">
            <div className="delivery__info__title title-large">1. Thông tin nhận hàng</div>
            {!props.deliveryInformation || !selectedItems ? (
                <div className="delivery__info__location">
                    <div className="no-data">
                        <img src={notFound} alt="Not found" />
                        <p className="body-large">Bạn chưa có địa chỉ giao hàng, hãy thêm địa chỉ để đặt hàng!!!</p>
                    </div>
                    <div className="location__button">
                        <Button
                            label="Thêm địa chỉ"
                            type="submit"
                            labelColor="#785B5B"
                            onClick={() => setIsOpenAdd(true)} />

                        {isOpenAdd && (



                            <AddAddress
                                onHide={() => setIsOpenAdd(false)}
                                id={id}
                                onSuccess={props.onSuccess}

                            />

                        )

                        }

                    </div>
                </div>

            ) : (<div className="delivery__info__location">
                <div className="location__detail">
                    <div className="detail__name__phone">
                        <div className="person__name title-medium">
                            {Object.keys(selectedItems).length === 0
                                ? props.deliveryInformation.loca_pers_name
                                : selectedItems.loca_pers_name}
                        </div>
                        <div className="person__phone body-medium">{Object.keys(selectedItems).length === 0
                            ? props.deliveryInformation.loca_pers_phone
                            : selectedItems.loca_pers_phone}</div>
                        {(Object.keys(selectedItems).length === 0
                            ? props.deliveryInformation.is_default
                            : selectedItems.is_default) &&
                            <div className="label__default body-medium">Mặc định</div>}

                    </div>
                    <div className="detail__address body-medium">
                        {Object.keys(selectedItems).length === 0
                            ? props.deliveryInformation.loca_address : selectedItems.loca_address}
                        {Object.keys(selectedItems).length === 0
                            ? props.deliveryInformation.loca_detail !== "" ? ` - ${props.deliveryInformation.loca_detail}` : ""
                            : selectedItems.loca_detail !== "" ? ` - ${selectedItems.loca_detail}` : ""}
                    </div>
                </div>
                <div className="location__button">
                    <Button
                        label="Thay đổi"
                        type="submit"
                        labelColor="#785B5B"
                        onClick={() => setIsModalDeliveryAddress(true)

                        }
                    />
                    {isModalDeliveryAddress && (
                        <ModalDeliveryAddress
                            onHide={() => setIsModalDeliveryAddress(false)}
                            id={id}
                            onSuccess={props.onSuccess}
                            show={isModalDeliveryAddress}
                            onCheckedItems={handleCheckedItems}
                            id_address={Object.keys(selectedItems).length === 0 ? props.deliveryInformation._id : selectedItems._id}

                        />)}
                </div>
            </div>)}

        </div>

    );
}

export default DeliveryInformation;