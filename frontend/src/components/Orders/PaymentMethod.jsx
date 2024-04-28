import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button1 from 'components/Common/Button1';
import { MdOutlineRadioButtonChecked, MdOutlineRadioButtonUnchecked } from 'react-icons/md';
import 'style/components/Orders/PaymentMethod.scss';
import ModalDeliveryPayment from './Modal--DeliveryPayment';
import notFound from '../../assets/image/account/no-data.jpg';
import AddBank from 'pages/Account/Modal/modal--add-bank';
function PaymentMethod(props) {
  const [selectedOption, setSelectedOption] = useState(null);
  // const [notBankCard, setNotBankCard] = useState(false);
  // const [deliveryPaymentDefault, setDeliveryPaymentDefault] = useState('');
  const [isModalDeliveryPayment, setIsModalDeliveryPayment] = useState(false);
  const [selectedItems, setSelectedItems] = useState({});
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  // const [bankCards, setBankCards] = useState([]);

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
  // useEffect(() => {
    // axios
    //   .get(`http://localhost:8000/api/account/bank-cards/${props.id}`)
    //   .then((response) => {
    //     if (Array.isArray(response.data) && response.data.length === 0) {
    //       setNotBankCard(true);
    //     } 
    //     else {
    //       const bankCardDefault = response.data.find((item) => {
    //         return item.is_default === true;
    //       });
    //       // setDeliveryPaymentDefault(bankCardDefault);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
    
  // }, [notBankCard]);
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
  // const updateNotBankCard = (val) => {
  //   setNotBankCard(val)
  // }
  console.log(selectedItems)
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
      {isModalDeliveryPayment && (<ModalDeliveryPayment
        show={isModalDeliveryPayment}
        onHide={() => setIsModalDeliveryPayment(false)}
        onCheckedItems={handleCheckedItems}
        deliveryPaymentDefault={props.deliveryPaymentDefault}
        idBankCard={Object.keys(selectedItems).length === 0 ? props.deliveryPaymentDefault._id : selectedItems._id}
      />)}

      {selectedOption === 1 &&
        (!props.deliveryPaymentDefault || !selectedItems ? (
          <ul className="accounts-list">
            <div className="account-item__wrapper">
              <div className="account-info" style={{padding: "0 0 0 48px", marginRight: "48px" }}>
              <div className="no-data">
              <img src={notFound} alt="Not found" />
                  <p className="body-large">Bạn chưa có tài khoản thanh toán, hãy thêm tài khoản để thanh toán trực tuyến qua ngân hàng!</p>
                </div>
            </div>
            <div className="bank-btn">
                <Button1
                  className="set-default-btn label-large"
                  label="Thêm tài khoản"
                  type="button"
                  onClick={() => setIsOpenAdd(true)}
              />
              {isOpenAdd && (
                <AddBank
                  show={isOpenAdd}
                  onClose={() => setIsOpenAdd(false)}
                  id={props.id}
                  onSuccess={props.onSuccessAddBank}
                />
              )}
              </div>
            </div>
          </ul>
        ) : (
          <ul className="accounts-list">
            <div className="account-item__wrapper">
              <div className="account-info" style={{ paddingLeft: '48px' }}>
                <div className="account-number-default">
                  <p className="body-large" style={{ marginBottom: '0' }}>
                    STK:
                  </p>
                  <p className="body-large" style={{ marginBottom: '0' }}>
                    {maskBankNumber(
                      Object.keys(selectedItems).length === 0
                        ? props.deliveryPaymentDefault.bank_number
                        : selectedItems.bank_number,
                    )}{' '}
                  </p>
                  {(Object.keys(selectedItems).length === 0
                    ? props.deliveryPaymentDefault.is_default
                    : selectedItems.is_default) && (
                    <span className="default-label label-large">Mặc định</span>
                  )}
                </div>
                <p className="bank-name body-large">
                  Ngân hàng{' '}
                  {Object.keys(selectedItems).length === 0
                    ? props.deliveryPaymentDefault.bank_name
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
          </ul>
        ))}
    </div>
  );
}

export default PaymentMethod;
