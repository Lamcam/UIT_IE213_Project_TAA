import React from 'react';
import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Button1 from 'components/Common/Button1';
import ButtonIcon from 'components/Common/ButtonIcon';
import { MdEdit } from 'react-icons/md';

function ProfileUser() {
  const defaultUserData = {
    loginName: 'abc',
    userName: 'Nguyễn Văn A',
    phone: '*******667',
    email: '2152***@gm.uit.edu.vn',
  };

  const [userData, setUserData] = useState(defaultUserData);
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const isDifferent = Object.keys(userData).some((key) => userData[key] !== defaultUserData[key]);
    setDisabled(!isDifferent);
    console.log(disabled); // Log disabled state after it's updated
  }, [userData, defaultUserData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };
  return (
    <article id="profile-user" className="section__content visible">
      <h2 className="headline-small" style={{marginTop:"12px"}}>Hồ sơ cá nhân</h2>
      <p style={{ marginTop: '8px' }} className='body-large'>Quản lý thông tin cá nhân của bạn</p>
      <hr className="hr-title" />

      <form action="/" method="POST" onSubmit={handleSubmit}>
        <div className="form__row">
          <Row>
            <label className="col-3 label-large" htmlFor="login_name">
              Tên đăng nhập:
            </label>
            <div className="col-9 input__wrapper">
              <input
                readOnly
                className="input__wrapper-child"
                type="text"
                id="login_name"
                name="loginName"
                value={userData.loginName}
              />
            </div>
          </Row>
        </div>
        <div className="form__row">
          <Row>
            <label className="col-3 label-large" htmlFor="user_name">
              Tên người dùng:
            </label>
            <div className="col-9 input__wrapper">
              <input
                className="input__wrapper-child"
                type="text"
                id="user_name"
                name="userName"
                value={userData.userName}
                onChange={handleChange}
              />
              <ButtonIcon
                border="none"
                backgroundColor="transparent"
                label={<MdEdit style={{ color: '#524343' }} />}
              />
            </div>
          </Row>
        </div>
        <div className="form__row">
          <Row>
            <label className="col-3 label-large" htmlFor="user_phone">
              Số điện thoại:
            </label>

            <div className="col-9 input__wrapper">
              <input
                className="input__wrapper-child"
                type="text"
                id="user_phone"
                name="phone"
                value={userData.phone}
                onChange={handleChange}
              />
              <ButtonIcon
                width="40px"
                height="40px"
                border="none"
                backgroundColor="transparent"
                label={<MdEdit style={{ color: '#524343' }} />}
              />
            </div>
          </Row>
        </div>
        <div className="form__row">
          <Row>
            <label className="col-3 label-large" htmlFor="user_email">
              Email:
            </label>
            <div className="col-9 input__wrapper">
              <input
                className="input__wrapper-child"
                type="text"
                id="user_email"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
              <ButtonIcon
                width="40px"
                height="40px"
                border="none"
                backgroundColor="transparent"
                label={<MdEdit style={{ color: '#524343' }} />}
              />
            </div>
          </Row>
        </div>
        <Button1
          backgroundColor={disabled ? '#1D1B201F' : '#785B5B'}
          labelColor={disabled ? 'rgba(32, 26, 26, 0.38)' : '#F1EFE7'}
          border="none"
          className="save-btn label-large"
          label="Lưu thay đổi"
          type="submit"

          onClick={handleChange}
        />
      </form>
    </article>
  );
}
export default ProfileUser;
