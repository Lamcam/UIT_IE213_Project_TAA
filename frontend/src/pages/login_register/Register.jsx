import {Form, Image, Button } from 'react-bootstrap';
import {Col, Container} from 'react-bootstrap';
import logo from 'assets/image/logo2.svg';
import './login.css';

function Register() {
  return (
    <section className="register">
    <Container className='d-flex'>
      <Col className='side_bar d-flex justify-content-center align-item-center col-4'>
          <Image src={logo} alt='TAA_logo'/>
      </Col>

      <Col className='register_form col-8'>
        <h1> Đăng nhập </h1>
        <Form>
          <Form.Group className="mb-3 input" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Tên đăng nhập" />
              <Form.Text className="text-muted">
              </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3 input" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Số điện thoại" />
              <Form.Text className="text-muted">
              </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3 input" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Điền email" />
              <Form.Text className="text-muted">
              </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3 input" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Mật khẩu" />
          </Form.Group>
          <Form.Group className="mb-3 input" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Xác nhận mật khẩu" />
          </Form.Group>
         

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
             <Form.Check type="checkbox" label="Tôi đã đọc và đồng ý với Điều kiện giao dịch chung và Chính sách bảo mật thông tin của TAA" />
        </Form.Group>

          
          <div className="d-grid gap-2">
            
            <Button className='register_btn' size="lg">
                Đăng ký
            </Button>

            <div className='login_rec_containter'>
                <h6 className='login_rec'>Bạn đã có tài khoản ?</h6>
            </div>

            <Button className='login_btn' type="submit" size='lg'>
              Đăng nhập
            </Button>

             
          </div>

        </Form>
      </Col>

    </Container>
    </section>
  );
}

export default Register;