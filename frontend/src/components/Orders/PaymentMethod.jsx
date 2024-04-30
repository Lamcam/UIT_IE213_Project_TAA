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
  const [isModalDeliveryPayment, setIsModalDeliveryPayment] = useState(false);
  const [selectedItems, setSelectedItems] = useState(null);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  console.log('selectitemss', selectedItems)
  console.log(props.deliveryPaymentDefault)
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/account/bank-cards/${props.id}`)
      .then((response) => {
        const bankCardDefault = response.data.find((item) => {
          return item.is_default === true;
        });
        setSelectedItems(bankCardDefault)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }, []);
  
  useEffect(() => {
    props.selectedPaymentInfo(selectedItems)
  }, [selectedItems])

  const handleClick = (index) => {
    if (index === selectedOption) {
      return;
    }
    setSelectedOption(index);
    props.onPaymentMethodChange(index);
  };

  const maskBankNumber = (bankNumber) => {
    if (typeof bankNumber !== 'string' || bankNumber.length < 4) {
      return 'Invalid bank number';
    }

    const masked = bankNumber.substring(0, bankNumber.length - 4).replace(/\d/g, '*');
    const lastFourDigits = bankNumber.substring(bankNumber.length - 4);
    return masked + lastFourDigits;
  };
  const handleCheckedItems = (item) => {
    setSelectedItems(item);
  };

  const onSuccessAddBank = () => {
    axios
      .get(`http://localhost:8000/api/account/bank-cards/${props.id}`)
      .then((response) => {
        const bankCardDefault = response.data.find((item) => {
          return item.is_default === true;
        });
        props.updateDeliveryPayment(bankCardDefault)
        setSelectedItems(bankCardDefault)

      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  const updateDeliveryPayment = (item) => {
    props.updateDeliveryPayment(item)
  }

  const handleOnHide = () => {
      axios
        .get(`http://localhost:8000/api/account/bank-cards/${props.id}`)
        .then((response) => {
          console.log(response.data);
            const bankCardAfterDel = response.data.find((item) => {
              return item._id === selectedItems._id;
            });
            const bankCardDefault = response.data.find((item) => {
              return item.is_default === true;
            });
            const bankCardDefaultIndex = response.data.findIndex((item) => {
              return item.is_default === true;
            });
            if (!bankCardAfterDel) {
              if (!bankCardDefault) {
                console.log('k co defalut')
                updateDeliveryPayment(null)
                setSelectedItems(null)
                setIsModalDeliveryPayment(false)
              }
              else {
                console.log('co dèal')
                setIsModalDeliveryPayment(false)
                setSelectedItems('Bạn chưa chọn tài khoản thanh toán phù hợp')
              }
              
          }
          setIsModalDeliveryPayment(false)

      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  console.log(props.deliveryPaymentDefault)
  return (
    <div className="payment__method">
      <div className="payment__method__title title-large">3. Phương thức thanh toán</div>
      <div className="payment__method__one body-large" onClick={() => handleClick(0)}>
        {selectedOption === 0 ? (
          <MdOutlineRadioButtonChecked className="icon__radio" />
        ) : (
          <MdOutlineRadioButtonUnchecked className="icon__radio" />
        )}
        <span>Thanh toán tiền khi nhận hàng (COD)</span>
      </div>
      <div className="payment__method__two body-large" onClick={() => handleClick(1)}>
        {selectedOption === 1 ? (
          <MdOutlineRadioButtonChecked className="icon__radio" />
        ) : (
          <MdOutlineRadioButtonUnchecked className="icon__radio" />
        )}
        <span>Thanh toán trực tuyến qua ngân hàng</span>
      </div>



      {selectedOption === 1 && selectedItems==='Bạn chưa chọn tài khoản thanh toán phù hợp' && (<ul className="accounts-list">
            <div className="account-item__wrapper">
              <div className="account-info" style={{paddingRight: "40px"}}>
                  <p className="body-large">Bạn chưa chọn tài khoản thanh toán phù hợp!</p>
            </div>
            <div className="bank-btn" style={{paddingRight:"1rem"}}>
                <Button1
                  className="set-default-btn label-large"
                  label="Thay đổi"
                  type="button"
                  onClick={() => setIsModalDeliveryPayment(true)}
            />
            {isModalDeliveryPayment && (<ModalDeliveryPayment
              show={isModalDeliveryPayment}
              onHide={handleOnHide}
              onHideSubmit={() => setIsModalDeliveryPayment(false)}
              onCheckedItems={handleCheckedItems}
              idBankCard={props.deliveryPaymentDefault._id}
              updateDeliveryPayment={updateDeliveryPayment}
            />)}
          </div>
        </div>
      </ul>)}



      {selectedOption === 1 && selectedItems !== 'Bạn chưa chọn tài khoản thanh toán phù hợp' &&
        (!props.deliveryPaymentDefault ? (

          <ul className="accounts-list">
            <div className="account-item__wrapper">
              <div className="account-info" style={{paddingRight:"40px"}}>
              <div className="no-data">
              <img src={notFound} alt="Not found" />
                  <p className="body-large">Bạn chưa có tài khoản thanh toán, hãy thêm tài khoản để thanh toán!!!</p>
                </div>
            </div>
            <div className="bank-btn"  style={{paddingRight:"1rem"}}>
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
                    onSuccess={onSuccessAddBank}
                  />
                )}
              </div>
            </div>
          </ul>
        ) : (

          <ul className="accounts-list">
            <div className="account-item__wrapper">
              <div className="account-info" style={{ paddingLeft: '48px', gap:"6px", paddingTop:"6px" }}>
                <div className="account-number-default">
                  <p className="body-large" style={{ marginBottom: '0' }}>
                    STK:
                  </p>
                  <p className="body-large" style={{ marginBottom: '0' }}>
                    {maskBankNumber(
                      selectedItems && Object.keys(selectedItems).length === 0
                        ? props.deliveryPaymentDefault.bank_number
                        : selectedItems.bank_number,
                    )}{' '}
                    {/* {selectedItems && Object.keys(selectedItems).length === 0
                    ? props.deliveryPaymentDefault.bank_number
                    : selectedItems.bank_number} */}
                  </p>
                  {(selectedItems && Object.keys(selectedItems).length === 0
                    ? props.deliveryPaymentDefault.is_default
                    : selectedItems.is_default) && (
                      <span className="default-label label-large">Mặc định</span>
                    )}
                </div>
                <p className="bank-name body-large">
                  Ngân hàng{' '}
                  {selectedItems && Object.keys(selectedItems).length === 0
                    ? props.deliveryPaymentDefault.bank_name
                    : selectedItems.bank_name}
                </p>
              </div>

              <div className="bank-btn" style={{paddingRight: "1rem"}}>
                <Button1
                  className="set-default-btn label-large"
                  label="Thay đổi"
                  type="button"
                  onClick={() => setIsModalDeliveryPayment(true)}
                />
                {isModalDeliveryPayment && (<ModalDeliveryPayment
                  show={isModalDeliveryPayment}
                  onHide={handleOnHide}
                  onHideSubmit={() => setIsModalDeliveryPayment(false)}
                  onCheckedItems={handleCheckedItems}
                  idBankCard={selectedItems && Object.keys(selectedItems).length === 0 ? props.deliveryPaymentDefault._id : selectedItems._id}
                  updateDeliveryPayment={updateDeliveryPayment}
                />)}
              </div>
            </div>
          </ul>
        ))
      }

    </div>

  );
}

export default PaymentMethod;
