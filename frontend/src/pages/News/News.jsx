import React, { useState, useEffect } from 'react';
import NewsItems from 'components/NewsComponents/NewsItems';
import { useParams } from 'react-router-dom';
import { Container, Image } from 'react-bootstrap';
import "./News.scss";
import banner1 from "assets/image/banners/news__banner--large.jpg";
import banner2 from "assets/image/banners/news__banner--large-1.jpg";
import banner3 from "assets/image/banners/news__banner--large-2.jpg";
import bannersmall from "assets/image/banners/banner-small.png";
import axios from 'axios';
import PropTypes from 'prop-types';

// News.propTypes = {
//   news: PropTypes.shape({
//     _id: PropTypes.string.isRequired,
//     b_title: PropTypes.string.isRequired,
//     b_date: PropTypes.string.isRequired,
//     b_content: PropTypes.string.isRequired,
//     b_heading: PropTypes.arrayOf(PropTypes.string).isRequired,
//     b_text: PropTypes.arrayOf(PropTypes.string).isRequired,
//     b_img: PropTypes.arrayOf(PropTypes.string).isRequired,
//   }).isRequired,
// };

function News() {
  const posts = document.querySelectorAll('.NewsItems')
    posts.forEach((item) => {
        item.addEventListener("click", () => {
            window.location.href = "/news_post?id=1"
        })

    })

      // const { newsId } = useParams();
      const [news, setNews] = useState(null);
    
      useEffect(() => {
        const fetchNews = async () => {
          try {
            const response = await axios.get('http://localhost:8000/news');
            setNews(response.data);
          } catch (error) {
            console.error('Error fetching newspost:', error);
          }
        };
    
        fetchNews();
      });
      // console.log(news)

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
          {/* {news.map((item) => (
    <NewsItems newsitem={item} />
))} */}
 {news && news.length > 0 && news.map((item) => (
  <NewsItems key={item._id} newsitem={item} />
))}
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