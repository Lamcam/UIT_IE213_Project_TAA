import React from 'react';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import ButtonIcon from 'components/Common/ButtonIcon';
import Button1 from 'components/Common/Button1';
import { GrAdd } from 'react-icons/gr';
import { MdDeleteOutline } from 'react-icons/md';
import { CgClose } from 'react-icons/cg';
import AddBank from '../Modal/modal--add-bank';
import DelBank from '../Modal/modal--del-bank';
function ProfileBankCard() {
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      fullName: '',
      cmnd: '',
      bankName: 'Ngân hàng ABC',
      accountNumber: '********1230',
      isDefault: true,
    },
    {
      id: 2,
      fullName: '',
      cmnd: '',
      bankName: 'Ngân hàng ABC',
      accountNumber: '********1230',
      isDefault: false,
    },
    {
      id: 3,
      fullName: '',
      cmnd: '',
      bankName: 'Ngân hàng ABC',
      accountNumber: '********1230',
      isDefault: false,
    },
  ]);
  const handleSetDefault = (account) => {
    setAccounts(
      accounts.map((acc) => {
        if (acc === account) {
          acc.isDefault = true;
        } else {
          acc.isDefault = false;
        }
        return acc;
      }),
    );
  };
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccounts((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addNewAccount = () => {
    const newAccount = {
      id: accounts.length + 1, // Tạo id mới cho tài khoản
      fullName: '',
      cmnd: '',
      bankName: '',
      accountNumber: '',
      isDefault: false,
    };

    setAccounts([...accounts, newAccount]); // Thêm tài khoản mới vào mảng accounts
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
        <AddBank show={isOpenAdd} onHide={() => setIsOpenAdd(false)} accounts={accounts[0]} handleChange={handleChange} />
      </div>
      <hr className="hr-title" />
      <ul className="accounts-list">
        {accounts.map((account, index) => (
          <React.Fragment key={account.id}>
            <li>
              <div className="account-item__wrapper">
                <div className="account-info">
                  <div className="account-number-default">
                    <p className='body-large'>STK:</p>
                    <p className='body-large'>{account.accountNumber}</p>
                    {account.isDefault && <span className="default-label label-large">Mặc định</span>}
                  </div>
                  <p className="bank-name body-large">{account.bankName}</p>
                </div>

                <div className="bank-btn">
                  <Button1
                    backgroundColor={account.isDefault ? '#1D1B201F' : '#785B5B'}
                    labelColor={account.isDefault ? 'rgba(32, 26, 26, 0.38)' : '#F1EFE7'}
                    border="none"
                    className="set-default-btn label-large"
                    label="Thiết lập mặc định"
                    type="submit"
                    onClick={() => handleSetDefault(account)}
                  />
                  <ButtonIcon
                    className="bank-item__btn--del"
                    label={<MdDeleteOutline style={{ color: '#785B5B' }} />}
                    type="button"
                    border="none"
                    backgroundColor="#F2E5E4"
                    onClick={()=>setIsOpenDelete(true)}
                  />
                          <DelBank show={isOpenDelete} onHide={() => setIsOpenDelete(false)} accounts={accounts[0]} handleChange={handleChange} />
                </div>
              </div>
            </li>
            {index < accounts.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </ul>
    </article>
  );
}
export default ProfileBankCard;
