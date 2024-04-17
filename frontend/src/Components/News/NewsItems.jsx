import React from "react";
// import Card from 'react-bootstrap/Card';
import { Row, Col, Image} from "react-bootstrap";
import "style/components/News/NewsItems.scss"
import { Link } from 'react-router-dom';

function NewsItems() {
    return(
        <Row lg={2} md={2}>
        <div className="card">
        <Row>
            <Col sm={4}>
                <Image className="card__poster" loading="lazy" src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/433001636_764025502495269_5962452863049639980_n.png?stp=dst-png_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHCRjzxlwLOCHnD8DnRLqYUvfQQujb4Hga99BC6NvgeBhq9TXM7BvOJcNx-Ey-5ek9gCkaVAYKTQEYuNhaNVSTT&_nc_ohc=JyjMcp1FYDwAX8egRki&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfARj_h7WpcdyJotj23gWx0FCYr2ZAeUPyxRVCMbD6J0mA&oe=661161A9" />
                </Col>
                <Col sm={8}>
                <div className="card__body">
                    <Link className="article__title title-medium" to ="/news_post">hehe</Link>
                    <p className="article__context body-medium">hjhjhj</p>
                </div>
                </Col>
                </Row>
                </div>
        </Row>
    );
}
export default NewsItems;
