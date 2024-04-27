import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button1 from 'components/Common/Button1';
import { MdOutlineRadioButtonChecked, MdOutlineRadioButtonUnchecked } from 'react-icons/md';
import 'style/components/Orders/PaymentMethod.scss';
import ModalDeliveryPayment from './Modal--DeliveryPayment';
import notFound from '../../assets/image/account/no-data.jpg';
function PaymentMethod(props) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [notBankCard, setNotBankCard] = useState(false);
  const [deliveryPaymentDefault, setDeliveryPaymentDefault] = useState('');
  const [isModalDeliveryPayment, setIsModalDeliveryPayment] = useState(false);
  const [selectedItems, setSelectedItems] = useState({});

  // Hàm xử lý sự kiện khi click vào một nút
  const handleClick = (index) => {
    // Nếu nút đã được chọn, không làm gì cả
    if (index === selectedOption) {
      return;
    }
    // Nếu không, cập nhật trạng thái của nút mới được chọn
    setSelectedOption(index);
    props.onPaymentMethodChange(index === 0 || index === 1);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/account/bank-cards/${props.id}`)
      .then((response) => {
        if (Array.isArray(response.data) && response.data.length === 0) {
          setNotBankCard(true);
        } else {
          const bankCardDefault = response.data.find((item) => {
            return item.is_default === true;
          });
          setDeliveryPaymentDefault(bankCardDefault);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
  // Hàm để che dấu số tài khoản, chỉ hiển thị 4 số cuối
  const maskBankNumber = (bankNumber) => {
    // Kiểm tra xem bankNumber có tồn tại không
    if (typeof bankNumber !== 'string' || bankNumber.length < 4) {
      // Trả về một giá trị mặc định hoặc xử lý lỗi ở đây
      return 'Invalid bank number';
    }

    const masked = bankNumber.substring(0, bankNumber.length - 4).replace(/\d/g, '*');
    const lastFourDigits = bankNumber.substring(bankNumber.length - 4);
    return masked + lastFourDigits;
  };
  const handleCheckedItems = (item) => {
    setSelectedItems(item);
  };

  return (
    <div className="payment__method">
      <div className="payment__method__title title-large">3. Phương thức thanh toán</div>
      <div className="payment__method__one body-medium" onClick={() => handleClick(0)}>
        {selectedOption === 0 ? (
          <MdOutlineRadioButtonChecked className="icon__radio" />
        ) : (
          <MdOutlineRadioButtonUnchecked className="icon__radio" />
        )}
        <span>Thanh toán tiền khi nhận hàng (COD)</span>
      </div>
      <div className="payment__method__two body-medium" onClick={() => handleClick(1)}>
        {selectedOption === 1 ? (
          <MdOutlineRadioButtonChecked className="icon__radio" />
        ) : (
          <MdOutlineRadioButtonUnchecked className="icon__radio" />
        )}
        <span>Thanh toán trực tuyến qua ngân hàng</span>
      </div>
      <ModalDeliveryPayment
        show={isModalDeliveryPayment}
        onHide={() => setIsModalDeliveryPayment(false)}
        onCheckedItems={handleCheckedItems}
      />

      {selectedOption === 1 && (notBankCard ? (
              <div className="no-data">
                <p className="body-large">Không có tài khoản thanh toán được tìm thấy</p>
                <img src={notFound} alt="Not found" />
              </div>
            ):(
        <div className="account-item__wrapper">
          <div className="account-info" style={{ paddingLeft: '48px' }}>
            <div className="account-number-default">
              <p className="body-large" style={{ marginBottom: '0' }}>
                STK:
              </p>
              <p className="body-large" style={{ marginBottom: '0' }}>
                {maskBankNumber(
                  Object.keys(selectedItems).length === 0
                    ? deliveryPaymentDefault.bank_number
                    : selectedItems.bank_number,
                )}{' '}
              </p>
              {(Object.keys(selectedItems).length === 0
                ? deliveryPaymentDefault.is_default
                : selectedItems.is_default) && (
                <span className="default-label label-large">Mặc định</span>
              )}
            </div>
            <p className="bank-name body-large">
              Ngân hàng{' '}
              {Object.keys(selectedItems).length === 0
                ? deliveryPaymentDefault.bank_name
                : selectedItems.bank_name}
            </p>
          </div>

          <div className="bank-btn">
            <Button1
              // backgroundColor={bankCard.is_default ? '#1D1B201F' : '#785B5B'}
              // labelColor={bankCard.is_default ? 'rgba(32, 26, 26, 0.38)' : '#F1EFE7'}
              // border="none"
              className="set-default-btn label-large"
              label="Thay đổi"
              type="button"
              onClick={() => setIsModalDeliveryPayment(true)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PaymentMethod;
