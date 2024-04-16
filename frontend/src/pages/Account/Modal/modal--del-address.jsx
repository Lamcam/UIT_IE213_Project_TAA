import React from 'react';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import ButtonIcon from 'components/Common/ButtonIcon';
import { GrAdd } from 'react-icons/gr';
import { MdDeleteOutline } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import Button1 from 'components/Common/Button1';
import { CgClose } from 'react-icons/cg';
function DelAddress(props) {
    return (
        <div id="modal--del-address" className={`profile-modal ${props.show ? 'active' : ''}`}>
                        <div className="modal__content--confirm">
                          <ButtonIcon
                            className="modal__btn--close"
                            label={<CgClose />}
                            border="none"
                            onClick={props.onHide}
                          />
                          <div className="profile-modal__title">
                            <h1 className="headline-large">Xóa địa chỉ nhận hàng</h1>
                            <h2 class="title-large">
                              Bạn có chắc chắn sẽ xóa địa chỉ nhận hàng này không?
                            </h2>
                            <p class="body-medium">Thao tác này không thể hoàn lại</p>
                          </div>
                          <form action="/account/profile-bank-card/del" method="POST">
                            <div class="btn__wrapper">
                              <Button1
                                type="button"
                                onClick={props.onHide}
                                label="Hủy bỏ"
                                className="col-6"
                              />
                              <Button1
                                type="submit"
                                label="Đồng ý"
                                className="col-6"
                                labelColor="#F1EFE7"
                                backgroundColor="#785B5B"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
    )
}
export default DelAddress