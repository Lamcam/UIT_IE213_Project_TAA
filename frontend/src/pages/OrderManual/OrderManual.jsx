import React from 'react';
import { Container } from 'react-bootstrap';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import "./OrderManual.scss";

function OrderManual() {
    return (
        <div className="orderManual">
        <Container>
        <h1 className="orderManual__title display-large">HƯỚNG DẪN MUA HÀNG TRÊN
          WEBSITE</h1>
        <div className="oderManual__content body-large">
          <p>Quý khách vui lòng tham khảo thông tin chi tiết về từng bước đặt
            hàng như sau:</p>
          <h2 className="orderManual__step headline-small">TÌM KIẾM VÀ CHỌN SẢN
            PHẨM YÊU THÍCH TRÊN WEBSITE</h2>
          <p>Quý khách có thể chọn tìm kiếm sản phẩm theo 2 cách sau:</p>
          <ol>
            <li>Gõ tên sản phẩm vào thanh tìm kiếm
              <span className="oderManual__search-bar">
                <input className="label-large" type="text" placeholder="Tìm kiếm"/>
                <button className="btn-icon btn--filled">
                  <FaSearch size={25}/>
                </button>   
              </span> phía trên cùng webiste.
            </li>
            <li>Tìm sản phẩm trong mục "SẢN PHẨM" trên thanh menu.</li>
          </ol>
          <p>Sau khi tìm kiếm và lựa chọn cho mình sản phẩm ưng ý, quý
            khách nhấn chọn vào sản phẩm để xem hàng. Tại đây, khách hàng
            chọn Màu sắc, Kích cỡ và Số lượng sản phẩm muốn mua và chọn
            mua sản phẩm bằng cách bấm chuột vào nút
            <button className="btn--filled">
              <span className="status-layer label-large">Mua ngay</span>
            </button>.
          </p>
          <p>Nếu quý khách lựa chọn thêm vào yêu thích tại biểu tượng "Yêu
            thích" phía góc trên bên phải của trang, từ trang Sản phẩm yêu
            thích, khách hàng lựa chọn sản phẩm muốn mua,
            giao diện sẽ được điều hướng đến trang chi tiết sản phẩm, sau đó
            khách hàng thực hiện mua hàng theo cách trên.</p>
          <p>Ngoài ra, nếu quý khách lựa chọn
            <button className="btn--filled-con btn-icon-label">
              <span className="status-layer">
              <FaShoppingCart size={25}/>
                <span className='label'>Thêm vào giỏ hàng</span>
              </span>
            </button> , từ trang Giỏ hàng, khách hàng lựa chọn sản phẩm muốn
            mua nếu các thông số như Màu sắc, Kích cỡ và Số lượng sản phẩm đã
            phù hợp với nhu cầu của khách hàng, khách hàng thực hiện bấm chọn
            <button className="btn--filled">
              <span className="status-layer">Tiến hành đặt hàng</span>
            </button>.
          </p>
          <h2 className="orderManual__step headline-small">TIẾN HÀNH ĐẶT HÀNG VÀ
            THANH TOÁN ĐƠN HÀNG</h2>
          <p>Trên trang thanh toán, khách hàng lưu ý điền đầy đủ thông tin bắt
            buộc cho đơn hàng:</p>
          <h3 className="orderManual__section-title title-large">Thông tin nhận hàng</h3>
          <i>* TAA khuyến khích khách hàng mua sắm bằng cách đăng ký tài khoản
            tại TAA.com để tiết kiệm thời gian và nhận những ưu đãi qua tài
            khoản. Với tài khoản này, bạn sẽ dễ dàng đặt mua sản phẩm mà không
            cần điền lại thông tin mỗi lần mua hàng.</i>
          <ul>
            <li>Đối với khách hàng đã có tài khoản, xin vui lòng đăng nhập
              bằng tài khoản đã có sẵn trước khi đặt hàng.</li>
            <li>Đối với khách hàng chưa có tài khoản, xin vui lòng đăng ký,
              sau đó đăng nhập tài khoản.</li>
          </ul>
          <h3 className="orderManual__section-title title-large">Phương thức vận chuyển</h3>
          <p>Khách hàng vui lòng chọn phương thức vận chuyển theo nhu cầu:</p>
          <ul>
            <li>Giao hàng nhanh trong 2h.</li>
            <li>Giao hàng trong 48h.</li>
          </ul>
          <h3 className="orderManual__section-title title-large">Phương thức thanh toán</h3>
          <p>Bạn có thể chọn một trong các phương thức thanh toán có sẵn:</p>
          <ul>
            <li>Thanh toán khi nhận hàng bằng tiền mặt (COD).</li>
            <li>Thanh toán trực tuyến qua ngân hàng.</li>
          </ul>

          <h2 className="orderManual__step headline-small">XÁC NHẬN ĐƠN HÀNG</h2>
          <p>Sau khi hoàn tất quy trình mua hàng online trên website, quý
            khách vui lòng kiểm tra thư điện tử Xác Nhận Đặt Hàng với thông
            tin chi tiết về đơn hàng mà khách hàng đã đặt trước đó.</p>
        </div>
    </Container>
    <img className="orderManual__banner" loading="lazy" src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/433001636_764025502495269_5962452863049639980_n.png?stp=dst-png_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHCRjzxlwLOCHnD8DnRLqYUvfQQujb4Hga99BC6NvgeBhq9TXM7BvOJcNx-Ey-5ek9gCkaVAYKTQEYuNhaNVSTT&_nc_ohc=JyjMcp1FYDwAX8egRki&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfARj_h7WpcdyJotj23gWx0FCYr2ZAeUPyxRVCMbD6J0mA&oe=661161A9" alt="Định hướng"/>
    </div>
);
};
export default OrderManual;