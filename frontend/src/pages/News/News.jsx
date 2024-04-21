import React, { useState, useEffect } from 'react';
import NewsItems from 'components/NewsComponents/NewsItems';
// import { useParams } from 'react-router-dom';
import { Container, Image } from 'react-bootstrap';
import 'style/pages/News/News.scss';
import banner1 from 'assets/image/banners/news__banner--large.jpg';
import banner2 from 'assets/image/banners/news__banner--large-1.jpg';
import banner3 from 'assets/image/banners/news__banner--large-2.jpg';
import bannersmall from 'assets/image/banners/banner-small.png';
import axios from 'axios';
// import PropTypes from 'prop-types';

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
  }, []);
  console.log(news)

  return (
    <Container className="news fluid">
      <h1 className="news__title display-large">TUẦN VỪA QUA</h1>

      <div className="news__slider">
        <div className="news__slider-wrapper">
          <Image loading="lazy" src={banner1} className="news__slider-img" />
          <Image loading="lazy" src={banner2} className="news__slider-img" />
          <Image loading="lazy" src={banner3} className="news__slider-img" />
        </div>
      </div>

      <h1 className="news__title display-large">BÀI VIẾT</h1>
      <div className="news__item">
        <div className="row row-cols-1 row-cols-md-2 g-5">
          {news &&
            news.length > 0 &&
            news.map((item) => (
              <div className="news__item-col" key={item._id}>
                <NewsItems news={item} />
              </div>
            ))}
        </div>
      </div>

      <div className="mt-12" id="nav-page"></div>

      <div className="news__banner">
        <Image src={bannersmall} fluid />
      </div>
    </Container>
  );
}

export default News;
