import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from 'assets/Image/logo.svg'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Input from 'components/Common/Input';
import Button from 'react-bootstrap/Button';
import './footer.module.scss'
// import base from 'base.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

const logoStyle = {
  maxHeight: '200px',
  minHeight: '70px',
}

const Footer = () => {
  return (
    <footer className="dark-light mt-12">
      <Container className='footer_container'>
        <Row className='d-flex justify-content-start' >
          <Col>
            <img className='img-fluid' src={logo} alt='logo' style={logoStyle} ></img>
            <p>
              TAA là một nền tảng thương mại điện tử chuyên về bán đồ phụ kiện trang
              sức. Với sự tập trung vào việc cung cấp những sản phẩm chất lượng cao
              và thiết kế độc đáo, TAA đã trở thành điểm đến lý tưởng cho những người
              đam mê phụ kiện và trang sức.
              <br></br>
              Việc mua hàng của bạn là động lực cho chúng tôi tiếp tục duy trì được công ty.
              <br></br>
              Bạn liên hệ với chúng tôi bằng các mạng xã hội dưới đây.
            </p>

            <Row>
              <Col className='col-2'>
                <a href="/"><i className="fab fa-facebook-f"><FaFacebook color='blue' size={25} /></i></a>
              </Col>
              <Col className='col-2'>
                <a href="/"><i className="fab fa-instagram"> <FaInstagram color='pink' size={25} /></i></a>
              </Col>
              <Col className='col-2' >
                <a href="/"><i className="fab fa-twitter"> <FaYoutube color='red' size={25} />  </i></a>
              </Col>
            </Row>

          </Col>

          <Col>
            <h3 className='footer__title'>Công ty</h3>
            <ul>
              <li><a href='/'>Tin tức </a></li>
              <li><a href="/">Về chúng tôi</a></li>
              <li><a href="/">Hướng dẫn mua hàng</a></li>
              <li><a href="/">Chính sách</a></li>
            </ul>
          </Col>

          <Col>
            <h3 className='footer__title' >Cập nhật về chúng tôi</h3>
            <p>Xác nhận thư điện tử của bạn để nhận được ngay những cập nhật mới nhất từ chúng tôi hàng tuần</p>

            <Row className='d-flex flex-row justify-content-center align-items-center'>
              <Col className='col-7'>
                <Input type="email" placeholder="Email Address" />
              </Col>
              <Col className='col-5' >
                {/* <Button className="btn--filled" label="Xác nhận" type="submit" /> */}
                <Button className='confirm_button' size="lg">
                  Xác nhận
                </Button>
              </Col>
            </Row>

          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <p>&copy; 2023 TAA. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
