import React from "react";
// import Card from 'react-bootstrap/Card';
import { Row, Col, Image } from "react-bootstrap";
import "style/components/News/NewsItems.scss"
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

NewsItems.propTypes = {
    newsitem: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        b_title: PropTypes.string.isRequired,
        b_date: PropTypes.string.isRequired,
        b_content: PropTypes.string.isRequired,
        b_heading: PropTypes.arrayOf(PropTypes.string).isRequired,
        b_text: PropTypes.arrayOf(PropTypes.string).isRequired,
        b_image: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};


function NewsItems({ newsitem }) {
    if (!newsitem) {
        return null;
    }
    console.log(newsitem)
    return (
        <Row lg={2} md={2}>
            <div className="card">
                <Row>
                    <Col sm={4}>
                        {/* <Image className="card__poster" loading="lazy" src={newsitem.b_img[0]} /> */}
                        {newsitem && newsitem.b_image && newsitem.b_image[0] && (
                            <Image className="card__poster" loading="lazy" src={newsitem.b_image[0]} />
                        )}
                        {/* console.log(newsitem.b_img[0]) */}
                    </Col>
                    <Col sm={8}>
                        <div className="card__body">
                            {/* <Link className="article__title title-medium" to="/news_post">{newsitem.b_title}</Link> */}
                            <NavLink to={`/news/${newsitem._id}`} className="article__title title-medium">{newsitem.b_title}</NavLink>
                            <p className="article__context body-medium">{newsitem.b_content}</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </Row>
    );
}
export default NewsItems;
