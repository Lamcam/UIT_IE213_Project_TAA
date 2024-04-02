import React, { useState, useEffect } from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import productDetailImg from '../../assets/image/pencil.png';
import productDetailImg1 from '../../assets/image/t1.jpg';
import productDetailImg2 from '../../assets/image/t2.jpg';
import productDetailImg3 from '../../assets/image/t3.jpg';
import productDetailImg4 from '../../assets/image/t4.jpg';
import productDetailImg5 from '../../assets/image/t5.jpg';
import '../../style/pages/ProductDetail/ProductDetail.scss';
import ProductItem from 'components/Products/ProductItem';
import { GiRabbitHead } from 'react-icons/gi';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { FaStarHalfAlt, FaStar, FaRegStar } from 'react-icons/fa';
import { BiDislike, BiLike } from 'react-icons/bi';
import { TbHeartPlus, TbHeartFilled } from 'react-icons/tb';
import { BiSolidLike, BiSolidDislike } from 'react-icons/bi';

export default function ProductDetail() {
  const [currentImg, setCurrentImg] = useState(productDetailImg);
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);

  const thumbnailImages = [
    productDetailImg,
    productDetailImg1,
    productDetailImg2,
    productDetailImg3,
    productDetailImg4,
    productDetailImg5,
  ];

  const handleThumbnailClick = (imgSrc) => {
    setCurrentImg(imgSrc);
    setSelectedThumbnail(imgSrc);
  };

  const handleThumbnailHover = (imgSrc) => {
    setSelectedThumbnail(imgSrc);
  };

  // Nút tăng giảm + - 1
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  // filter Rank
  const [selectedOption, setSelectedOption] = useState('Tất cả');
  const options = ['Tất cả', '5 Sao(300)', '4 Sao(20)', '3 Sao(3)', '2 Sao(0)', '1 Sao(1)'];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  //filer Sort
  const [selectedOption1, setSelectedOption1] = useState('Mới nhất');
  const options1 = ['Mới nhất', 'Cũ nhất'];

  const handleOptionChangeSort = (option1) => {
    setSelectedOption1(option1);
  };

  //heart plus
  const [isFilled, setIsFilled] = useState(false);

  const handleClick = () => {
    setIsFilled(!isFilled);
  };

  //like dislike
  const [likeType1, setLikeType1] = useState(null);
  const [likeCount1, setLikeCount1] = useState({ like: 2, dislike: 0 });

  const [likeType2, setLikeType2] = useState(null);
  const [likeCount2, setLikeCount2] = useState({ like: 7, dislike: 0 });

  const handleLikeDislikeClick1 = (type) => {
    if (likeType1 === type) {
      setLikeType1(null);
      setLikeCount1((prevCount) => ({
        ...prevCount,
        [type]: prevCount[type] - 1,
      }));
    } else {
      setLikeType1(type);
      setLikeCount1((prevCount) => ({
        ...prevCount,
        [type]: prevCount[type] + 1,
      }));
      if (likeType1 !== null) {
        setLikeCount1((prevCount) => ({
          ...prevCount,
          [likeType1]: prevCount[likeType1] - 1,
        }));
      }
    }
  };

  const handleLikeDislikeClick2 = (type) => {
    if (likeType2 === type) {
      setLikeType2(null);
      setLikeCount2((prevCount) => ({
        ...prevCount,
        [type]: prevCount[type] - 1,
      }));
    } else {
      setLikeType2(type);
      setLikeCount2((prevCount) => ({
        ...prevCount,
        [type]: prevCount[type] + 1,
      }));
      if (likeType2 !== null) {
        setLikeCount2((prevCount) => ({
          ...prevCount,
          [likeType2]: prevCount[likeType2] - 1,
        }));
      }
    }
  };

  return (
    <div>
      <Container className="product__detail">
        <Row>
          {/* Thumbnails */}
          <Col xs={1} className="product__detail_col1">
            <div className="product__image_small">
              {thumbnailImages.map((imgSrc, index) => (
                <Image
                  key={index}
                  src={imgSrc}
                  className={`product__image_small__size ${
                    selectedThumbnail === imgSrc ? 'selected' : ''
                  }`}
                  alt="image small"
                  preview={false}
                  onClick={() => handleThumbnailClick(imgSrc)}
                  onMouseEnter={() => handleThumbnailHover(imgSrc)}
                  onMouseLeave={() => setSelectedThumbnail(null)}
                />
              ))}
            </div>
          </Col>

          {/* Frame 2 */}
          <Col xs={6} className="product__detail_col6" style={{ padding: '0px' }}>
            <Image
              className="product__image_big"
              src={currentImg}
              alt="image product"
              preview={false}
            />
          </Col>

          {/* Frame 3 */}
          <Col xs={5} className="product__detail_col5">
            <div className="product__detail__col3">
              <div className="product__name__detail">
                <div className="product__name__detail__first">
                  <h1 className="product__name__detail__title">Tên sản phẩm</h1>
                  <div>
                    {isFilled ? (
                      <TbHeartFilled className="heart_plus" onClick={handleClick} />
                    ) : (
                      <TbHeartPlus className="heart_plus" onClick={handleClick} />
                    )}
                  </div>
                </div>
                <div className="product__name__detail__review">
                  <div className="product__name__detail__review_first">
                    <span>4.8</span>
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                  </div>
                  <span>2 đánh giá</span>
                  <span>3 đã bán</span>
                </div>
                <div className="product__name__detail__price">
                  <span className="product__name__detail__price_first">180.000đ</span>
                  <span className="product__name__detail__price_second">79.000đ</span>
                  <span className="product__name__detail__price_third">25% giảm</span>
                </div>
              </div>
              <div className="description__product__detail">
                <span>THÔNG TIN SẢN PHẨM</span>
                <ul>
                  <li>Đảm bảo hàng có chất lượng thương hiệu.</li>
                  <li>Hàng luôn có sẵn ở TAA.</li>
                  <li>Phong cách Unisex, phù hợp Nam/Nữ.</li>
                </ul>
              </div>
              <div className="ship__product__detail">
                <span className="ship__product__detail_title">Vận chuyển</span>
                <div className="ship__product__detail_description">
                  <GiRabbitHead className="ship__product__detail_description__icon" />
                  <div className="ship__product__detail_description__category">
                    <span>
                      <strong>Miễn phí vận chuyển</strong>
                    </span>
                    <span>Miễn phí vận chuyển cho mọi đơn hàng</span>
                  </div>
                </div>
              </div>
              <div className="color__product__detail">
                <span>Màu sắc: </span>
                <div className="btn_round_32px">Freestyle</div>
              </div>
              <div className="size__product__detail">
                <span>Kích cỡ: </span>
                <div className="btn_round_32px">L</div>
              </div>
              <div className="quantity__product__detail">
                <span className="quantity__product__detail_title">Số lượng: </span>
                <div className="quantity__product__detail_input ">
                  <div class="quantity__product-decrement outline-text" onClick={handleDecrement}>
                    -
                  </div>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    step="1"
                    value={quantity}
                    className="my-input"
                    readOnly
                  ></input>
                  <div class="quantity__product-increment outline-text" onClick={handleIncrement}>
                    +
                  </div>
                </div>
                <span className="quantity__product__detail_available">182 sản phẩm sẵn có</span>
              </div>
              <div className="add__cart__buy__now">
                <button className="btn_round_8px btn_clickable_lightcolor">
                  <MdOutlineAddShoppingCart />
                  Thêm vào giỏ hàng
                </button>
                <button className="btn_round_8px btn_clickable_boldcolor">Mua ngay</button>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="product__description">
          <span>THÔNG TIN THƯƠNG HIỆU</span>
          <ul>
            <li>
              - Thương hiệu TAA - Three Accessories Appreciate đã được đăng kí bảo hộ năm 2023,
              chuyên sản xuất và nhập khẩu các mặt hàng phụ kiện thời trang như: Vòng cổ , Nhẫn ,
              Hoa Tai , Vòng Tay,... cùng những sản phẩm khác phục vụ cho niềm đam mê với phụ kiện
              của bạn.
            </li>
            <li>
              - Điểm tạo nên sự khác biệt của chúng tôi đó chính là nguồn sản phẩm dồi dào, đáp ứng
              mọi yêu cầu về các phong cách khác nhau của mọi khách hàng với mức giá vô cùng phải
              chăng.
            </li>
            <li>
              - TAA đã có cửa hàng tại HCM và 100.000 KH mua sắm mỗi năm. Phương châm của TAA là
              luôn khách hàng lên hàng đầu, chứng tôi sẽ cố gắng thực hiện hóa mọi nhu cầu của bạn.
            </li>
            <li>
              - Thiết kế may tinh tế, sắc sảo và thời trang, theo phong cách Ulzzang Hàn Quốc cá
              tính.
            </li>
          </ul>
        </Row>

        <Row className="product__rating">
          <span className="product__rating__title">ĐÁNH GIÁ SẢN PHẨM</span>
          <div className="product__rating__star">
            <div className="product__rating__star_45">
              <span>4.5</span>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <div className="product__rating__star__filter">
              <div className="product__rating__star__filter__rank">
                <span>Xếp hạng</span>
                <select
                  className="btn_round_8px btn__filter__rank"
                  value={selectedOption}
                  onChange={(e) => handleOptionChange(e.target.value)}
                >
                  {options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="product__rating__star__filter__soft">
                <span>Sắp xếp theo</span>
                <select
                  className="btn_round_8px btn__filter__soft"
                  value={selectedOption1}
                  onChange={(e) => handleOptionChangeSort(e.target.value)}
                >
                  {options1.map((option1, index) => (
                    <option key={index} value={option1}>
                      {option1}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* component feedback comment */}
          <div className="rating__item">
            <div className="rating__item__avatar">
              <Image
                className="rating__item__img"
                src={productDetailImg}
                alt="image small"
                preview={false}
              />
            </div>
            <div className="rating__item__body">
              <div className="body__info">
                <div className="body__info__name">lamcam2003</div>
                <div className="body__info__star">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="body__info__date">
                  <span>24 - 03 - 29 20:27</span>
                  <div className="vertical"></div>
                  <span>Phân loại hàng: Freestyle</span>
                </div>
              </div>
              <div className="body__content">Sản phẩm xinh cực, cảm ơn shop ạ!!</div>
              <div className="body__imgs">
                <Image
                  src={productDetailImg}
                  className="body__img"
                  alt="image small"
                  preview={false}
                />
                <Image
                  src={productDetailImg}
                  alt="image small"
                  className="body__img"
                  preview={false}
                />
                <div className="img_small_blur">
                  <Image
                    src={productDetailImg}
                    alt="image small"
                    className="body__img"
                    preview={false}
                  />
                  <div className="overlay">
                    <p class="blur_text_img">+2</p>
                  </div>
                </div>
              </div>
              <div className="body__react">
                <div className="body__react__like">
                  {likeType1 === 'like' ? (
                    <BiSolidLike
                      className="btn_like_dislike"
                      onClick={() => handleLikeDislikeClick1('like')}
                    />
                  ) : (
                    <BiLike
                      className="btn_like_dislike"
                      onClick={() => handleLikeDislikeClick1('like')}
                    />
                  )}
                  <span>{likeCount1.like}</span>
                </div>
                <div className="body__react__dislike">
                  {likeType1 === 'dislike' ? (
                    <BiSolidDislike
                      className="btn_like_dislike"
                      onClick={() => handleLikeDislikeClick1('dislike')}
                    />
                  ) : (
                    <BiDislike
                      className="btn_like_dislike"
                      onClick={() => handleLikeDislikeClick1('dislike')}
                    />
                  )}
                  <span>{likeCount1.dislike}</span>
                </div>
              </div>
            </div>
          </div>
          {/* component feedback comment */}
          <div className="rating__item">
            <div className="rating__item__avatar">
              <Image
                className="rating__item__img"
                src={productDetailImg}
                alt="image small"
                preview={false}
              />
            </div>
            <div className="rating__item__body">
              <div className="body__info">
                <div className="body__info__name">xxnhi</div>
                <div className="body__info__star">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="body__info__date">
                  <span>24 - 03 - 29 20:27</span>
                  <div className="vertical"></div>
                  <span>Phân loại hàng: Freestyle</span>
                </div>
              </div>
              <div className="body__content">Chủ sốp dễ thương, tư vấn nhiệt tình, sp siu đẹp</div>
              <div className="body__imgs">
                <Image
                  src={productDetailImg}
                  className="body__img"
                  alt="image small"
                  preview={false}
                />
                <Image
                  src={productDetailImg}
                  alt="image small"
                  className="body__img"
                  preview={false}
                />
                <div className="img_small_blur">
                  <Image
                    src={productDetailImg}
                    alt="image small"
                    className="body__img"
                    preview={false}
                  />
                  <div className="overlay">
                    <p class="blur_text_img">+2</p>
                  </div>
                </div>
              </div>
              <div className="body__react">
                <div className="body__react__like">
                  {likeType2 === 'like' ? (
                    <BiSolidLike
                      className="btn_like_dislike"
                      onClick={() => handleLikeDislikeClick2('like')}
                    />
                  ) : (
                    <BiLike
                      className="btn_like_dislike"
                      onClick={() => handleLikeDislikeClick2('like')}
                    />
                  )}
                  <span>{likeCount2.like}</span>
                </div>
                <div className="body__react__dislike">
                  {likeType2 === 'dislike' ? (
                    <BiSolidDislike onClick={() => handleLikeDislikeClick2('dislike')} />
                  ) : (
                    <BiDislike onClick={() => handleLikeDislikeClick2('dislike')} />
                  )}
                  <span>{likeCount2.dislike}</span>
                </div>
              </div>
            </div>
          </div>
        </Row>

        <Row className="product__suggestion">
          <span className="product__suggestion__title">Các sản phẩm đề xuất</span>
          <div className="product_suggestion__items">
            <ProductItem className="product_suggestion__item" />
            <ProductItem className="product_suggestion__item" />
            <ProductItem className="product_suggestion__item" />
          </div>
        </Row>
      </Container>
    </div>
  );
}
