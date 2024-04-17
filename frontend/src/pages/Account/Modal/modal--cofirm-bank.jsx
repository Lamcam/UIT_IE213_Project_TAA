import React from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import ButtonIcon from 'components/Common/ButtonIcon';
import Button1 from 'components/Common/Button1';
import { CgClose } from 'react-icons/cg';
function ConfirmBank(props) {
  const addNewCard= (e) => {
      e.preventDefault()
      axios.post(`http://localhost:8000/api/account/add-bank/${props.id}`, props.data)
    .then(response => {
      console.log('add bank card success',response.data.message);
    })
    .catch(error => {
        console.error(error);
    });
  }
    return (
        <div id="modal--confirm-bank" className={`profile-modal ${props.show ? 'active' : ''}`}>
            <div className="modal__content--form">
              <ButtonIcon
                className="modal__btn--close"
                label={<CgClose />}
                border="none"
                onClick={props.onHide}
              />
              <h1 className="profile-modal__title headline-small">Xác nhận thông tin ngân hàng</h1>
              <form action="/account/profile-bank-card/add" method="POST" onSubmit={addNewCard}>
                <div className="form__row">
                  <Row>
                    <label className="col-3 label-large" htmlFor="bank_pers_name">
                      Họ và tên:
                    </label>
                    <div className="col-9 input__wrapper">
                      <input
                        required
                        className="input__wrapper-child"
                        type="text"
                        id="bank_pers_name"
                                    name="bank_pers_name"
                                    value={props.data.bank_pers_name}
                    onChange={props.handleChange}
                      />
                    </div>
                  </Row>
                </div>
                <div className="form__row">
                  <Row>
                    <label className="col-3 label-large" htmlFor="user_cccd">
                      CCCD:
                    </label>
                    <div className="col-9 input__wrapper">
                  <input
                        required
                        className="input__wrapper-child"
                        type="text"
                        id="user_cccd"
                        name="user_cccd"
                        value={props.data.user_cccd}
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
                                    name="bank_name"
                                    value={props.data.bank_name}
                        onChange={props.handleChange}
                      />
                    </div>
                  </Row>
                </div>
                <div className="form__row">
                  <Row>
                    <label className="col-3 label-large" htmlFor="bank_number">
                      Số tài khoản:
                    </label>
                    <div className="col-9 input__wrapper">
                      <input
                        required
                        className="input__wrapper-child"
                        type="text"
                        id="bank_number"
                                    name="bank_number"
                                    value={props.data.bank_number}
                        onChange={props.handleChange}
                      />
                    </div>
                  </Row>
                </div>
                <div className="btn__wrapper">
                  <Button1 label="Sửa thông tin" type="button" className="col-6"/>
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
export default ConfirmBank