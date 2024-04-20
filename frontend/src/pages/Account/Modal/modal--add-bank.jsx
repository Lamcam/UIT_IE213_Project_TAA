import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import ButtonIcon from 'components/Common/ButtonIcon';
import Button1 from 'components/Common/Button1';
import { CgClose } from 'react-icons/cg';
function AddBank({ onClose, onDataToModal2, id, onSuccess}) {
  const [newCardData, setNewCardData] = useState(
    {
      bank_pers_name: '',
      user_cccd:'',
      bank_name: '',
      bank_number:'',
    }
  )
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCardData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
    // // Hàm xử lý khi mở Modal 2
    // const handleOpenModal2 = () => {
    //   onClose(); // Đóng Modal 1
    //   onDataToModal2(newCardData); // Truyền dữ liệu cho Modal 2
  // };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/api/account/add-bank/${id}`, newCardData)
      .then((response) => {
        console.log('add bank card success', response.data.message);
        onClose()
        onSuccess()
      })
      .catch((error) => {
        console.error(error);
      });
  };
    return (
        <div id="modal--add-bank" className="profile-modal active">
            <div className="modal__content--form">
              <ButtonIcon
                className="modal__btn--close"
                label={<CgClose />}
            border="none"
            type="button"
                onClick={onClose}
              />
              <h1 className="profile-modal__title headline-small">Thêm thông tin ngân hàng</h1>
              <form method="POST" onSubmit={handleSubmit}>
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
                    value={newCardData.bank_pers_name}
                    onChange={handleChange}
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
                        value={newCardData.user_cccd}
                        onChange={handleChange}
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
                    value={newCardData.bank_name}
                        onChange={handleChange}
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
                    value={newCardData.bank_number}
                        onChange={handleChange}
                      />
                    </div>
                  </Row>
                </div>
                <div className="btn__wrapper">
                  <Button1 label="Hủy bỏ" type="button" className="col-6" onClick={onClose}/>
                  <Button1
                    label="Đồng ý"
                    type="submit"
                    className="col-6"
                    labelColor="#F1EFE7"
                backgroundColor="#785B5B"
                // onClick={handleOpenModal2}
              />
                </div>
              </form>
            </div>
          </div>
    )
}
export default AddBank