import React from 'react';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import ButtonIcon from 'components/Common/ButtonIcon';
import Button1 from 'components/Common/Button1';
import { GrAdd } from 'react-icons/gr';
import { MdDeleteOutline } from 'react-icons/md';
import { CgClose } from 'react-icons/cg';
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

  // Hàm để mở modal Add
  const openModalAdd = () => {
    setIsOpenAdd(true);
  };

  // Hàm để đóng modal
  const closeModalAdd = () => {
    setIsOpenAdd(false);
  };

  // Hàm để mở modal Add
  const openModalDelete = () => {
    setIsOpenDelete(true);
  };

  // Hàm để đóng modal
  const closeModalDelete = () => {
    setIsOpenDelete(false);
  };
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
          onClick={openModalAdd}
        />
        {isOpenAdd && (
          <div id="modal--add-bank" className="profile-modal active">
            <div className="modal__content--form">
              <ButtonIcon
                className="modal__btn--close"
                label={<CgClose />}
                border="none"
                onClick={closeModalAdd}
              />
              <h1 className="profile-modal__title headline-small">Thêm thông tin ngân hàng</h1>
              <form action="/" method="POST">
                <div className="form__row">
                  <Row>
                    <label className="col-3 label-large" htmlFor="user_name">
                      Họ và tên:
                    </label>
                    <div className="col-9 input__wrapper">
                      <input
                        required
                        className="input__wrapper-child"
                        type="text"
                        id="user_name"
                        name="fullName"
                        value={accounts.fullName}
                      />
                    </div>
                  </Row>
                </div>
                <div className="form__row">
                  <Row>
                    <label className="col-3 label-large" htmlFor="cmnd">
                      CMND:
                    </label>
                    <div className="col-9 input__wrapper">
                      <input
                        required
                        className="input__wrapper-child"
                        type="text"
                        id="cmnd"
                        name="cmnd"
                        value={accounts.cmnd}
                        onChange={handleChange}
                      />
                    </div>
                  </Row>
                </div>
                <div className="form__row">
                  <Row>
                    <label className="col-3 label-large" htmlFor="bank_name">
                      Ngân hàng:
                    </label>

                    <div className="col-9 input__wrapper">
                      <input
                        required
                        className="input__wrapper-child"
                        type="text"
                        id="bank_name"
                        name="bankName"
                        value={accounts.bankName}
                        onChange={handleChange}
                      />
                    </div>
                  </Row>
                </div>
                <div className="form__row">
                  <Row>
                    <label className="col-3 label-large" htmlFor="account_number">
                      Số tài khoản:
                    </label>
                    <div className="col-9 input__wrapper">
                      <input
                        required
                        className="input__wrapper-child"
                        type="text"
                        id="account_number"
                        name="accountNumber"
                        value={accounts.accountNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </Row>
                </div>
                <div className="btn__wrapper">
                  <Button1 label="Hủy bỏ" type="button" className="col-6" onClick={closeModalAdd}/>
                  <Button1
                    label="Đồng ý"
                    type="submit"
                    className="col-6"
                    labelColor="#F1EFE7"
                    backgroundColor="#785B5B"
                    onClick={addNewAccount}
                  />
                </div>
              </form>
            </div>
          </div>
        )}
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
                    {account.isDefault && <span className="default-label">Mặc định</span>}
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
                    onClick={openModalDelete}
                  />
                  {isOpenDelete && (
                    <div id="modal--del-bank" className="profile-modal active">
                      <div className="modal__content--confirm on-primary">
                        <ButtonIcon
                          className="modal__btn--close"
                          label={<CgClose />}
                          border="none"
                          onClick={closeModalDelete}
                        />
                        <div className="profile-modal__title">
                          <h1 className="headline-large">Xóa thông tin ngân hàng</h1>
                          <h2 class="title-large">
                            Bạn có chắc chắn sẽ xóa thông tin ngân hàng không?
                          </h2>
                          <p class="body-medium">Thao tác này không thể hoàn lại</p>
                        </div>
                        <form>
                          <div class="btn__wrapper">
                            <Button1
                              type="button"
                              onClick={closeModalDelete}
                              label="Hủy bỏ"
                              className="col-6"
                            />
                            <Button1
                              type="submit"
                              onClick={closeModalDelete}
                              label="Đồng ý"
                              className="col-6"
                              labelColor="#F1EFE7"
                              backgroundColor="#785B5B"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  )}
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
