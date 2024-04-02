import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import "../../style/components/Products/productItem.scss"
import { IoHeartOutline } from "react-icons/io5";

function ProductItem(props) {
    return (
        <Row lg={3} md={2}>
            <div className="product__item">
                <div className="product__item__img">
                    <img src="https://bizweb.dktcdn.net/thumb/1024x1024/100/461/213/products/vsb500-1693984716343.png?v=1700111068067"></img>
                    {/* <img src="https://bizweb.dktcdn.net/100/463/551/products/vong-tay-nu-ca-tinh-a-d-e-l-e-02-jpeg.jpg?v=1665059164433"></img> */}
                </div>
                <div className="product__item__body">
                    <IoHeartOutline className='icon-heart'/>
                    <div className="product__item__name ">Vòng tay xinh xắn</div>
                    <div className="product__item__price">
                        <div className="item__price__current">100,000 đ</div>
                        <div className="item__price__discount">200,000 đ</div>
                    </div>
                    <div className="product__item__discount">Giảm 50%</div>
                    <div className="product__item__stock">Còn hàng</div>
                </div>
            </div>
        </Row>
    );
}

export default ProductItem;