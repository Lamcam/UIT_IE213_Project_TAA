import React, { useState } from 'react';
import { Button, Input, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FaStarHalfAlt, FaStar, FaRegStar } from 'react-icons/fa';
import { MdOutlineAddShoppingCart } from "react-icons/md";
import 'style/components/Products/PopupQuickView.scss';
function PopupQuickView(props) {
  const [selectedImage, setSelectedImage] = useState(props.images[0]);
  const [quantity, setQuantity] = useState(1);

  const selectImage = (image) => {
    setSelectedImage(image);
  };

  const handleImageHover = (image) => {
    setSelectedImage(image);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      return newQuantity <= parseInt(props.stock) ? newQuantity : prevQuantity;
    });
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity - 1;
      return newQuantity >= 0 ? newQuantity : 0;
    });
  };

  const handleChange = (event) => {
    let value = parseInt(event.target.value);
    if (isNaN(value)) {
      value = 0;
    } else if (value > parseInt(props.stock)) {
      value = parseInt(props.stock);
    } else if (value < 0) {
      value = 0;
    }
    setQuantity(value);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='quick__view__header' closeButton />
      <Modal.Body className="quick__view__body">
        <div className="quick__view__img">
          <div className="img__show__case">
            <img
              src={selectedImage}
              alt="Product"
              className={selectedImage === props.images[0] ? "selected" : ""}
            />
          </div>
          <div className="img__list">
            {props.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Product"
                onClick={() => selectImage(image)}
                onMouseEnter={() => handleImageHover(image)}
                className={image === selectedImage ? "selected" : ""}
              />
            ))}
          </div>
        </div>
        <div className="quick__view__info">
          <div className="info__name headline-medium">Tên sản phẩm</div>
          <div className="info__rate">
            <div className="info__rate__star title-medium ">
              4.5
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <div className="info__rate__number">2 đánh giá</div>
            <div className="info__number__sell">6 đã bán</div>
          </div>
          <div className="info__price">
            <p className="info__price__cost body-large">180.000 đ</p>
            <p className="info__price__cost__discount headline-small">79.000 đ</p>
            <div className="info__percent__discount body-large">Giảm 42%</div>
          </div>
          <div className="info__color body-large">
            <p className="info__color__title">Màu sắc:</p>
            <div className="info__color__value outline-text">Xanh lá</div>
          </div>
          <div className="info__size body-large">
            <p className="info__size__title">Kích thước:</p>
            <div className="info__size__value outline-text">Freestyle</div>
          </div>
          <div className="info__quantity">
            <div className="info__quantity__title body-large bold">Số lượng: </div>
            <div className="info__quantity__product outline-text body-large">
              <div className="info__quantity__product-decrement outline-text" onClick={handleDecrement}>-</div>
              <input id="number__product__select" type="number" min="1" max={props.stock} step="1" value={quantity} className="my-input" onChange={handleChange} />
              <div className="info__quantity__product-increment outline-text" onClick={handleIncrement}>+</div>
            </div>
            <p className="info__quantity__stock body-medium">{props.stock} sản phẩm sẵn có</p>
          </div>
          <div className="info__button">
            <Button className="button__add__cart body-large">
              <MdOutlineAddShoppingCart className="icon__add__cart" />
              Thêm vào giỏ hàng
            </Button>
            <Button className="button__detail__view">Xem chi tiết</Button>
          </div>
          <div class="info__context body-large">
          <div class="info__context__product">
            <div class="info__context__product__title">
              THÔNG TIN SẢN PHẨM
            </div>
            <ul class="info__context__product__body">
              <li>Đảm bảo hàng có chất lượng thương hiệu.</li>
              <li>Hàng luôn có sẵn ở TAA.</li>
              <li>Phong cách Unisex, phù hợp Nam/Nữ.</li>
            </ul>
          </div>
          <div class="info__context__detail">
            <div class="info__context__detail__title">
              THÔNG TIN THƯƠNG HIỆU:
            </div>
            <ul class="info__context__detail__body">
              <li>- Thương hiệu TAA - Three Accessories Appreciate đã được đăng kí bảo hộ năm 2023.</li>
              <li>- TAA đã có cửa hàng tại HCM và 100.000 KH mua sắm mỗi năm.</li>
              <li>- Phương châm của TAA là luôn khách hàng lên hàng đầu, chứng tôi sẽ cố gắng thực hiện hóa mọi nhu cầu của bạn.</li>
            </ul>
          </div>
        </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

PopupQuickView.propTypes = {
  onClose: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  stock: PropTypes.number.isRequired,
};

export default PopupQuickView;
