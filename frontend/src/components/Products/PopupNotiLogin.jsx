import React from 'react';
import Modal from 'react-bootstrap/Modal';
import 'style/components/Products/PopupNotiLogin.scss'
PopupNotiLogin.propTypes = {

};

function PopupNotiLogin(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='popup__noti noti__login'
        >
            <Modal.Header closeButton>

            </Modal.Header>
            <Modal.Body className="noti__login__body">
                <p className='title-medium primary-text'>
                    Bạn cần đăng nhập để thực hiện thêm sản phẩm yêu thích.
                </p>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    );
}

export default PopupNotiLogin;