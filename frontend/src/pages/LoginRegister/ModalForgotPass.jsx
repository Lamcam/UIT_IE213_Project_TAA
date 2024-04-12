import {Button, Modal } from 'react-bootstrap';
import React from 'react';
import './PopUp.scss';
import PhoneEmailVal from './PhoneEmailVal';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";


function MyVerticallyCenteredModal(props) {
  const [show, setShow] = React.useState(false);
  const [email, setEmail] = React.useState(false);
  const [modal,setModalShow] = React.useState({
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
  })


  function handleShow(){
    setShow(!show);
  }

  function handleClick(e){
    handleShow();

    if(e.target.textContent === 'Email'){
      setEmail(true);
    }
    else if (e.target.textContent === 'Số điện thoại'){
      setEmail(false);
    }
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      
      <Modal.Header closeButton className='modal_forgotPass_header'>

      <MdOutlineKeyboardArrowLeft 
        style={{display: show? 'block': 'none', width: '1.7em', height: '1.7em', cursor: 'pointer'}}
        onClick={handleShow} />
      </Modal.Header>
      
      <Modal.Body>
        <Modal.Title id="contained-modal-title-vcenter" className='modal_title'>
         Quên mật khẩu
        </Modal.Title>

        <div className='email_phone_button_wrapper'>
          <Button 
            onClick={handleClick}
            style={{display: show? 'none': 'block' }}
          >Email</Button>
          <Button 
            onClick={handleClick} 
            style={{display: show? 'none': 'block' }}
          >Số điện thoại</Button>
          <PhoneEmailVal show={show} email={email} />
        </div>
        

      </Modal.Body>

      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Đóng</Button> */}
      </Modal.Footer>
    </Modal>
  );
}

function ModelForgotPass() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button 
        className='forgotPass' 
        variant="link"
        onClick={() => setModalShow(true)}>
        Bạn quên mật khẩu?
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </>
  );
}
export default ModelForgotPass;
// render(<ModelForgotPass />);