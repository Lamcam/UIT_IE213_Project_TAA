import React from 'react';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import ButtonIcon from 'components/Common/ButtonIcon';
import { GrAdd } from 'react-icons/gr';
import { MdDeleteOutline } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import Button1 from 'components/Common/Button1';
import { CgClose } from 'react-icons/cg';
function AddAddress(props) {
    return (
        <div id="modal--add-address" className={`profile-modal ${props.show ? 'active' : ''}`}>
            <div className="modal__content--form">
              <ButtonIcon
                className="modal__btn--close"
                label={<CgClose />}
                border="none"
                onClick={props.onHide}
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
                        value={props.addresses.userName}
                        onChange={props.handleChange}
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
                        value={props.addresses.phoneNumber}
                        onChange={props.handleChange}
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
                        value={props.addresses.generalAddress}
                        onChange={props.handleChange}
                      />
                    </div>
                  </Row>
                </div>
                <div className="btn__wrappe row">
                  <Button1 label="Hủy bỏ" type="button" onClick={props.onHide} className="col-6" />
                  <Button1
                    label="Đồng ý"
                    type="submit"
                    className="col-6"
                    labelColor="#F1EFE7"
                    backgroundColor="#785B5B"
                  />
                </div>
              </form>
            </div>
          </div>
    )
}
export default AddAddress