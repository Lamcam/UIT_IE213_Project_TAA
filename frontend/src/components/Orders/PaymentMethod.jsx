import React, { useState } from 'react';
import axios from 'axios';
import Button1 from "components/Common/Button1"
import { MdOutlineRadioButtonChecked, MdOutlineRadioButtonUnchecked } from 'react-icons/md';
import 'style/components/Orders/PaymentMethod.scss';
import ModalDeliveryPayment from './Modal--DeliveryPayment';

function PaymentMethod(props) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [deliveryPaymentDefault, setDeliveryPaymentDefault] = useState('');
  const [isModalDeliveryPayment, setIsModalDeliveryPayment] = useState(false)

  // Hàm xử lý sự kiện khi click vào một nút
  const handleClick = (index) => {
    // Nếu nút đã được chọn, không làm gì cả
    if (index === selectedOption) {
      return;
    }
    // Nếu không, cập nhật trạng thái của nút mới được chọn
    setSelectedOption(index);
    props.onPaymentMethodChange(index === 0 || index === 1);
    if (index === 1) {
      axios
        .get(`http://localhost:8000/api/account/bank-cards/${props.id}`)
        .then((response) => {
          const bankCardDefault = response.data.find((item) => {
            return item.is_default === true;
          });
          setDeliveryPaymentDefault(bankCardDefault);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

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
      {selectedOption === 1 && (
        <div className="account-item__wrapper">
          <div className="account-info">
            <div className="account-number-default">
              <p className="body-large" style={{ marginBottom: '0' }}>
                STK:
              </p>
              <p className="body-large" style={{ marginBottom: '0' }}>
                {maskBankNumber(deliveryPaymentDefault.bank_number)}{' '}
              </p>
              {deliveryPaymentDefault.is_default && (
                <span className="default-label label-large">Mặc định</span>
              )}
            </div>
            <p className="bank-name body-large">Ngân hàng {deliveryPaymentDefault.bank_name}</p>
          </div>

          <div className="bank-btn">
            <Button1
              // backgroundColor={bankCard.is_default ? '#1D1B201F' : '#785B5B'}
              // labelColor={bankCard.is_default ? 'rgba(32, 26, 26, 0.38)' : '#F1EFE7'}
              // border="none"
              className="set-default-btn label-large"
              label="Thay đổi"
              type="button"
              // onClick={() => handleSetDefault(bankCard, bankCard._id, id)}
            />
            <ModalDeliveryPayment/>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentMethod;
