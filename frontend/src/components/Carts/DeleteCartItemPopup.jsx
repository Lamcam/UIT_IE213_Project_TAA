// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// function StaticExample() {
//   return (
//     <div className="modal show" style={{ display: 'block', position: 'initial' }}>
//       <Modal.Dialog>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal title</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           <p>Modal body text goes here.</p>
//         </Modal.Body>

//         <Modal.Footer>
//           <Button variant="secondary">Hủy bỏ</Button>
//           <Button variant="primary">Đồng ý</Button>
//         </Modal.Footer>
//       </Modal.Dialog>
//     </div>
//   );
// }

// export default StaticExample;

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function DeleteCartItemPopup({ showModal, onClose, onConfirmDelete }) {
  return (
    <Modal show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Xác nhận xóa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Bạn có chắc chắn muốn xóa?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Hủy bỏ
        </Button>
        <Button variant="primary" onClick={onConfirmDelete}>
          Đồng ý
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteCartItemPopup;
