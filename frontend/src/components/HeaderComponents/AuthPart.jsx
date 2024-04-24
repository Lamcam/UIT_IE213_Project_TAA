import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdCart } from 'react-icons/io';
import { Col, Container, Row, Button } from 'react-bootstrap';
import avt from 'assets/image/pencil.png';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './AuthPart.scss';
import { useLogout } from 'hooks/useLogout';
import { MdAccountCircle, MdOutlineFavoriteBorder } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";

function AuthPart() {
  const { logout } = useLogout();

  const handleClickLogOut = () => {
    logout();
  };

  const getAvatar = () => {
    let avatar = localStorage.getItem('user');
    avatar = JSON.parse(avatar);
    if (avatar) {
      return avatar[0].user_avatar;
    } else {
      console.log('No avatar found');
      return avt;
    }
  };

  function getUserName() {
    let userName = localStorage.getItem('user');
    userName = JSON.parse(userName);

    if (userName) {
      console.log('Name found', userName );
      return userName[0].user_name;
    } else {
      console.log('No Name found');
      return 'No Name found';
    }
  }

  return (
    <Container className="auth_part">
      <Row className="auth_part__wrapper">
        <Col className="col-4">
          <NavLink to="/cart" className="cart_link">
            <IoMdCart className="cart-icon" />
          </NavLink>
        </Col>

        <Col className="col-8 user_wrapper">
          <Col className="user_name">
            <h6>{getUserName()}</h6>
          </Col>

          <Col>
            {/* <DropdownButton id='drop_down_btn' style={{backgroundImage: `url(${avt})`, borderRadius: '50%' }} > */}
            <DropdownButton
              id="drop_down_btn"
              style={{ backgroundImage: `url(${getAvatar()})`,borderRadius: '50%', width: '50px', height: '50px'}}
              className='dropdown_button'
            >
              <Dropdown.Item href="/account/infomation/profile-user">
              <MdAccountCircle /> Thông tin cá nhân 
              </Dropdown.Item>
              <Dropdown.Item href="/account/orders"><RiBillLine /> Đơn hàng  </Dropdown.Item>
              <Dropdown.Item href="/account/favor"><MdOutlineFavoriteBorder/> Sản phẩm yêu thích  </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                <Button className='logout_btn' variant="danger" onClick={handleClickLogOut}>
                  Đăng xuất
                </Button>
              </Dropdown.Item>
            </DropdownButton>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
export default AuthPart;
