import PopupQuickView from 'components/Products/PopupQuickView';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoHeartSharp } from 'react-icons/io5';
import { TbHeartPlus } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';
import 'style/components/Products/ProductItem.scss';

ProductItem.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    prod_name: PropTypes.string.isRequired,
    prod_cost: PropTypes.shape({
      $numberDecimal: PropTypes.string.isRequired,
    }).isRequired,
    prod_discount: PropTypes.shape({
      $numberDecimal: PropTypes.string.isRequired,
    }).isRequired,
    prod_end_date_discount: PropTypes.string.isRequired,
    prod_num_sold: PropTypes.number.isRequired,
    prod_num_rating: PropTypes.number.isRequired,
    prod_star_rating: PropTypes.string.isRequired,
    prod_description: PropTypes.string.isRequired,
    cate_id: PropTypes.string.isRequired,
    prod_img: PropTypes.arrayOf(PropTypes.string).isRequired,
    prod_num_avai: PropTypes.number.isRequired,
  }).isRequired,
};

function ProductItem({ product }) {
  const [isLiked, setIsLiked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const formatPrice = (price) => {
    const priceNumber = parseFloat(price);
    let formattedPrice = priceNumber.toLocaleString('vi-VN', { maximumFractionDigits: 0 });
    return formattedPrice.trim();
  };

  if (!product) {
    return null;
  }

  const currentPrice = formatPrice(
    product.prod_cost.$numberDecimal -
      product.prod_discount.$numberDecimal * product.prod_cost.$numberDecimal,
  );
  const discount = product.prod_discount.$numberDecimal * 100;
  const BeforDiscountPrice = formatPrice(product.prod_cost.$numberDecimal);

  return product.prod_num_avai > 0 ? (
    <div className="product__item body-large">
      <div className="product__item__img">
        <img className="img_front" src={product.prod_img[0]}></img>
        <img className="img_after" src={product.prod_img[1]}></img>
      </div>
      <div className="product__item__body">
        {isLiked ? (
          <IoHeartSharp className="icon-heart" onClick={toggleLike} />
        ) : (
          <TbHeartPlus className="icon-heart" onClick={toggleLike} />
        )}
        {/* <div className="product__item__name on-error-container-text">{product.prod_name}</div> */}
        <NavLink
          to={`/products/${product._id}`}
          className="product__item__name on-error-container-text"
        >
          {product.prod_name}
        </NavLink>
        <div className="product__item__price">
          <div className="item__price__current">{currentPrice} đ</div>
          {discount > 0 ? (<div className="item__price__discount">{BeforDiscountPrice} đ</div>) : ('')}
        </div>
        {discount > 0 ? (<div className="product__item__discount">Giảm {discount} %</div>) : (<div className="product__item__discount"></div>)}
        <div className="product__item__stock primary-text">Còn hàng</div>
      </div>
      <div className="product__item__section">
        <div className="product__item__view" onClick={() => setShowPopup(true)}>
          Xem nhanh
        </div>
        <PopupQuickView show={showPopup} onHide={() => setShowPopup(false)} productItem={product} />
        <div className="line--vertical"></div>
        <NavLink>Mua ngay</NavLink>
      </div>
    </div>
  ) : (
    <div className="product__outstock product__item body-large">
      <div className="product__item__img">
        <img className="img_front" src={product.prod_img[0]}></img>
        <img className="img_after" src={product.prod_img[1]}></img>
      </div>
      <div className="product__item__body">
        <TbHeartPlus className="icon-heart" />
        <div className="product__item__name on-error-container-text">{product.prod_name}</div>
        <div className="product__item__price">
          <div className="item__price__current">{currentPrice} đ</div>
          <div className="item__price__discount">{BeforDiscountPrice} đ</div>
        </div>
        <div className="product__item__discount">Giảm {discount} %</div>
        <div className="product__item__stock title-large error-text">Hết hàng</div>
      </div>
    </div>
  );
}
export default ProductItem;
