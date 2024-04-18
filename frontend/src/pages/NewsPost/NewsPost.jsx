import React, { useState, useEffect } from 'react';
import { Container, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import "./NewsPost.scss"
import bannersmall from "assets/image/banners/banner-small.png";
// import banner from "assets/image/banners/banner.png";
import axios from 'axios';
import PropTypes from 'prop-types';

NewsPost.propTypes = {
  newspost: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    b_title: PropTypes.string.isRequired,
    b_date: PropTypes.string.isRequired,
    b_content: PropTypes.string.isRequired,
    b_heading: PropTypes.arrayOf(PropTypes.string).isRequired,
    b_text: PropTypes.arrayOf(PropTypes.string).isRequired,
    b_image: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

function NewsPost(props) {
  
  const { newspostId } = useParams();
  const [newspost, setNewsPost] = useState(null);
  console.log(newspostId)

  useEffect(() => {
    const fetchNewsPost = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/news/${newspostId}`);
        // const response = await axios.get(`http://localhost:8000/news/661e937fc480bc54ddbff055`);
        console.log('data', response.data);
        setNewsPost(response.data);
      } catch (error) {
        console.error('Error fetching newspost:', error);
      }
    };

    fetchNewsPost();
  }, [newspostId]);
  console.log(newspost)
  if (!newspost) {
    console.log("a")
    return null;
}

    return (
        <div>
            <Container className="post fluid">
            <div className="post__title display-large"><span>{newspost.b_title}</span></div>
            <p className="post__date body-large mt-12">{newspost.b_date}</p>
            <p className="post__content body-large mt-12">{newspost.b_content}</p>
            {/* <Image className="post__poster" loading="lazy" src={banner} fluid/> */}
            <p className="post__heading headline-small">{newspost.b_heading[0]}</p>
            <p className="post__text body-large">{newspost.b_text[0]}</p>
            <div className="post__img-list">
              <img className="post__picture-product" loading="lazy" src={newspost.b_image[0]}> </img>
              <img className="post__picture-product" loading="lazy" src={newspost.b_image[1]}> </img>
              <img className="post__picture-product" loading="lazy" src={newspost.b_image[2]}> </img>
              <img className="post__picture-product" loading="lazy" src={newspost.b_image[3]}> </img>
            </div>

            <p className="post__heading headline-small">{newspost.b_heading[1]}</p>
            <p className="post__text body-large">{newspost.b_text[1]}</p>
            <div className="post__img-list">
              <img className="post__picture-product" loading="lazy" src={newspost.b_image[4]}> </img>
              <img className="post__picture-product" loading="lazy" src={newspost.b_image[5]}> </img>
              <img className="post__picture-product" loading="lazy" src={newspost.b_image[6]}> </img>
              <img className="post__picture-product" loading="lazy" src={newspost.b_image[7]}> </img>
            </div>

            <p className="post__heading headline-small">{newspost.b_heading[2]}</p>
            <p className="post__text body-large">{newspost.b_text[2]}</p>
            <div className="post__img-list">
              <img className="post__picture-product" loading="lazy" src={newspost.b_image[8]}> </img>
              <img className="post__picture-product" loading="lazy" src={newspost.b_image[9]}> </img>
              <img className="post__picture-product" loading="lazy" src={newspost.b_image[10]}> </img>
              <img className="post__picture-product" loading="lazy" src={newspost.b_image[11]}> </img>
            </div>
        
      </Container>
      <Image src={bannersmall} fluid/>
        </div>
    );

};
export default NewsPost;
