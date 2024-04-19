import React from "react";
import { useEffect } from "react";
import ButtonIcon from 'components/Common/ButtonIcon';
import { CgClose } from 'react-icons/cg';
function AddSuccess({ onClose }) {
      // Sử dụng useEffect để tự động đóng modal sau 5 giây
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Gọi hàm onClose để đóng modal
    }, 5000);

    // Xóa bộ đếm khi component unmount
    return () => clearTimeout(timer);
  }, [onClose]);
      return (
          <div id="modal--add-success" className="profile-modal active">
              <div className="modal__content--form">
                <ButtonIcon
                  className="modal__btn--close"
                  label={<CgClose />}
              border="none"
              type="button"
                  onClick={onClose}
                />
                <h1 className="profile-modal__title headline-small">Thêm thẻ ngân hàng thành công!</h1>
                <img src="" alt="" style={{width:"284px", height:"152px"}}/>
              </div>
            </div>
      )
  }
  export default AddSuccess