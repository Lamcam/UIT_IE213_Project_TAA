import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Button1 from 'components/Common/Button1';
import ButtonIcon from 'components/Common/ButtonIcon';
import { BiHide, BiShow } from 'react-icons/bi';
import { CgClose } from "react-icons/cg";
function ProfileChangePassword() {
  const [userData, setUserData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [disabled, setDisabled] = useState(true);
  const [showPassword, setShowPassword] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Cập nhật userData
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    // Kiểm tra xem tất cả các trường input có giá trị không
    const allFieldsNotEmpty = Object.values(userData).every(val => val !== "");
    setDisabled(!allFieldsNotEmpty);
  }, [userData]);
  

  // Hàm xử lý khi người dùng nhấn nút để hiển thị hoặc ẩn mật khẩu
  const togglePasswordVisibility = (field) => {
    setShowPassword(prevState => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  // Hàm xử lý khi người dùng gửi form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý dữ liệu form ở đây, ví dụ: gửi dữ liệu đến máy chủ
    console.log(userData);
  };

  return (
    <article id="profile-change-password" className="section__content visible">
      <h2 className="headline-small" style={{marginTop:"12px"}}>Đổi mật khẩu</h2>
      <hr className='hr-title'/>

      <form onSubmit={handleSubmit}>
        <div className="form__row">
          <Row>
            <label className="col-3 label-large" htmlFor="old_password">
              Mật khẩu hiện tại:
            </label>
            <div className="col-9 input__wrapper input-password__wrapper">
              <input
                required
                className="input__wrapper-child"
                type={showPassword.oldPassword ? 'text' : 'password'}
                id="old_password"
                name="oldPassword"
                placeholder="Nhập mật khẩu hiện tại"
                value={userData.oldPassword}
                onChange={handleChange}
              />
              <ButtonIcon
                backgroundColor="transparent"
                border="none"
                onClick={() => togglePasswordVisibility('oldPassword')}
                label={
                  showPassword.oldPassword ? (
                    <BiShow style={{ color: '#524343' }} />
                  ) : (
                    <BiHide style={{ color: '#524343' }} />
                  )
                }
                type="button"
              />
            </div>
          </Row>
        </div>
        <div className="form__row">
          <Row>
            <label className="col-3 label-large" htmlFor="new_password">
              Mật khẩu mới:
            </label>
            <div className="col-9 input__wrapper input-password__wrapper">
              <input
                required
                className="input__wrapper-child"
                type={showPassword.newPassword ? 'text' : 'password'}
                id="new_password"
                name="newPassword"
                placeholder="Nhập mật khẩu mới"
                value={userData.newPassword}
                onChange={handleChange}
              />
              <ButtonIcon
                backgroundColor="transparent"
                border="none"
                onClick={() => togglePasswordVisibility('newPassword')}
                label={
                  showPassword.newPassword ? (
                    <BiShow style={{ color: '#524343' }} />
                  ) : (
                    <BiHide style={{ color: '#524343' }} />
                  )
                }
                type="button"
              />
            </div>
          </Row>
        </div>
        <div className="form__row">
          <Row>
            <label className="col-3 label-large" htmlFor="confirm_password">
              Xác nhận mật khẩu mới:
            </label>
            <div className="col-9 input__wrapper input-password__wrapper">
              <input
                required
                className="input__wrapper-child"
                type={showPassword.confirmPassword ? 'text' : 'password'}
                id="confirm_password"
                name="confirmPassword"
                placeholder="Nhập lại mật khẩu mới"
                value={userData.confirmPassword}
                onChange={handleChange}
              />
              <ButtonIcon
                backgroundColor="transparent"
                border="none"
                onClick={() => togglePasswordVisibility('confirmPassword')}
                label={
                  showPassword.confirmPassword ? (
                    <BiShow style={{ color: '#524343' }} />
                  ) : (
                    <BiHide style={{ color: '#524343' }} />
                  )
                }
                type="button"
              />
            </div>
          </Row>
        </div>
        <Button1
          backgroundColor={disabled ? '#1D1B201F' : '#785B5B'}
          labelColor={disabled ? 'rgba(32, 26, 26, 0.38)' : '#F1EFE7'}
          border="none"
          className="save-btn label-large"
          label="Xác nhận"
          type="submit"
        />
      </form>
    </article>
  );
}

export default ProfileChangePassword;
