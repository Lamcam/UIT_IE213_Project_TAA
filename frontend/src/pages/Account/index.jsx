import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.scss';
import { BsPersonFill } from 'react-icons/bs';
import { ImBoxAdd } from 'react-icons/im';
import { FaHeartCircleCheck } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import ProfileUser from './Info/ProfileUser';
import ProfileBankCard from './Info/ProfileBankCard';
import ProfileChangePassword from './Info/ProfileChangePassword';
import ProfileShippingAddress from './Info/ProfileShippingAddress';
import Orders from './Orders/Orders';
import Favor from './Favor/Favor';

const InfoModals = () => {
  const [selectedSection, setSelectedSection] = useState('profile-user');
  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };
  let contentToDisplay;

  switch (selectedSection) {
    case 'profile-user':
      contentToDisplay = <ProfileUser />
      break;
    case 'profile-bank-card':
      contentToDisplay = <ProfileBankCard />
      break;
    case 'profile-change-password':
      contentToDisplay = <ProfileChangePassword />
      break;
    case 'profile-shipping-address':
      contentToDisplay = <ProfileShippingAddress />
      break;
    case 'orders':
      contentToDisplay = <Orders />
      break;
    case 'favor':
      contentToDisplay = <Favor />
      break;
    default:
      contentToDisplay = "Lỗi!!!"
  }
  
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} lg={3}>
            <ul className="nav-tab visible">
              <li className={`nav-tab__item ${selectedSection === 'profile-user' || selectedSection === 'profile-bank-card' || selectedSection === 'profile-shipping-address' || selectedSection === 'profile-change-password' ?  'active-nav' : ''} is`} onClick={() => handleSectionChange("profile-user")}>
              <NavLink to="/account/profile-user" className="nav-link"><BsPersonFill />Thông tin tài khoản</NavLink>
              </li>
                <div className={`subnav-tab ${selectedSection === 'profile-user' || selectedSection === 'profile-bank-card' || selectedSection === 'profile-shipping-address' || selectedSection === 'profile-change-password' ? 'show-subnav' : ''}`}>
                  <li className={`subnav-tab__item ${selectedSection === 'profile-user' ? 'active-subnav' : ''}`} onClick={() => handleSectionChange("profile-user")}>
                  <NavLink to="/account/profile-user" className="subnav-link">Hồ sơ cá nhân</NavLink>
                  </li>
                  <li className={`subnav-tab__item ${selectedSection === 'profile-bank-card' ? 'active-subnav' : ''}`} onClick={() => handleSectionChange("profile-bank-card")}>
                  <NavLink to="/account/profile-bank-card" className="subnav-link">Tài khoản ngân hàng</NavLink>
                  </li>
                  <li className={`subnav-tab__item ${selectedSection === 'profile-shipping-address' ? 'active-subnav' : ''}`} onClick={() => handleSectionChange("profile-shipping-address")}>
                  <NavLink to="/account/profile-shipping-address" className="subnav-link">Địa chỉ nhận hàng</NavLink>
                  </li>
                  <li className={`subnav-tab__item ${selectedSection === 'profile-change-password' ? 'active-subnav' : ''}`} onClick={() => handleSectionChange("profile-change-password")}>
                  <NavLink to="/account/profile-change-password" className="subnav-link">Đổi mật khẩu</NavLink>
                    </li>
                  </div>
                  
              <li className={`nav-tab__item ${selectedSection === 'orders' ? 'active-nav' : ''}`} onClick={() => handleSectionChange("orders")}>
              <NavLink to="/account/orders" className="nav-link"> <ImBoxAdd />Đơn hàng</NavLink>
              </li>
              <li className={`nav-tab__item ${selectedSection === 'favor' ? 'active-nav' : ''}`} onClick={() => handleSectionChange("favor")}>
                <NavLink to="/account/favor" className="nav-link"><FaHeartCircleCheck />Sản phẩm yêu thích</NavLink>
                </li>
            </ul>
          </Col>
          <Col xs={12} lg={9}>
            {contentToDisplay}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default InfoModals;
