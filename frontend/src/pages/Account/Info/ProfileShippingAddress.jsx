import React from 'react';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import ButtonIcon from 'components/Common/ButtonIcon';
import { GrAdd } from 'react-icons/gr';
import { MdDeleteOutline } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import Button1 from 'components/Common/Button1';
import { CgClose } from 'react-icons/cg';
import AddAddress from '../Modal/modal--add-address';
import DelAddress from '../Modal/modal--del-address';
import EditAddress from '../Modal/modal--edit-address';
import { FaLess } from 'react-icons/fa';
function ProfileShippingAddress() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      userName: 'Nguyễn Văn A',
      phoneNumber: '*******667',
      isDefault: true,
      generalAddress: 'Dia chi tong quan',
    },
    {
      id: 2,
      userName: 'Nguyễn Văn A',
      phoneNumber: '*******667',
      isDefault: false,
      generalAddress: 'Dia chi tong quan',
    },
    {
      id: 3,
      userName: 'Nguyễn Văn A',
      phoneNumber: '*******667',
      isDefault: false,
      generalAddress: 'Dia chi tong quan',
    },
  ]);
  const handleSetDefault = (address) => {
    setAddresses(
      addresses.map((add) => {
        if (add === address) {
          add.isDefault = true;
        } else {
          add.isDefault = false;
        }
        return add;
      }),
    );
  };

  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);
  const [isOpenConfirmPhone, setIsOpenConfirmPhone] = useState(false);
  const [isOpenAddSuccess, setIsOpenAddSuccess] = useState(false);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddresses((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    console.log(Object.keys(addresses))
  }
  return (
    <article id="profile-shipping-addres" className="section__content visible">
      <div className="section__title">
        <h2 className="headline-small">Địa chỉ nhận hàng</h2>
        <ButtonIcon
          className="section__btn"
          border="none"
          label={<GrAdd />}
          type="button"
          onClick={()=>setIsOpenAdd(true)}
        />
        <AddAddress show={isOpenAdd} onHide={() => setIsOpenAdd(false)} handleChange={handleChange} addresses={addresses} />
      </div>
      <hr className="hr-title" />

      <ul className="shipping-list">
        {addresses.map((add, index) => (
          <React.Fragment key={add.id}>
            <li>
              <div className="shipping-item__wrapper">
                <div className="shipping-info">
                  <div className="shipping-number-default">
                    <p className="title-medium">{add.userName}</p>
                    <hr style={{ borderWidth: '24px', width: '1px', margin: '0' }} />
                    <p className='body-medium'>SĐT:   {add.phoneNumber}</p>
                    {add.isDefault && <span className="default-label label-large">Mặc định</span>}
                  </div>
                  <p className="bank-name body-medium">{add.generalAddress}</p>
                </div>

                <div className="shipping-btn">
                  <div className="edit-delete-btn">
                    <ButtonIcon
                      className="bank-item__btn--del"
                      label={<MdDeleteOutline style={{ color: '#785B5B' }} />}
                      type="button"
                      border="none"
                      backgroundColor="#F2E5E4"
                      onClick={()=>setIsOpenDelete(true)}
                    />
                    <DelAddress show={ isOpenDelete} onHide={()=>setIsOpenDelete(false)} />
                    <ButtonIcon
                      className="shipping-btn--edit"
                      label={
                        <>
                          <MdEdit style={{ color: '#785B5B'}} />
                          <span style={{ color: '#785B5B' }}> Sửa</span>
                        </>
                      }
                      type="button"
                      width="91px"
                      height="40px"
                      backgroundColor="transparent"
                      onClick={()=>setIsOpenEdit(true)}
                    />
                    <EditAddress show={isOpenEdit} onHide={() => setIsOpenEdit(false)} handleChange={handleChange} addresses={addresses[0]} />
                  </div>
                  <Button1
                    backgroundColor={add.isDefault ? '#1D1B201F' : '#785B5B'}
                    labelColor={add.isDefault ? 'rgba(32, 26, 26, 0.38)' : '#F1EFE7'}
                    border="none"
                    className="set-default-btn label-large"
                    label="Thiết lập mặc định"
                    type="submit"
                    onClick={() => handleSetDefault(add)}
                  />
                </div>
              </div>
            </li>
            {index < addresses.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </ul>
    </article>
  );
}
export default ProfileShippingAddress;
