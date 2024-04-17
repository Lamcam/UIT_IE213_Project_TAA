import React from 'react';
import NewsItems from 'components/News/NewsItems';
import { Container, Image } from 'react-bootstrap';
import "./News.scss";
import banner1 from "assets/image/banners/news__banner--large.jpg";
import banner2 from "assets/image/banners/news__banner--large-1.jpg";
import banner3 from "assets/image/banners/news__banner--large-2.jpg";
import bannersmall from "assets/image/banners/banner-small.png";

function News() {
  const posts = document.querySelectorAll('.NewsItems')
    posts.forEach((item) => {
        item.addEventListener("click", () => {
            window.location.href = "/news_post?id=1"
        })

    })
    return (
        <div>
          
        <h1 className="news__title display-large">TUẦN VỪA QUA</h1>

      <div className="news__slider">
        <div className="news__slider-wrapper">
          <Image loading="lazy" src={banner1} className="news__slider-img"/>
          <Image loading="lazy" src={banner2} className="news__slider-img"/>
          <Image loading="lazy" src={banner3} className="news__slider-img"/>
        </div>
      </div>
      <Container className="news">
       
          <h1 className="news__title display-large">BÀI VIẾT</h1>
          <div className="news__item row">
          <NewsItems></NewsItems>
          </div>
        
        <div className="mt-12" id="nav-page"></div>

     
     </Container>

      <div className="news__banner">
      <Image src={bannersmall} fluid />
      </div>
      </div>
    );
};

export default News;