import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdCart } from "react-icons/io";
import { Col, Container, Row, Button } from 'react-bootstrap';
import avt from 'assets/image/pencil.png';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './AuthPart.scss';
import { useNavigate } from 'react-router-dom';

function AuthPart() {
    const history = useNavigate();

    function redirectToHome() {
        history('/');
    }

    function handleLogOut(callback) {
        // localStorage.removeItem('user');
        // window.location.reload();
        console.log('log out');
    }

    return (
        <Container className="auth_part">
        <Row className="auth_part__wrapper">
            <Col className='col-4'>
                <NavLink to="/log_in" className="cart_link">
                    <IoMdCart className="cart-icon" />
                </NavLink>
            </Col>

            <Col className='col-8 user_wrapper' >
                        <Col className='user_name'>
                            <h6>HAN</h6>
                        </Col>

                        <Col>
                            <DropdownButton id='drop_down_btn' style={{backgroundImage: `url(${avt})`, borderRadius: '50%' }} >
                                <Dropdown.Item href="#/action-1">Thông tin cá nhân</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Đơn hàng</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Sản phẩm yêu thích</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item><Button variant="danger" onClick={handleLogOut(redirectToHome)}>Đăng xuất</Button></Dropdown.Item>
                            </DropdownButton>
                        </Col>
                    
            </Col>
        </Row>
        </Container>
    );
}
export default AuthPart;

