import { useState } from 'react';
import { Col } from 'react-bootstrap';
import { IoHeartSharp } from "react-icons/io5";
import { TbHeartPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import "style/components/Products/ProductItem.scss";
import PopupQuickView from 'components/Products/PopupQuickView';

function ProductCard(props) {
    const {name, imgURL, price, discount, status } = props;
    const [isLiked, setIsLiked] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const toggleLike = () => {
        setIsLiked(!isLiked);
    };

    const handleClick = () => {
        if(!localStorage.getItem('user')){
            alert('Vui lòng đăng nhập để mua hàng');
            return;
        }
        else{
            // Add to cart
        }
    }

    return (
        <Col lg={3} md={3} sm={3} >
            <div className="product__item">
                <div className="product__item__img">
                    <img className="img_front" src={imgURL[0]} alt='img'></img>
                    <img className="img_after" src={imgURL[1]} alt='img' ></img>
                </div>
                <div className="product__item__body">
                    {isLiked ? (
                        <IoHeartSharp className='icon-heart' onClick={toggleLike} />
                    ) : (
                        <TbHeartPlus className='icon-heart' onClick={toggleLike} />
                    )}
                    <div className="product__item__name label-large">{name}</div>
                    <div className="product__item__price">
                        <div className="item__price__current">{price} đ</div>
                        <div className="item__price__discount">{discount * 100 } đ</div>
                    </div>
                    <div className="product__item__discount">Giảm {discount * 100}%</div>
                    <div className="product__item__stock">{status}</div>
                </div>
                <div className="product__item__section">
                    <div className="product__item__view" onClick={handleClick}>
                        Xem nhanh
                    </div>

                    <PopupQuickView show={showPopup} onHide={() => setShowPopup(false)} />

                    <div className="line--vertical">
                    </div>
                    <NavLink to='/' onClick={handleClick}> Mua ngay</NavLink>
                </div>
            </div>
        </Col >
    );
}

export default ProductCard;