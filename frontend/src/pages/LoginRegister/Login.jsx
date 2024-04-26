import {Form, Image, Button,Col, Container } from 'react-bootstrap';
import logo from 'assets/image/logo2.svg';
import './Login.scss';
import { NavLink } from 'react-router-dom';
import React, {useState} from 'react';
import ModalForgotPass from './ModalForgotPass';
import { useLogIn } from 'hooks/useLogIn';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  
  const { logIn, loading, error } = useLogIn();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email,
      password
    }
    logIn(user);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  

  return (
    <section className="login">
    <Container className='d-flex' fluid>
      <Col className='side_bar d-flex justify-content-center align-item-center col-4'>
          <Image src={logo} alt='TAA_logo'/>
      </Col>

      <Col className='login_form col-8'>
        <h1> Đăng nhập </h1>
        <Form action='POST' onSubmit={handleSubmit}  >
          <Form.Group className="mb-3 input" controlId="formBasicEmail">
              <Form.Control onChange={handleEmailChange} type="email" placeholder="Điền email" />
              <Form.Text className="text-muted">
              </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3 input" controlId="formBasicPassword">
              <Form.Control onChange={handlePasswordChange} type="password" placeholder="Mật khẩu" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <ModalForgotPass></ModalForgotPass>
          </Form.Group>

          
          <div className="d-grid gap-2">
            <Button className='login_btn' type="submit" size='lg' active>
              Đăng nhập
            </Button>
            
            <div className='create_acc_rec_containter'>
                <h5 className='create_acc_rec'>Bạn chưa có tài khoản ?</h5>
            </div>

            <NavLink to='/register' className='register_btn btn_clickable_lightcolor_outline'>
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