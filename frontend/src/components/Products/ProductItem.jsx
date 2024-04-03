import PopupQuickView from 'components/Products/PopupQuickView';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import { IoHeartSharp } from "react-icons/io5";
import { TbHeartPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import "style/components/Products/ProductItem.scss";

function ProductItem(props) {
    const [isLiked, setIsLiked] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const toggleLike = () => {
        setIsLiked(!isLiked);
    };

    return (
        <Row lg={3} md={2}>
            <div className="product__item">
                <div className="product__item__img">
                    <img className="img_front" src="https://bizweb.dktcdn.net/thumb/1024x1024/100/461/213/products/vsb500-1693984716343.png?v=1700111068067"></img>
                    <img className="img_after" src="https://bizweb.dktcdn.net/100/463/551/products/vong-tay-nu-ca-tinh-a-d-e-l-e-02-jpeg.jpg?v=1665059164433"></img>
                </div>
                <div className="product__item__body">
                    {isLiked ? (
                        <IoHeartSharp className='icon-heart' onClick={toggleLike} />
                    ) : (
                        <TbHeartPlus className='icon-heart' onClick={toggleLike} />
                    )}
                    <div className="product__item__name label-large">Vòng tay xinh xắn</div>
                    <div className="product__item__price">
                        <div className="item__price__current">100,000 đ</div>
                        <div className="item__price__discount">200,000 đ</div>
                    </div>
                    <div className="product__item__discount">Giảm 50%</div>
                    <div className="product__item__stock">Còn hàng</div>
                </div>
                <div className="product__item__section">
                    <div className="product__item__view" onClick={() => setShowPopup(
                        true
                    )}>
                        Xem nhanh
                    </div>
                    <PopupQuickView show={showPopup}
                        onHide={() => setShowPopup(false)} />
                    <div className="line--vertical"></div>
                    <NavLink >Mua ngay</NavLink>
                </div>
            </div>
        </Row >
    );
}

export default ProductItem;