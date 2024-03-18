import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../Img/logo.svg'
import { FaFacebook, FaInstagram, FaYoutube  } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from '../Components/Input';
import Button from '../Components/Button';
import style from '../styles/partials/footer.module.scss'

const Footer = () => {
  return (
    <footer className="dark-light mt-5">
      <Container>
        <Row className='d-flex justify-content-start' >
          <Col>
            <img src={logo} alt='logo'></img>
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
              <Col className='col-1'>
                <a href="/"><i className="fab fa-facebook-f"><FaFacebook color='blue' size={25} /></i></a>
              </Col>
              <Col className='col-1'>
                <a href="/"><i className="fab fa-instagram"> <FaInstagram color='pink' size={25} /></i></a>
              </Col>
              <Col className='col-1' >
                <a href="/"><i className="fab fa-twitter"> <FaYoutube color='red' size={25} />  </i></a>
              </Col>
            </Row>

          </Col>

          <Col>
            <h3 className={style.footer__title}>Công ty</h3>
            <ul>
                <li><a href='/'>Tin tức </a></li>
                <li><a href="/">Về chúng tôi</a></li>
                <li><a href="/">Hướng dẫn mua hàng</a></li>
                <li><a href="/">Chính sách</a></li>
            </ul>
          </Col>

          <Col>
            <h3 className={style.footer__title} >Cập nhật về chúng tôi</h3>
            <p>Xác nhận thư điện tử của bạn để nhận được ngay những cập nhật mới nhất từ chúng tôi hàng tuần</p>
            
            <Row className='d-flex flex-row'>
                {/* <input className='col-8' type="email" placeholder="Email Address" /> */}
                <Input className='col-8' type="email" placeholder="Email Address" />
                <Button className="btn--filled col-4" label="Xác nhận" type="submit" />
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
