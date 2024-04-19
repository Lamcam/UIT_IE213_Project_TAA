import React from 'react';
import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import ButtonIcon from 'components/Common/ButtonIcon';
import Button1 from 'components/Common/Button1';
import { CgClose } from 'react-icons/cg';
function EditAddress(props) {
  const [editAddress, setEditAddress] = useState(props.data)
    const prevData = useRef(props.data);
  // const inputRefs = useRef({});
  useEffect(() => {
    setEditAddress(props.data);
  }, [props.data]);
  useEffect(() => {
    // Check if props.data has changed
    if (JSON.stringify(props.data) !== JSON.stringify(prevData.current)) {
      setEditAddress(props.data);
      prevData.current = props.data; // Update previous data
    }
  }, [props.data]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  const isDifferent = Object.keys(editAddress).some((key) => editAddress[key] !== prevData.current[key]);
    if (!isDifferent) {
    return;
  }
    axios
      .put(`http://localhost:8000/api/account/edit-address/${props.data._id}`, editAddress)
      .then((response) => {
        console.log('edit address success', response.data.message);
        props.onHide();
        props.onSuccess()
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <div id="modal--edit-address" className={`profile-modal ${props.show ? 'active' : ''}`}>
      <div className="modal__content--form">
        <ButtonIcon
          className="modal__btn--close"
          label={<CgClose />}
          border="none"
          onClick={props.onHide}
        />
        <h1 className="profile-modal__title headline-small">Sửa địa chỉ nhận hàng</h1>
        <form method="PUT" onSubmit={handleSubmit}>
          <div className="form__row">
            <Row>
              <label className="col-3 label-large" htmlFor="loca_pers_name">
                Tên người nhận:
              </label>
              <div className="col-9 input__wrapper">
                <input
                  required
                  className="input__wrapper-child"
                  type="text"
                  id="loca_pers_name"
                  name="loca_pers_name"
                  value={editAddress.loca_pers_name}
                  onChange={handleChange}
                />
              </div>
            </Row>
          </div>
          <div className="form__row">
            <Row>
              <label className="col-3 label-large" htmlFor="loca_pers_phone">
                Số điện thoại:
              </label>
              <div className="col-9 input__wrapper">
                <input
                  required
                  className="input__wrapper-child"
                  type="text"
                  id="loca_pers_phone"
                  name="loca_pers_phone"
                  value={editAddress.loca_pers_phone}
                  onChange={handleChange}
                />
              </div>
            </Row>
          </div>
          <div className="form__row">
            <Row>
              <label className="col-3 label-large" htmlFor="loca_address">
                Địa chỉ tổng quan:
              </label>

              <div className="col-9 input__wrapper">
                <input
                  required
                  className="input__wrapper-child"
                  type="text"
                  id="loca_address"
                  name="loca_address"
value={editAddress.loca_address}                  onChange={handleChange}
                />
              </div>
            </Row>
          </div>
          <div className="form__row">
            <Row>
              <label className="col-3 label-large" htmlFor="loca_detail">
                Địa chỉ chi tiết:
              </label>

              <div className="col-9 input__wrapper">
                <input
                  required
                  className="input__wrapper-child"
                  type="text"
                  id="loca_detail"
                  name="loca_detail"
value={editAddress.loca_detail}                  onChange={handleChange}
                />
              </div>
            </Row>
          </div>
          <div className="btn__wrapper">
            <Button1 label="Hủy bỏ" type="button" className="col-6" onClick={props.onHide} />
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
  );
}
export default EditAddress;
