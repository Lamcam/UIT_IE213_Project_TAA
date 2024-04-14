import {Form, Image, Button } from 'react-bootstrap';
import {Col, Container} from 'react-bootstrap';
import logo from 'assets/image/logo2.svg';
import './Login.scss';
import { NavLink } from 'react-router-dom';
import React, {useState} from 'react';
import ModalForgotPass from './ModalForgotPass';

function Login() {
  

  return (
    <section className="login">
    <Container className='d-flex'>
      <Col className='side_bar d-flex justify-content-center align-item-center col-4'>
          <Image src={logo} alt='TAA_logo'/>
      </Col>

      <Col className='login_form col-8'>
        <h1> Đăng nhập </h1>
        <Form>
          <Form.Group className="mb-3 input" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Điền email" />
              <Form.Text className="text-muted">
              </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3 input" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Mật khẩu" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <ModalForgotPass></ModalForgotPass>
          </Form.Group>

          
          <div className="d-grid gap-2">
            <Button className='login_btn' type="submit" size='lg'>
              Đăng nhập
            </Button>
            
            <div className='create_acc_rec_containter'>
                <h6 className='create_acc_rec'>Bạn chưa có tài khoản ?</h6>
            </div>

            <NavLink to='/register' className='login_btn btn_clickable_boldcolor'>
              Đăng ký
            </NavLink>
          </div>

        </Form>
      </Col>

    </Container>
    </section>
  );
}

export default Login;