import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdCart } from 'react-icons/io';
import {
  Col,
  Container,
  Row,
  Badge,
  Dropdown,
  DropdownButton,
  Modal,
  Button,
} from 'react-bootstrap';
import avt from 'assets/image/pencil.png';
import './AuthPart.scss';
import { useLogout } from 'hooks/useLogout';
import { MdAccountCircle, MdOutlineFavoriteBorder } from 'react-icons/md';
import { RiBillLine } from 'react-icons/ri';
import axios from 'axios';
import { useAuthContext } from 'hooks/useAuthContext';

function AuthPart() {
  const { logout } = useLogout();
  // const [cartQuantity, setCartQuantity] = React.useState(0);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { cartQuantity, setCartQuantity } = useAuthContext();

  const handleClickLogOut = () => {
    logout();
  };

  const getCartQuantity = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const id = user[0]._id;
    console.log('user_id', id);
    const res = await axios.post('http://localhost:8000/cart/getQuantity', {
      user_id: id,
    });
    if (res.status === 200) {
      console.log(res.data);
      setCartQuantity(res.data.length);
      localStorage.setItem('cart', JSON.stringify(res.data));
      return res.data;
    } else {
      console.log('No cart found');
      setCartQuantity(0);
      return 0;
    }
  };

  useEffect(() => {
    getCartQuantity(); 
  }, []);

  const getAvatar = () => {
    let avatar = localStorage.getItem('user');
    avatar = JSON.parse(avatar);

    if (avatar[0].user_avatar === 'undefined') {
      return avatar.user_avatar;
    } else if (avatar[0].user_avatar !== 'undefined') {
      return avatar[0].user_avatar;
    } else {
      console.log('No avatar found');
      return avt;
    }
  };

  function getUserName() {
    let userName = localStorage.getItem('user');
    userName = JSON.parse(userName);

    if (userName[0].user_name === 'undefined') {
      return userName.user_name;
    } else if (userName[0].user_name !== 'undefined') {
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
          <Badge className="number_cart">{cartQuantity}</Badge>
          <NavLink to="/cart" className="cart_link">
            <IoMdCart className="cart-icon"> </IoMdCart>
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
              style={{
                backgroundImage: `url(${getAvatar()})`,
                borderRadius: '50%',
                width: '50px',
                height: '50px',
              }}
              className="dropdown_button"
            >
              <Dropdown.Item href="/account/infomation/profile-user">
                Thông tin cá nhân <MdAccountCircle />
              </Dropdown.Item>
              <Dropdown.Item href="/account/orders">
                {' '}
                Đơn hàng <RiBillLine />{' '}
              </Dropdown.Item>
              <Dropdown.Item href="/account/favor">
                {' '}
                Sản phẩm yêu thích <MdOutlineFavoriteBorder />{' '}
              </Dropdown.Item>
              <Dropdown.Divider />

              <div className="log_out_btn">
                {/* <Dropdown.Item className='log' onClick={handleClickLogOut}> Đăng xuất </Dropdown.Item> */}
                <div
                  data-rr-ui-dropdown-item
                  className="log dropdown-item"
                  role="button"
                  tabIndex={0}
                  onClick={handleShow}
                >
                  Đăng xuất
                </div>
              </div>
            </DropdownButton>
          </Col>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title as="h2">Đăng xuất</Modal.Title>
        </Modal.Header>
        <Modal.Body as="h4">Bạn có chắc muốn đăng xuất?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="danger" onClick={handleClickLogOut}>
            Đăng xuất
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
export default AuthPart;
{
  /* <Button className='logout_btn' variant="danger" onClick={handleClickLogOut}>
                  Đăng xuất
                </Button> */
}
