import React from 'react';
import axios from 'axios';
import ButtonIcon from 'components/Common/ButtonIcon';
import Button1 from 'components/Common/Button1';
import { CgClose } from 'react-icons/cg';
import "../../pages/Account/index.scss"
import { useNavigate } from 'react-router-dom';
function OrderSuccess() {
    const navigate = useNavigate();
    const handleClickHome = () => {
        navigate("/");
    };
    const handleClickOrders = () => {
        navigate("/account/orders");
    };
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
        onHide();
    }
  };
  const onHide = () => {
    navigate("/cart")
  }

    return (
        <div id="modal--del-address" className="profile-modal active" onClick={handleModalClick}>
                        <div className="modal__content--confirm">
                          <ButtonIcon
                            className="modal__btn--close"
                            label={<CgClose />}
                            border="none"
                            onClick={onHide}
                          />
                          <div className="profile-modal__title">
                            <h1 className="headline-large">Bạn đã đặt hàng thành công</h1>
                            <h2 class="title-large">
                              Chọn hành động kế tiếp
                            </h2>
                          </div>
                          <form>
                            <div class="btn__wrapper">
                              <Button1
                                type="button"
                                onClick={handleClickHome}
                                label="Về trang chủ"
                            className="col-6"
                              />
                              <Button1
                                type="button"
                                label="Xem các đơn hàng"
                                className="col-6"
                                labelColor="#F1EFE7"
                            backgroundColor="#785B5B"
                            onClick={handleClickOrders}
                              />
                            </div>
                          </form>
                        </div>
                      </div>
    )
}
export default OrderSuccess