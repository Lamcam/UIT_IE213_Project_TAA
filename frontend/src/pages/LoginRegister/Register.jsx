import { Form, Image, Button, Col, Container } from 'react-bootstrap';
import logo from 'assets/image/logo2.svg';
import './Login.scss';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { useRegister } from 'hooks/useRegister';

function Register() {
  const { register } = useRegister();
  const [submit, setSubmit] = useState(false);

  const [valid, setValid] = useState({
    username: false,
    phone: false,
    email: false,
    password: false,
    confirm: false,
    check: false,
  });

  const inform = {
    username: 'Tên đăng nhập phải có ít nhất 1 ký tự',
    phone: 'Số điện thoại phải có từ 10 đến 11 số',
    email: 'Email phải định dạng @ và .com',
    password: 'Mật khẩu có ít nhất 8 kí tự, gồm chữ, số, ký tự đặc biệt',
    confirm: 'Mật khẩu xác nhận phải khớp với mật khẩu trước đó',
    check: 'Bạn phải đồng ý với điều khoản của TAA',
  };

  const [input, setInput] = useState({
    username: '',
    phone: '',
    email: '',
    password: '',
    confirm: '',
  });

  const handleCheck = (e) => {
    setValid({ ...valid, check: !valid.check });
  };

  const handleInputPasswordChange = (e) => {
    var regex = /^(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=])[a-zA-Z\d@#$%^&+=]{8,}$/;
    setInput({ ...input, password: e.target.value });
    console.log(e.target.value);
    console.log('regex', regex.test(e.target.value));
    if (regex.test(e.target.value)) {
      setValid({ ...valid, password: true });
    } else {
      setValid({ ...valid, password: false });
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setInput({ ...input, confirm: e.target.value });
    if (input.password === e.target.value) {
      setValid({ ...valid, confirm: true });
    } else {
      setValid({ ...valid, confirm: false });
    }
  };

  const handleNameChange = (e) => {
    setInput({ ...input, username: e.target.value });
    if (e.target.value.length > 0) {
      setValid({ ...valid, username: true });
    } else {
      setValid({ ...valid, username: false });
    }
  };

  const handleEmailChange = (e) => {
    setInput({ ...input, email: e.target.value });
    if (e.target.value.includes('@') && e.target.value.includes('.com')) {
      setValid({ ...valid, email: true });
    } else {
      setValid({ ...valid, email: false });
    }
  };

  const handlePhoneChange = (e) => {
    setInput({ ...input, phone: e.target.value });
    if (e.target.value.length >= 10 && e.target.value.length <= 11) {
      setValid({ ...valid, phone: true });
    } else {
      setValid({ ...valid, phone: false });
    }
  };

  const handleSubmition = async (e) => {
    e.preventDefault();
    const all = Object.values(valid);

    if (all.every((item) => item === true)) {
      setSubmit(true);
      console.log('Đăng nhập thành công');
      window.location.href = '/log_in';
    } else {
      // alert('Vui lòng điền đầy đủ thông tin');
      console.log(valid);
      setSubmit(false);
      return;
    }
    register(input);
  };

  return (
    <section className="register">
      <Container className="d-flex" fluid>
        <Col className="side_bar d-flex justify-content-center align-item-center col-4">
          <Image src={logo} alt="TAA_logo" />
        </Col>

        <Col className="register_form col-8">
          <h1> Đăng ký </h1>
          <Form onSubmit={handleSubmition}>
            <Form.Group className="mb-3 input" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Tên đăng nhập" onChange={handleNameChange} />
              <Form.Text className="text-muted">
                {!valid.username && submit ? inform.username : null}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 input" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Số điện thoại" onChange={handlePhoneChange} />
              <Form.Text className="text-muted">
                {!valid.phone && submit ? inform.phone : null}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 input" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                placeholder="Điền email"
                onChange={handleEmailChange}
              />
              <Form.Text className="text-muted">
                {!valid.email && submit ? inform.email : null}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 input" controlId="formBasicPassword">
              <Form.Control
                new-password
                type="password"
                name="password"
                placeholder="Mật khẩu"
                onChange={handleInputPasswordChange}
              />
              <Form.Text className="text-muted">
                {!valid.password && submit ? inform.password : null}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 input" controlId="formConfirmPassword">
              <Form.Control
                type="password"
                new-password
                onChange={handleConfirmPasswordChange}
                placeholder="Xác nhận mật khẩu"
              />
              <Form.Text className="text-muted">
                {!valid.confirm && submit ? inform.confirm : null}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                onClick={handleCheck}
                label="Tôi đã đọc và đồng ý với Điều kiện giao dịch chung và Chính sách bảo mật thông tin của TAA"
              />
              <Form.Text className="text-muted">
                {!valid.check && submit ? inform.check : null}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="submit_reg">
              <div className="d-grid gap-2">
                <Button
                  className="register_btn"
                  variant="none"
                  size="lg"
                  onClick={() => {
                    setSubmit(true);
                    console.log(submit);
                  }}
                  type="submit"
                >
                  Đăng ký
                </Button>

                <div className="login_rec_containter">
                  <h5 className="login_rec">Bạn đã có tài khoản ?</h5>
                </div>

                <NavLink to="/log_in" className="login_btn btn_clickable_lightcolor_outline">
                  Đăng nhập
                </NavLink>
              </div>
            </Form.Group>
          </Form>
        </Col>
      </Container>
    </section>
  );
}

export default Register;
