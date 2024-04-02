import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';

function PopupQuickView(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Quick View
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Product Details</h4> */}
        <p>This is a placeholder for product details.</p>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.onClose}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}

export default PopupQuickView;
