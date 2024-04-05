import React from "react";
import Card from 'react-bootstrap/Card';
import { Row, Col} from "react-bootstrap";
import "style/components/News/NewsItems.scss"

function NewsItems() {
    return(
        <Row lg={2} md={2}>
        <div class="card">
        <Row>
            <Col sm={4}>
                <img class="card__poster" loading="lazy" src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/433001636_764025502495269_5962452863049639980_n.png?stp=dst-png_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHCRjzxlwLOCHnD8DnRLqYUvfQQujb4Hga99BC6NvgeBhq9TXM7BvOJcNx-Ey-5ek9gCkaVAYKTQEYuNhaNVSTT&_nc_ohc=JyjMcp1FYDwAX8egRki&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfARj_h7WpcdyJotj23gWx0FCYr2ZAeUPyxRVCMbD6J0mA&oe=661161A9" alt="news1"/>
                </Col>
                <Col sm={8}>
                <div class="card__body">
                    <a class="article__title title-medium" href="">hehe</a>
                    <p class="article__context body-medium">hjhjhj</p>
                </div>
                </Col>
                </Row>
                </div>
        </Row>
    );
}
export default NewsItems;
