import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Button1 from 'components/Common/Button1';
import ButtonIcon from 'components/Common/ButtonIcon';
import { MdEdit } from 'react-icons/md';

function ProfileUser() {
  const defaultUserData1 = {
    _id: "65f3e8eb7ef3c2b6f3b74ac6",
    user_name: 'Nguyễn Văn A',
    user_phone: '0123456789',
    user_email: "abc@gmail.com",
    user_pass: "Abcd@123",
    user_avatar: "",
    local_default_id: "1",
    bank_default_id:"1"
  };
  const [errorPhone, setErrorPhone] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
// Lưu thông tin người dùng vào Local Storage
  localStorage.setItem('user', JSON.stringify(defaultUserData1));
  const defaultUserData = JSON.parse(localStorage.getItem('user'))
  console.log(defaultUserData)

  const [userData, setUserData] = useState(defaultUserData);
  console.log(userData)
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value,
    }));
    if (name === 'user_phone') {
      setErrorPhone("")
    }
    if (name === 'user_email') {
      setErrorEmail("")
    }
  };

  useEffect(() => {
    const isDifferent = Object.keys(userData).some((key) => userData[key] !== defaultUserData[key]);
    setDisabled(!isDifferent);
  }, [userData]);

  // // Hàm để che dấu số điện thoại, chỉ hiển thị 3 số cuối
  // const maskPhoneNumber = (phoneNumber) => {
  //   const masked = phoneNumber.substring(0, phoneNumber.length - 3).replace(/\d/g, '*');
  //   const lastThreeDigits = phoneNumber.substring(phoneNumber.length - 3);
  //   return masked + lastThreeDigits;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);

      const phoneRegex = /^(0[1-9])+([0-9]{8,9})\b$/;
    const emailRegex = /^(?!\s)[a-zA-Z\d.+]+@[a-zA-Z\d-]+(\.[a-zA-Z\d-]+)*\.[a-zA-Z\d-]{2,}(?<!\s)$/;
    if (!phoneRegex.test(userData.user_phone) && !emailRegex.test(userData.user_email)) {
      setErrorPhone("Số điện thoại không hợp lệ!")
      setErrorEmail("Email không hợp lệ!");
      return;
    }
    if(!phoneRegex.test(userData.user_phone)){
      setErrorPhone("Số điện thoại không hợp lệ!");
      return; // Không gửi form nếu số điện thoại không hợp lệ
    }
  if (!emailRegex.test(userData.user_email)) {
    setErrorEmail("Email không hợp lệ!");
    return; // Không gửi form nếu email không hợp lệ
  }

    // Gửi yêu cầu đến server nếu không có lỗi
    const id = defaultUserData._id
    console.log(id)
    axios.put(`https://localhost:3001/api/account/update-user/${id}`, userData)
      .then(response => {
        // Xử lý phản hồi từ server
        console.log(response.data);
      })
      .catch(err => {
        // Xử lý lỗi từ server
        console.error('Error:', err);
      });
  };
  return (
    <article id="profile-user" className="section__content visible">
      <h2 className="headline-small" style={{marginTop:"12px"}}>Hồ sơ cá nhân</h2>
      <p style={{ marginTop: '8px' }} className='body-large'>Quản lý thông tin cá nhân của bạn</p>
      <hr className="hr-title" />

      <form action="/" method="PUT" onSubmit={handleSubmit} className='form__content'>
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
                value={"abc"}
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
                required
                className="input__wrapper-child"
                type="text"
                id="user_name"
                name="user_name"
                value={userData.user_name}
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
                required
                className={`input__wrapper-child ${errorPhone ? "err-border" : ""}`}
                type="text"
                id="user_phone"
                name="user_phone"
                value={userData.user_phone}
                onChange={handleChange}
              />
              <ButtonIcon
                width="40px"
                height="40px"
                border="none"
                backgroundColor="transparent"
                label={<MdEdit style={{ color: '#524343' }} />}
              />
                                      {errorPhone && <div className="err">{errorPhone}</div>}

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
                required
                className={`input__wrapper-child ${errorEmail ? "err-border" : ""}`}
                type="text"
                id="user_email"
                name="user_email"
                value={userData.user_email}
                onChange={handleChange}
              />
              <ButtonIcon
                width="40px"
                height="40px"
                border="none"
                backgroundColor="transparent"
                label={<MdEdit style={{ color: '#524343' }} />}
              />
                        {errorEmail && <div className="err">{errorEmail}</div>}

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