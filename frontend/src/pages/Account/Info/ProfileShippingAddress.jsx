import React from 'react';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import ButtonIcon from 'components/Common/ButtonIcon';
import { GrAdd } from 'react-icons/gr';
import { MdDeleteOutline } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import Button1 from 'components/Common/Button1';
import { CgClose } from 'react-icons/cg';
function ProfileShippingAddress() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      userName: 'Nguyễn Văn A',
      phoneNumber: '*******667',
      isDefault: true,
      generalAddress: 'Dia chi tong quan',
    },
    {
      id: 2,
      userName: 'Nguyễn Văn A',
      phoneNumber: '*******667',
      isDefault: false,
      generalAddress: 'Dia chi tong quan',
    },
    {
      id: 3,
      userName: 'Nguyễn Văn A',
      phoneNumber: '*******667',
      isDefault: false,
      generalAddress: 'Dia chi tong quan',
    },
  ]);
  const handleSetDefault = (address) => {
    setAddresses(
      addresses.map((add) => {
        if (add === address) {
          add.isDefault = true;
        } else {
          add.isDefault = false;
        }
        return add;
      }),
    );
  };

  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);
  const [isOpenConfirmPhone, setIsOpenConfirmPhone] = useState(false);
  const [isOpenAddSuccess, setIsOpenAddSuccess] = useState(false);

  // Hàm để mở modal Add
  const openModalAdd = () => {
    setIsOpenAdd(true);
  };

  // Hàm để đóng modal Add
  const closeModalAdd = () => {
    setIsOpenAdd(false);
  };

  // Hàm để mở modal Delete
  const openModalDelete = () => {
    setIsOpenDelete(true);
  };

  // Hàm để đóng modal Delete
  const closeModalDelete = () => {
    setIsOpenDelete(false);
  };

  // Hàm để mở modal Edit
  const openModalEdit = () => {
    setIsOpenEdit(true);
  };

  // Hàm để đóng modal Edit
  const closeModalEdit = () => {
    setIsOpenEdit(false);
  };

  // Hàm để mở modal Confirm
  const openModalConfirm = () => {
    setIsOpenConfirm(true);
  };

  // Hàm để đóng modal Confirm
  const closeModalConfirm = () => {
    setIsOpenConfirm(false);
  };

  // Hàm để mở modal ConfirmPhone
  const openModalConfirmPhone = () => {
    setIsOpenConfirmPhone(true);
  };

  // Hàm để đóng modal ConfirmPhone
  const closeModalConfirmPhone = () => {
    setIsOpenConfirmPhone(false);
  };

  // Hàm để mở modal AddSuccess
  const openModalAddSuccess = () => {
    setIsOpenAddSuccess(true);
  };

  // Hàm để đóng modal AddSuccess
  const closeModalAddSuccess = () => {
    setIsOpenAddSuccess(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddresses((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    console.log(Object.keys(addresses))
  }
  return (
    <article id="profile-shipping-addres" className="section__content visible">
      <div className="section__title">
        <h2 className="headline-small">Địa chỉ nhận hàng</h2>
        <ButtonIcon
          className="section__btn"
          border="none"
          label={<GrAdd />}
          type="button"
          onClick={openModalAdd}
        />
        {isOpenAdd && (
          <div id="modal--add-location" className="profile-modal active">
            <div className="modal__content--form">
              <ButtonIcon
                className="modal__btn--close"
                label={<CgClose />}
                border="none"
                onClick={closeModalAdd}
              />
              <h1 className="profile-modal__title headline-large">Thêm địa chỉ nhận hàng</h1>
              <form action="/" method="POST">
                <div className="form__row">
                  <Row>
                    <label className="col-3 label-large" htmlFor="user_name">
                      Tên người nhận:
                    </label>
                    <div className="col-9 input__wrapper">
                      <input
                        required
                        className="input__wrapper-child"
                        type="text"
                        id="user_name"
                        name="userName"
                        value={addresses.userName}
                      />
                    </div>
                  </Row>
                </div>
                <div className="form__row">
                  <Row>
                    <label className="col-3 label-large" htmlFor="phone_number">
                      Số điện thoại:
                    </label>
                    <div className="col-9 input__wrapper">
                      <input
                        required
                        className="input__wrapper-child"
                        type="text"
                        id="phone_number"
                        name="phoneNumber"
                        value={addresses.phoneNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </Row>
                </div>
                <div className="form__row">
                  <Row>
                    <label className="col-3 label-large" htmlFor="general_address">
                      Địa chỉ tổng quan:
                    </label>

                    <div className="col-9 input__wrapper">
                      <input
                        required
                        className="input__wrapper-child"
                        type="text"
                        id="general_address"
                        name="generalAddress"
                        value={addresses.generalAddress}
                        onChange={handleChange}
                      />
                    </div>
                  </Row>
                </div>
                <div className="btn__wrapper">
                  <Button1 label="Hủy bỏ" type="button" onClick={closeModalAdd} className="col-6" />
                  <Button1
                    label="Đồng ý"
                    type="submit"
                    className="col-6"
                    labelColor="#F1EFE7"
                    backgroundColor="#785B5B"
                    onClick={handleAdd}
                  />
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <hr className="hr-title" />

      <ul className="accounts-list">
        {addresses.map((add, index) => (
          <React.Fragment key={add.id}>
            <li>
              <div className="account-item__wrapper">
                <div className="account-info">
                  <div className="account-number-default">
                    <p className="title-medium">{add.userName}</p>
                    <hr style={{ borderWidth: '24px', width: '1px', margin: '0' }} />
                    <p className='body-medium'>SĐT:</p>
                    <p className='body-medium'>{add.phoneNumber}</p>
                    {add.isDefault && <span className="default-label">Mặc định</span>}
                  </div>
                  <p className="bank-name body-medium">{add.generalAddress}</p>
                </div>

                <div className="shipping-btn">
                  <div className="edit-delete-btn">
                    <ButtonIcon
                      className="bank-item__btn--del"
                      label={<MdDeleteOutline style={{ color: '#785B5B' }} />}
                      type="button"
                      border="none"
                      backgroundColor="#F2E5E4"
                      onClick={openModalDelete}
                    />
                    {isOpenDelete && (
                      <div id="modal--del-location" className="profile-modal active">
                        <div className="modal__content--confirm">
                          <ButtonIcon
                            className="modal__btn--close"
                            label={<CgClose />}
                            border="none"
                            onClick={closeModalDelete}
                          />
                          <div className="profile-modal__title">
                            <h1 className="headline-large">Xóa địa chỉ nhận hàng</h1>
                            <h2 class="title-large">
                              Bạn có chắc chắn sẽ xóa địa chỉ nhận hàng này không?
                            </h2>
                            <p class="body-medium">Thao tác này không thể hoàn lại</p>
                          </div>
                          <form>
                            <div class="btn__wrapper">
                              <Button1
                                type="button"
                                onClick={closeModalDelete}
                                label="Hủy bỏ"
                                className="col-6"
                              />
                              <Button1
                                type="submit"
                                label="Đồng ý"
                                className="col-6"
                                labelColor="#F1EFE7"
                                backgroundColor="#785B5B"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    )}
                    <ButtonIcon
                      className="shipping-btn--edit"
                      label={
                        <>
                          <MdEdit style={{ color: '#785B5B', marginRight: '8px' }} />
                          <span style={{ color: '#785B5B' }}> Sửa</span>
                        </>
                      }
                      type="button"
                      width="91px"
                      height="40px"
                      backgroundColor="transparent"
                      marginRight="8px"
                      onClick={openModalEdit}
                    />
                    {isOpenEdit && (
                      <div id="modal--edit-location" className="profile-modal active">
                        <div className="modal__content--form">
                          <ButtonIcon
                            className="modal__btn--close"
                            label={<CgClose />}
                            border="none"
                            onClick={closeModalEdit}
                          />
                          <h1 className="profile-modal__title headline-small">Sửa địa chỉ nhận hàng</h1>
                          <form action="/" method="POST">
                            <div className="form__row">
                              <Row>
                                <label className="col-3 label-large" htmlFor="user_name--edit">
                                  Tên người nhận:
                                </label>
                                <div className="col-9 input__wrapper">
                                  <input
                                    required
                                    className="input__wrapper-child"
                                    type="text"
                                    id="user_name--edit"
                                    name="userNameEdit"
                                    value={addresses.fullName}
                                  />
                                </div>
                              </Row>
                            </div>
                            <div className="form__row">
                              <Row>
                                <label className="col-3 label-large" htmlFor="phone_number--edit">
                                  Số điện thoại:
                                </label>
                                <div className="col-9 input__wrapper">
                                  <input
                                    required
                                    className="input__wrapper-child"
                                    type="text"
                                    id="phone_number--edit"
                                    name="phoneNumberEdit"
                                    value={addresses.phoneNumber}
                                    onChange={handleChange}
                                  />
                                </div>
                              </Row>
                            </div>
                            <div className="form__row">
                              <Row>
                                <label
                                  className="col-3 label-large"
                                  htmlFor="general_address--edit"
                                >
                                  Địa chỉ tổng quan:
                                </label>

                                <div className="col-9 input__wrapper">
                                  <input
                                    required
                                    className="input__wrapper-child"
                                    type="text"
                                    id="general_address--edit"
                                    name="generalAddressEdit"
                                    value={addresses.generalAddress}
                                    onChange={handleChange}
                                  />
                                </div>
                              </Row>
                            </div>
                            <div className="btn__wrapper">
                              <Button1
                                label="Hủy bỏ"
                                type="button"
                                className="col-6"
                                onClick={closeModalAdd}
                              />
                              <Button1
                                label="Hoàn thành"
                                type="submit"
                                className="col-6"
                                labelColor="#F1EFE7"
                                backgroundColor="#785B5B"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    )}
                  </div>
                  <Button1
                    backgroundColor={add.isDefault ? '#1D1B201F' : '#785B5B'}
                    labelColor={add.isDefault ? 'rgba(32, 26, 26, 0.38)' : '#F1EFE7'}
                    border="none"
                    className="set-default-btn label-large"
                    label="Thiết lập mặc định"
                    type="submit"
                    onClick={() => handleSetDefault(add)}
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
