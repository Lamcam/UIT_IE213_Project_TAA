import React from 'react';
import { Container, Row, Image } from 'react-bootstrap';
import 'style/pages/Policy/Policy.scss';
import bannersmall from 'assets/image/banners/banner-small.png';

function Policy() {
  return (
    <Container className="policy fluid">
      <Row>
        <div className="policy__title1 display-large">CHÍNH SÁCH BẢO HÀNH</div>
        <div className="policy__content">
          <ol className="policy__object-list">
            <li className="policy__sub-title headline-small">
              Đối tượng & thời gian áp dụng
              <ul>
                <li className="body-large">
                  Đối với sản phẩm phụ kiện: Trong 30 ngày, từ ngày mua hàng theo thời gian ghi trên
                  hoá đơn với trường hợp bung đường chỉ, bung quai đeo, hư khoá kéo và tất cả những
                  lỗi kỹ thuật do nhà sản xuất. Bạn sẽ được đổi sang sản phẩm mới 100%.
                </li>
                <li className="body-large">
                  Trong quá trình sử dụng sản phẩm, mọi thắc mắc vui lòng liên hệ Các trang Mạng xã
                  hội của TAA Shop (Facebook, Instagram, TikTok) hoặc Đường dây tiếp nhận phản hồi
                  1900 63 3028 để được tụi mình hỗ trợ nhanh chóng.
                </li>
              </ul>
            </li>

            <li className="policy__sub-title headline-small">
              Trường hợp không được bảo hành
              <ul>
                <li className="body-large">
                  Lỗi do sử dụng không đúng cách như: sử dụng quá tải so với sức chứa, chịu lực,
                  kích cỡ của sản phẩm, làm cho sản phẩm thay đổi quá nhiều so với hình dạng ban
                  đầu.
                </li>
                <li className="body-large">
                  Lỗi do bảo quản không đúng quy cách như: sử dụng chất tẩy rửa mạnh để giặt và gây
                  lem màu, phơi nắng quá lâu làm hư hại sản phẩm...
                </li>
                <li className="body-large">
                  Sản phẩm hư hỏng do tác động bên ngoài, biến dạng, rách thủng, ẩm mốc, cháy hoặc
                  do người sử dụng làm hỏng.
                </li>
                <li className="body-large">
                  Sản phẩm đã qua sử dụng bị dơ bẩn, đã được sửa chữa bởi người sử dụng.
                </li>
                <li className="body-large">Sản phẩm đã quá hạn bảo hành.</li>
              </ul>
            </li>
          </ol>
        </div>
        <div className="policy__title2 display-large">CHÍNH SÁCH ĐỔI TRẢ</div>
        <div className="policy__content body-large">
          <ol className="policy__object-list">
            <li className="policy__sub-title headline-small">
              Điều kiện đổi hàng
              <ul className="policy__case body-large">
                <li className="body-large">
                  Đối với sản phẩm áo quần, thời gian đổi hàng trong vòng 7 ngày kể từ ngày khách
                  hàng nhận bưu phẩm.
                </li>
                <li className="body-large">
                  Đối với sản phẩm phụ kiện (cặp sách, dép, mũ,…), thời gian đổi hàng trong vòng 30
                  ngày kể từ ngày khách hàng nhận bưu phẩm.
                </li>
                <li className="body-large">
                  Áp dụng đổi hàng với tất cả các sản phẩm và sản phẩm được đổi phải còn nguyên nhãn
                  mác, trong tình trạng chưa qua sử dụng.
                </li>
                <li className="body-large">Áp dụng 01 lần đổi/ 01 đơn hàng.</li>
                <li className="body-large">
                  Với trường hợp sản phẩm bị cắt nhãn mác, trong vòng 1 ngày kể từ ngày nhận bưu
                  phẩm, bạn hãy gửi phản hồi về tụi mình để được giải quyết. Qua mốc thời gian 1
                  ngày chúng mình sẽ không giải quyết đơn đổi trả.
                </li>
                <li className="body-large">
                  Sản phẩm đổi phải có giá trị tương đương hoặc cao hơn sản phẩm được đổi. Vui lòng
                  thanh toán chi phí chênh lệch giá trị sản phẩm nếu có.
                </li>
                <li className="body-large">
                  Trường hợp hoàn lại giá trị đơn hàng, tụi mình sẽ hoàn tiền trong vòng 48h làm
                  việc sau khi nhận được yêu cầu từ các bạn.
                </li>
                <li className="body-large">
                  Áp dụng với các đơn hàng trên toàn hệ thống của TAA Shop (Website, FB & IG, TMĐT &
                  cửa hàng).
                </li>
              </ul>
            </li>

            <span className="policy__notice body-large">
              Lưu ý: Bạn vui lòng gửi cho chúng mình clip đóng gói hàng đổi trả của bạn, nhân viên
              tư vấn sẽ xác nhận và tiến hành lên đơn đổi trả cho bạn.
            </span>
            <li className="policy__sub-title headline-small">
              Quy trình đổi hàng
              <p className="policy__notice body-large">
                Không rườm rà, chỉ với 2 bước đơn giản sau:
              </p>
              <ul>
                <li className="body-large">
                  Bước 1: Nhắn tin cho các kênh Mạng xã hội hoặc Shopee hoặc Đường dây tiếp nhận
                  phản hồi chính thức của TAA cung cấp thông tin địa chỉ của bạn: Họ tên, số điện
                  thoại, địa chỉ và video mở gói hàng.
                </li>
                <li className="body-large">
                  Bước 2: Sau khi xác nhận đổi hàng, tụi mình sẽ gửi đơn hàng mới về địa chỉ của
                  bạn. Bạn chỉ cần gửi hàng cần đổi trả cho nhân viên giao-nhận hàng.
                </li>
              </ul>
              <span className="policy__notice body-large">
                Tham khảo cách thức quay video mở sản phẩm:
              </span>
              <ul>
                <li className="body-large">
                  Clip rõ nét, trung thực quay từ cảnh kiểm tra bề mặt của gói hàng, lúc mở đến kiểm
                  tra hàng.
                </li>
                <li className="body-large">Clip không cắt ghép, không chỉnh sửa.</li>
                <li className="body-large">
                  Clip quay rõ được thông tin trên bưu phẩm: Tên người nhận, mã đơn hàng, địa chỉ,
                  số điện thoại.
                </li>
              </ul>
              <span className="policy__notice body-large">Lưu ý:</span>
              <ul>
                <li className="body-large">
                  Chính sách hoàn tiền này áp dụng tùy trường hợp với các đơn hàng từ sàn thương mại
                  điện tử.
                </li>
                <li className="body-large">
                  Đối với sản phẩm nằm trong chương trình giảm giá, bạn muốn đổi sang sản phẩm khác
                  thì mọi khuyến mại, giảm giá sẽ không được giữ, sản phẩm mới sẽ được áp dụng giá
                  tại website chính thức của Levents® tại thời điểm đổi, nếu có chênh lệch giá bạn
                  vui lòng thanh toán phần chênh lệch đó và phí giao hàng phát sinh.
                </li>
                <li className="body-large">
                  Chỉ hoàn tiền với phương thức trực tuyến thông qua thẻ ATM nội địa, Visa,...
                </li>
                <li className="body-large">
                  TAA Shop có quyền quyết định dừng việc hỗ trợ trả lại tiền cho khách hàng nếu phát
                  hiện khách hàng sử dụng chính sách để trục lợi. Mọi thắc mắc về Chính sách đổi
                  hàng, khách hàng vui lòng gọi đến Đường dây tiếp nhận phản hồi 1900 63 3028 để
                  được bộ phận bán hàng hướng dẫn và giải quyết.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </Row>

      <div className="about__banner-small">
        <Image src={bannersmall} fluid />
      </div>
    </Container>
  );
}

export default Policy;
