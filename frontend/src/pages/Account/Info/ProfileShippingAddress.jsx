import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ButtonIcon from 'components/Common/ButtonIcon';
import { GrAdd } from 'react-icons/gr';
import { MdDeleteOutline } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import Button1 from 'components/Common/Button1';
import AddAddress from '../Modal/modal--add-address';
import DelAddress from '../Modal/modal--del-address';
import EditAddress from '../Modal/modal--edit-address';
import notFound from '../../../assets/image/account/pencil copy.png';
function ProfileShippingAddress() {
  const defaultUserData1 = {
    _id: '65f3e8eb7ef3c2b6f3b74ac6',
    user_name: 'Nguyễn Văn A',
    user_phone: '0123456789',
    user_email: 'abc@gmail.com',
    user_pass: 'Abcd@123',
    user_avatar: 'user_avatar_3',
    local_default_id: '65f4645b6a8ec30cb1038008',
    bank_default_id: '65f4708f6a8ec30cb1038012',
    user_username: 'abcfff',
    user_cccd: '072303001111',
  };
  // Lưu thông tin người dùng vào Local Storage
  localStorage.setItem('user', JSON.stringify(defaultUserData1));
  const defaultUserData = JSON.parse(localStorage.getItem('user'));
  const id = defaultUserData._id;
  const [addresses, setAddresses] = useState([]);
  const [notAddresses, setNotAddress] = useState(false);
  const [defaultAddress, setDefaultAddress] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/account/shipping-addresses/${id}`)
      .then((response) => {
        if (Array.isArray(response.data) && response.data.length === 0) setNotAddress(true);
        setAddresses(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
  const onSuccess = () => {
    axios
      .get(`http://localhost:8000/api/account/shipping-addresses/${id}`)
      .then((response) => {
        if (Array.isArray(response.data) && response.data.length === 0) setNotAddress(true);
        else setNotAddress(false);
        setAddresses(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  const handleSetDefault = (address, addressId, userId) => {
    axios
      .put(`http://localhost:8000/api/account/address-default/${addressId}`, { id: userId })
      .then((response) => {
        setAddresses(
          addresses.map((add) => {
            if (add === address) {
              add.is_default = true;
            } else {
              add.is_default = false;
            }
            return add;
          }),
        );
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  // const [isOpenConfirmPhone, setIsOpenConfirmPhone] = useState(false);
  // const [isOpenAddSuccess, setIsOpenAddSuccess] = useState(false);

  const [selectedAddressId, setSelectedAddressId] = useState('');
  const handleDeletedAddress = (id) => {
    setSelectedAddressId(id);
    setIsOpenDelete(true);
  };
  const [selectedEditAdress, setSelectedEditAdress] = useState('');
  const handleEditedAddress = (add) => {
    setSelectedEditAdress(add);
    setIsOpenEdit(true);
  };
  return (
    <article id="profile-shipping-addres" className="section__content visible">
      <div className="section__title">
        <h2 className="headline-small">Địa chỉ nhận hàng</h2>
        <ButtonIcon
          className="section__btn"
          border="none"
          label={<GrAdd />}
          type="button"
          onClick={() => setIsOpenAdd(true)}
        />
        <AddAddress
          show={isOpenAdd}
          onHide={() => setIsOpenAdd(false)}
          id={id}
          onSuccess={onSuccess}
        />
      </div>
      <hr className="hr-title" />

      <ul className="shipping-list">
        {notAddresses && (
          <div className="no-data">
            <p className="body-large">Bạn chưa có địa chỉ giao hàng!</p>
            <img src={notFound} alt="Not found" />
          </div>
        )}
        {addresses.map((add, index) => (
          <React.Fragment key={add._id}>
            <li>
              <div className="shipping-item__wrapper">
                <div className="shipping-info">
                  <div className="shipping-number-default">
                    <p className="title-medium">{add.loca_pers_name}</p>
                    <hr style={{ borderWidth: '24px', width: '1px', margin: '0' }} />
                    <p className="body-medium">SĐT: {add.loca_pers_phone}</p>
                    {add.is_default && <span className="default-label label-large">Mặc định</span>}
                  </div>
                  <p className="bank-name body-medium">{add.loca_address}</p>
                </div>

                <div className="shipping-btn">
                  <div className="edit-delete-btn">
                    <ButtonIcon
                      className="bank-item__btn--del"
                      label={<MdDeleteOutline style={{ color: '#785B5B' }} />}
                      type="button"
                      border="none"
                      backgroundColor="#F2E5E4"
                      onClick={() => handleDeletedAddress(add._id)}
                    />
                    <DelAddress
                      show={isOpenDelete}
                      onHide={() => setIsOpenDelete(false)}
                      id={selectedAddressId}
                      // addresses={addresses}
                      onSuccess={onSuccess}
                      userId={id}
                    />
                    <ButtonIcon
                      className="shipping-btn--edit"
                      label={
                        <>
                          <MdEdit style={{ color: '#785B5B' }} />
                          <span style={{ color: '#785B5B' }}> Sửa</span>
                        </>
                      }
                      type="button"
                      width="91px"
                      height="40px"
                      backgroundColor="transparent"
                      onClick={() => handleEditedAddress(add)}
                    />
                    <EditAddress
                      show={isOpenEdit}
                      onHide={() => setIsOpenEdit(false)}
                      data={selectedEditAdress}
                      onSuccess={onSuccess}
                    />
                  </div>
                  <Button1
                    backgroundColor={add.is_default ? '#1D1B201F' : '#785B5B'}
                    labelColor={add.is_default ? 'rgba(32, 26, 26, 0.38)' : '#F1EFE7'}
                    border="none"
                    className="set-default-btn label-large"
                    label="Thiết lập mặc định"
                    type="button"
                    onClick={() => handleSetDefault(add, add._id, id)}
                  />
                </div>
              </div>
            </li>
            {index < addresses.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </ul>
    </article>
  );
}

export default ProfileShippingAddress;
