import React from "react";
import { Container, Image } from 'react-bootstrap';
import "./NewsPost.scss"
import bannersmall from "assets/image/banners/banner-small.png";
import banner from "assets/image/banners/banner.png"

function NewsPost() {
    return (
        <div>
            <Container className="post">
            <div className="post__title display-large">GIẢI MÃ PHONG CÁCH Y2K</div>
            <p className="post__date body-large mt-12">-25/10/2023-</p>
            <p className="post__content body-large mt-12">Y2K - phong cách thời trang nổi
              loạn có lẽ không còn xa lạ gì với chúng ta bởi thời trang và xu
              hướng thẩm mỹ từ cuối thập niên 90 đầu 2000 - đã gây chú ý trở
              lại trong những năm gần đây và được các tín đồ thời trang chào đón
              nồng nhiệt.</p>
            <Image className="post__poster" loading="lazy" src={banner} fluid/>
            <p className="post__heading headline-small">KẸP TÓC</p>
            <p className="post__text body-large">Chiếc kẹp tóc có thể dễ dàng tìm
              mua và được kết hợp trong nhiều phong cách do có đa dạng thiết kế,
              màu sắc. Phụ kiện này còn được yêu thích nhờ khả năng mang lại vẻ
              ngoài trẻ trung, đáng yêu cho người sử dụng. Không chỉ được Gen Z
              ưa chuộng, các kiểu kẹp bằng đá, kẹp ngọc trai còn chiếm trọn tình
              cảm của những cô gái theo đuổi phong cách vintage aesthetic.</p>
            <div className="post__img-list">
              <img className="post__picture-product" loading="lazy" src="/imgs/products/product1.jpg" alt="product1"/>
              <img className="post__picture-product" loading="lazy" src="/imgs/products/product2.jpg" alt="product3"/>
              <img className="post__picture-product" loading="lazy" src="/imgs/products/product4.jpg" alt="product1"/>
              <img className="post__picture-product" loading="lazy" src="/imgs/products/product3.jpg" alt="product3"/>
            </div>

            <p className="post__heading headline-small">DÂY ĐEO HẠT CƯỜM</p>
            <p className="post__text body-large">Mùa lễ hội, những kì nghỉ cực
              cháy sao có thể bỏ qua món phụ kiện đầy sắc màu, sự kết hợp đầy
              sáng tạo của phong cách thập niên 2000 mà vẫn bắt kịp trend hiện
              tại? Những chiếc vòng cổ, dây đeo hạt cườm cho ra những phong
              cách riêng biệt, mang đậm dấu ấn cá nhân giúp thoả đam mê những
              tín đồ thời trang dù là khó tính nhất!</p>
            <div className="post__img-list">
              <img className="post__picture-product" loading="lazy" src="/imgs/products/product5.jpg" alt="product1"/>
              <img className="post__picture-product" loading="lazy" src="/imgs/products/product6.jpg" alt="product3"/>
              <img className="post__picture-product" loading="lazy" src="/imgs/products/product8.jpg" alt="product1"/>
              <img className="post__picture-product" loading="lazy" src="/imgs/products/product7.jpg" alt="product3"/>
            </div>

            <p className="post__heading headline-small">MŨ</p>
            <p className="post__text body-large">Là phụ kiện phổ biến của cộng
              đồng hip hop những năm 80, mũ xô từng bước trở thành món đồ thời
              trang không thể thiếu của trào lưu Y2K. Hiện nay, những chiếc mũ
              xô xuất hiện với tần số dày đặt với nhiều phiên bản bắt mắt như
              tie dye, kiểu đan móc crochet, denim, họa tiết ngựa vằn,… cùng
              các tông màu rực rỡ thu hút rất lớn giới trẻ</p>
            <div className="post__img-list">
              <img className="post__picture-product" loading="lazy" src="/imgs/products/product9.jpg" alt="product1"/>
              <img className="post__picture-product" loading="lazy" src="/imgs/products/product11.jpg" alt="product3"/>
              <img className="post__picture-product" loading="lazy" src="/imgs/products/product10.jpg" alt="product1"/>
              <img className="post__picture-product" loading="lazy" src="/imgs/products/product12.jpg" alt="product3"/>
            </div>
        
      </Container>
      <Image src={bannersmall} fluid />
        </div>
    );

};
export default NewsPost;
