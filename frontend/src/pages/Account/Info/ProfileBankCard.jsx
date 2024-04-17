import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import ButtonIcon from 'components/Common/ButtonIcon';
import Button1 from 'components/Common/Button1';
import { GrAdd } from 'react-icons/gr';
import { MdDeleteOutline } from 'react-icons/md';
import { CgClose } from 'react-icons/cg';
import AddBank from '../Modal/modal--add-bank';
import DelBank from '../Modal/modal--del-bank';
function ProfileBankCard() {
  const defaultUserData1 = {
    _id: "65f3eab4a8f986b1aca6929c",
    user_name: 'Phạm Thị D',
    user_phone: '0987465321',
    user_email: "jkl@gmail.com",
    user_pass: "$2b$10$iKVUrE.L6jhb6ywKS6C1fuNNHdGoIa6sim6oJxWjvWp/IJBBaRFJa",
    user_avatar: "user_avatar_3",
    local_default_id: "4",
    bank_default_id: "4",
    user_username: "jkl"
  };
// Lưu thông tin người dùng vào Local Storage
  localStorage.setItem('user', JSON.stringify(defaultUserData1));
  const defaultUserData = JSON.parse(localStorage.getItem('user'))
  const id = defaultUserData._id
  const [bankCards, setBankCards]=useState([])
  useEffect(() => {
    axios.get(`http://localhost:8000/api/account/bank-cards/${id}`)
      .then(response => {
        // Xử lý phản hồi từ server
        setBankCards(response.data);
        console.log('bankCards', bankCards)
      })
      .catch(error => {
        // Xử lý lỗi từ server
        console.error('Error:', error);
      });
    }, []); // Sử dụng mảng rỗng để đảm bảo useEffect chỉ chạy một lần sau khi render đầu tiên
  const handleSetDefault = (bankCard) => {
    setBankCards(
      bankCards.map((card) => {
        if (card === bankCard) {
          card.isDefault = true;
        } else {
          card.isDefault = false;
        }
        return card;
      }),
    );
  };
    // Hàm để che dấu số điện thoại, chỉ hiển thị 3 số cuối
  const maskBankNumber = (bankNumber) => {
    const masked = bankNumber.substring(0, bankNumber.length - 4).replace(/\d/g, '*');
    const lastFourDigits = bankNumber.substring(bankNumber.length - 4);
    return masked + lastFourDigits;
  };
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);

  const addNewCard = () => {
    
  };

  return (
    <article id="profile-bank-card" className="section__content visible">
      <div className="section__title">
        <h2 className="headline-small">Tài khoản ngân hàng</h2>
        <ButtonIcon
          className="section__btn"
          border="none"
          label={<GrAdd />}
          type="button"
          onClick={()=>setIsOpenAdd(true)}
        />
        <AddBank show={isOpenAdd} onHide={() => setIsOpenAdd(false)} id={id}/>
      </div>
      <hr className="hr-title" />
      <ul className="accounts-list">
        {bankCards.map((bankCard, index) => (
          <React.Fragment key={bankCard._id}>
            <li>
              <div className="account-item__wrapper">
                <div className="account-info">
                  <div className="account-number-default">
                    <p className='body-large'>STK:</p>
                    <p className='body-large'>{maskBankNumber(bankCard.bank_number)} </p>
                    {bankCard.isDefault && <span className="default-label label-large">Mặc định</span>}
                  </div>
                  <p className="bank-name body-large">Ngân hàng {bankCard.bank_name}</p>
                </div>

                <div className="bank-btn">
                  <Button1
                    backgroundColor={bankCard.isDefault ? '#1D1B201F' : '#785B5B'}
                    labelColor={bankCard.isDefault ? 'rgba(32, 26, 26, 0.38)' : '#F1EFE7'}
                    border="none"
                    className="set-default-btn label-large"
                    label="Thiết lập mặc định"
                    type="submit"
                    onClick={() => handleSetDefault(bankCard)}
                  />
                  <ButtonIcon
                    className="bank-item__btn--del"
                    label={<MdDeleteOutline style={{ color: '#785B5B' }} />}
                    type="button"
                    border="none"
                    backgroundColor="#F2E5E4"
                    onClick={()=>setIsOpenDelete(true)}
                  />
                          <DelBank show={isOpenDelete} onHide={() => setIsOpenDelete(false)} accounts={bankCard} />
                </div>
              </div>
            </li>
            {index < bankCards.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </ul>
    </article>
  );
}
export default ProfileBankCard;
