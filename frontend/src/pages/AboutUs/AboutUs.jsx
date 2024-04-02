import React from 'react';
import "./AboutUs.scss";
import { Col, Row, Container } from 'react-bootstrap';

function AboutUs() {
    return (
      <Container className="about">
          <h1 className="about__title display-large">VỀ CHÚNG TÔI</h1>
          <div className="about__intro">
            <Row>
              <Col className="about__logo">
              <img src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/433001636_764025502495269_5962452863049639980_n.png?stp=dst-png_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHCRjzxlwLOCHnD8DnRLqYUvfQQujb4Hga99BC6NvgeBhq9TXM7BvOJcNx-Ey-5ek9gCkaVAYKTQEYuNhaNVSTT&_nc_ohc=JyjMcp1FYDwAX8egRki&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfARj_h7WpcdyJotj23gWx0FCYr2ZAeUPyxRVCMbD6J0mA&oe=661161A9" alt="Logo TAA"/>
              </Col>
              <Col className="about__information body-large">
              <p >TAA là thương
              hiệu phụ kiện dẫn dầu xu hướng với phong cách thiết kế đơn giản,
              sành điệu, sản phẩm tiêu chuẩn cao dành cho giới trẻ toàn cầu tự
              tin thể hiện cá tính và phong cách riêng. Được thành lập vào năm
              2023, chúng tôi đã trở thành nhà phân phối đầu tiên đi tiên phong
              với phân khúc sản phẩm siêu hời dưới "99.000vnđ" nhằm mang lại góc
              nhìn khác hơn về giá thành của thương hiệu Việt.</p>
              </Col>
            </Row>  
          </div>
    

      <div className="about__banner">
        <img src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/433001636_764025502495269_5962452863049639980_n.png?stp=dst-png_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHCRjzxlwLOCHnD8DnRLqYUvfQQujb4Hga99BC6NvgeBhq9TXM7BvOJcNx-Ey-5ek9gCkaVAYKTQEYuNhaNVSTT&_nc_ohc=JyjMcp1FYDwAX8egRki&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfARj_h7WpcdyJotj23gWx0FCYr2ZAeUPyxRVCMbD6J0mA&oe=661161A9" alt="Về chúng tôi"/>
      </div>

      <Row className='about__subtitle'>
        <Col className="about__content-left">
          <p className="display-small">WHAT WE DO</p>
          <p className="display-small">Young generatio ally</p>
              {/* <ul>
                <li class="display-small">WHAT WE DO</li>
                <li class="display-small">Young generatio ally</li>
              </ul> */}
        </Col>
        <Col className="about__content-right body-large">
        <p>Sứ mệnh
              của TAA là Cổ vũ cho thế hệ trẻ toàn thế giới tự do thể hiện phong
              cách thông qua thời trang, thương hiệu vượt qua ranh giới của thời
              trang đường phố bằng cách không ngừng sáng tạo các trang phục trong
              các bộ sưu tập độc đáo. TAA mong muốn đồng hành và tôn vinh thế hệ
              trẻ tài năng qua những xu hướng thời trang và hoạt động cộng đồng
              sáng tạo. Từ đó tạo dấu ấn cho giá trị bền vững để cùng các tài năng
              trẻ phát triển.</p>
        </Col>  
      </Row>
      

      <div className="about__banner">
        <img src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/433001636_764025502495269_5962452863049639980_n.png?stp=dst-png_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHCRjzxlwLOCHnD8DnRLqYUvfQQujb4Hga99BC6NvgeBhq9TXM7BvOJcNx-Ey-5ek9gCkaVAYKTQEYuNhaNVSTT&_nc_ohc=JyjMcp1FYDwAX8egRki&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfARj_h7WpcdyJotj23gWx0FCYr2ZAeUPyxRVCMbD6J0mA&oe=661161A9" alt="Về chúng tôi"/>
      </div>

      <Row className="about__contact">
        <Col>
        <p className="about__contact-title display-large">LIÊN HỆ</p>
        </Col>
        <Col className='about__contact-list'>
          <ul>
        <li className="body-large">Instagram: <a href="https://daa.uit.edu.vn/"> TAA_Shop</a></li>
        <li className="body-large">Shopee: <a href="https://daa.uit.edu.vn/"> TAA_Shop - Three Accessories Appreciate</a></li>
        <li className="body-large">Facebook: <a href="https://daa.uit.edu.vn/"> TAA</a></li>
        </ul>
        </Col>
      </Row>

      <div className="about__banner-small">
        <img src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/433001636_764025502495269_5962452863049639980_n.png?stp=dst-png_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHCRjzxlwLOCHnD8DnRLqYUvfQQujb4Hga99BC6NvgeBhq9TXM7BvOJcNx-Ey-5ek9gCkaVAYKTQEYuNhaNVSTT&_nc_ohc=JyjMcp1FYDwAX8egRki&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfARj_h7WpcdyJotj23gWx0FCYr2ZAeUPyxRVCMbD6J0mA&oe=661161A9" alt="Về chúng tôi"/>
      </div>

      </Container>
    );
};

export default AboutUs;