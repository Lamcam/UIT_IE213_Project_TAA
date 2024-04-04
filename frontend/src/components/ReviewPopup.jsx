import React, { useState } from 'react';
import { Modal, Button, Image } from 'react-bootstrap';
import { IoMdClose } from 'react-icons/io';
import productDetailImg from '../assets/image/pencil.png';
import { FaRegStar, FaStar } from 'react-icons/fa';
import '../style/components/ReviewPopup.scss';

export default function ReviewPopup({ show, onHide }) {
  const [selectedRating, setSelectedRating] = useState(0);

  // Thiết lập rating khi người dùng click vào sao
  const handleStarClick = (index) => {
    setSelectedRating(index + 1);
  };

  // Hiển thị sao FaStar hoặc FaRegStar dựa trên trạng thái hover và selectedRating
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className="star-icon"
          onClick={() => handleStarClick(i)}
          onMouseEnter={() => setSelectedRating(i + 1)}
          onMouseLeave={() => setSelectedRating(0)}
        >
          {i < selectedRating ? <FaStar /> : <FaRegStar />}
        </span>,
      );
    }
    return stars;
  };

  // Hàm kiểm tra xem đã chọn đủ số sao hay chưa
  const hasSelectedStars = () => {
    return selectedRating > 0;
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton style={{ fontSize: '20px' }}>
        <Modal.Title className="modal__title">Đánh giá sản phẩm</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-review modal__content">
        <div className="modal-body">
          <div className="modal__product">
            <Image
              src={productDetailImg}
              className="product__image_small__size"
              id="image-review"
              alt="image small"
            />
            <div className="modal__product--cover">
              <span>Vòng tay ngôi sao may mắn</span>
              <span>Phân loại hàng: FreeStyle</span>
            </div>
          </div>
          <div className="modal__quality">
            <span className="mt-8">Chất lượng sản phẩm</span>
            <div id="rating" data-rating="">
              <FaRegStar className="star-icon" />
              <FaRegStar className="star-icon" />
              <FaRegStar className="star-icon" />
              <FaRegStar className="star-icon" />
              <FaRegStar className="star-icon" />
              <div className="review-start">
                <span>Tệ</span>
                <span>Tốt</span>
              </div>
            </div>
            <span className="mt-8">Tuyệt vời</span>
          </div>

          <div className="modal__service">
            <span className="mt-8">Dịch vụ vận chuyển</span>
            <div id="rating2" data-rating="">
              <FaRegStar className="star-icon" />
              <FaRegStar className="star-icon" />
              <FaRegStar className="star-icon" />
              <FaRegStar className="star-icon" />
              <FaRegStar className="star-icon" />
              <div className="review-start">
                <span>Tệ</span>
                <span>Tốt</span>
              </div>
            </div>
            <span className="mt-8">Tuyệt vời</span>
          </div>

          <div className="modal__form-review visible">
            <div className="modal__form-review-border">
              <label htmlFor="form__review">Đánh giá sản phẩm:</label>
              <textarea
                id="form__review"
                placeholder="Để lại đánh giá"
                className="modal__form-review-textarea mt-12"
                required
              ></textarea>
            </div>
            <div className="energy-review">
              Đánh giá của bạn là động lực để TAA ngày càng hoàn thiện hơn
            </div>
          </div>

          <div className="modal__checkbox-form">
            <input type="checkbox" id="checkbox1" />
            <div>
              <label className="modal__view-name-account" htmlFor="checkbox1">
                Hiển thị tên tài khoản trên đánh giá này
              </label>
              <span className="modal__check-name-account">
                Tên tài khoản sẽ được hiển thị như: Nguyễn Văn A
              </span>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn_round_8px btn_light btn_review_backto" onClick={onHide}>
          Trở lại
        </Button>
        <Button
          className="btn_round_8px btn_bold btn_review_done review-list__btn--del done-btn"
          onClick={onHide}
        >
          Hoàn thành
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
