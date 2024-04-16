import React from 'react';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import ButtonIcon from 'components/Common/ButtonIcon';
import Button1 from 'components/Common/Button1';
import { GrAdd } from 'react-icons/gr';
import { MdDeleteOutline } from 'react-icons/md';
import { CgClose } from 'react-icons/cg';
function AddBank(props) {
  // const addNewAccount = () => {
  //   const newAccount = {
  //     id: accounts.length + 1, // Tạo id mới cho tài khoản
  //     fullName: '',
  //     cmnd: '',
  //     bankName: '',
  //     accountNumber: '',
  //     isDefault: false,
  //   };

  //   setAccounts([...accounts, newAccount]); // Thêm tài khoản mới vào mảng accounts
  // };
  const addNewAccount = (e) => {
    e.preventDefault()
    console.log('success')
  }
    return (
        <div id="modal--add-bank" className={`profile-modal ${props.show ? 'active' : ''}`}>
            <div className="modal__content--form">
              <ButtonIcon
                className="modal__btn--close"
                label={<CgClose />}
                border="none"
                onClick={props.onHide}
              />
              <h1 className="profile-modal__title headline-small">Thêm thông tin ngân hàng</h1>
              <form action="/account/profile-bank-card/add" method="POST" onSubmit={addNewAccount}>
                <div className="form__row">
                  <Row>
                    <label className="col-3 label-large" htmlFor="user_name">
                      Họ và tên:
                    </label>
                    <div className="col-9 input__wrapper">
                      <input
                        required
                        className="input__wrapper-child"
                        type="text"
                        id="user_name"
                        name="fullName"
                    value={props.accounts.fullName}
                    onChange={props.handleChange}
                      />
                    </div>
                  </Row>
                </div>
                <div className="form__row">
                  <Row>
                    <label className="col-3 label-large" htmlFor="cmnd">
                      CMND:
                    </label>
                    <div className="col-9 input__wrapper">
                      <input
                        required
                        className="input__wrapper-child"
                        type="text"
                        id="cmnd"
                        name="cmnd"
                        value={props.accounts.cmnd}
                        onChange={props.handleChange}
                      />
                    </div>
                  </Row>
                </div>
                <div className="form__row">
                  <Row>
                    <label className="col-3 label-large" htmlFor="bank_name">
                      Ngân hàng:
                    </label>

                    <div className="col-9 input__wrapper">
                      <input
                        required
                        className="input__wrapper-child"
                        type="text"
                        id="bank_name"
                        name="bankName"
                        value={props.accounts.bankName}
                        onChange={props.handleChange}
                      />
                    </div>
                  </Row>
                </div>
                <div className="form__row">
                  <Row>
                    <label className="col-3 label-large" htmlFor="account_number">
                      Số tài khoản:
                    </label>
                    <div className="col-9 input__wrapper">
                      <input
                        required
                        className="input__wrapper-child"
                        type="text"
                        id="account_number"
                        name="accountNumber"
                        value={props.accounts.accountNumber}
                        onChange={props.handleChange}
                      />
                    </div>
                  </Row>
                </div>
                <div className="btn__wrapper">
                  <Button1 label="Hủy bỏ" type="button" className="col-6" onClick={props.onHide}/>
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
export default AddBank