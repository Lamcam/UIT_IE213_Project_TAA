import {Button, Modal, Form } from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import './PopUp.scss';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import axios from 'axios';
import { element } from 'prop-types';


function MyVerticallyCenteredModal(props) {
  const [index, setIndex] = React.useState(1);
  const [email, setEmail] = React.useState(false);
  const [modal,setModalShow] = React.useState({
    modal1: true,
    modal2: false,
    modal3: false,
    modal4: false,
  })

  useEffect(() => {
    handleMove(1);
  }, [props.reset]);

  function handleMove(i) {
    handleIndex(i);
    handleModal(i);
  }

  function handleIndex(i){
    setIndex(i);
  }

  function handleModal(index){
    if(index === 1) setModalShow({...modal, modal1: true, modal2:false, modal3:false, modal4: false });
    else if(index === 2) setModalShow({...modal, modal2: true, modal1:false, modal3:false, modal4: false });
    else if(index === 3) setModalShow({...modal, modal3: true, modal1:false, modal2:false, modal4: false });
    else if(index === 4) setModalShow({...modal, modal4: true, modal1:false, modal3:false, modal2: false });
  }

  function handleButtonEmailPhoneClick(type){
    if(type === 'Email'){
      setEmail(true);
    }
    else if (type === 'Phone'){
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
        style={{ width: '1.7em', height: '1.7em', cursor: 'pointer'}}
        onClick={handleMove.bind(this, index <=1 ? 1: index-1)}
      />

      </Modal.Header>
      
      <Modal.Body>
        <Modal.Title id="contained-modal-title-vcenter" className='modal_title'>
          {modal.modal1 || modal.modal2? 'Quên mật khẩu': ''}
          {modal.modal3? 'Nhập mã OTP': '' }
          {modal.modal4? 'Đổi mật khẩu': '' }
        </Modal.Title>

        <div className='email_phone_button_wrapper'>
          <Button 
            className='email_button'
            onClick={()=>{
              handleMove.bind(this, 2)();
              handleButtonEmailPhoneClick.bind(this)('Email');
            }}
            style={{display: modal.modal1? 'block': 'none'  }}
          >Email</Button>
          <Button 
            className='phone_button'
            onClick={()=>{
              handleMove.bind(this, 2)();
              handleButtonEmailPhoneClick.bind(this)('Phone')
            }}
            style={{display: modal.modal1? 'block': 'none' }}
          >Số điện thoại</Button>
          <PhoneEmailVal show={modal.modal2} email={email} three={handleMove.bind(this, 3)}  />
          <OtpGet className='confirm_otp' show={modal.modal3} four={handleMove.bind(this, 4)} />
          <ChangePass className='change_pass' show={modal.modal4}></ChangePass>
          
        </div>
        
      </Modal.Body>

      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Đóng</Button> */}
      </Modal.Footer>
    </Modal>
  );
}

function PhoneEmailVal(props) {

  const [value, setValue] = useState('');

  const inform = {
    email: 'Nhập email của bạn',
    phone: 'Nhập số điện thoại của bạn'
  }
  const handleInputChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmitEmailPhone = async (e) =>{
    e.preventDefault();
    if(props.email){
      await axios.post('http://localhost:8000/api/auth/findUser/email', {
      email: value
      })
      .then(res=>{
        if(res.status === 200){
          localStorage.removeItem('phone')
          localStorage.setItem('email', res.data)
          props.three()
        }

      })
      .catch(err => {
        alert('Không tìm thấy email trùng khớp')
        console.log(err, value);
    })
    }
    else{
      await axios.post('http://localhost:8000/api/auth/findUser/phone', {
      phone: value
      })
      .then(res=>{
        if(res.status === 200){
          localStorage.removeItem('email')
          localStorage.setItem('phone', res.data)
          props.three()
        }

      })
      .catch(err => {
        alert('Không tìm thấy số điện thoại trùng khớp')
        console.log(err, value);
    })

    }

  }

  return(
    <Form onSubmit={handleSubmitEmailPhone} className='get_otp' style={{display: props.show? 'flex': 'none' }} >
      <Form.Control onChange={handleInputChange} type="text" placeholder={props.email? inform.email : inform.phone } />

      <Button 
        className='btn_reg_log_round_8px btn_clickable_boldcolor'
        type='submit'
      >
      Lấy mã
      </Button>
    </Form>
  )
}


function ModelForgotPass() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button 
        className='forgotPass' 
        variant="link"
        onClick={() => {
          setModalShow(true)
        }}>

        Bạn quên mật khẩu?
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        reset={modalShow.toString()}
        onHide={() => setModalShow(false)}
      />

    </>
  );
}


function OtpGet(props) {
    
  const [otp, setOtp] = useState(new Array(6).fill(''));


  const handleOtpChange = (e, index) => {
      
      if (isNaN(e.target.value)) return false;
      setOtp([...otp.map((data, i) => (i === index ? e.target.value : data))]);
      
      if (e.target.nextSibling && e.target.value) {
          e.target.nextSibling.focus();
      }

  };

  const handleClick = () =>{
    const check =  otp.every(element => element === "1") 
    if ( check ) props.four();
    else {
      alert("mã OTP không khớp")
      return ; 
    }
    
  }

  const handleSubmit = (e) => {
      e.preventDefault();

  };

  return (
  <>
      <form onSubmit={handleSubmit} className={props.className} style={{display: props.show? 'flex' :'none' }} >
          <div className='input_containter'>
          {otp.map((data, index) => (
              <input
                  type="text"
                  name="otp"
                  maxLength="1"
                  key={index}
                  value={data}
                  onChange={(e) => handleOtpChange(e, index)}
              />
          ))}
          </div>
          <label>Bạn chưa nhận được mã ? <>Gửi lại </> </label>
          
          <Button 
          className='btn_reg_log_round_8px btn_clickable_boldcolor'
          onClick={handleClick}
          >Xác nhận</Button>
      </form>
      </>
  );
};

function ChangePass(props) { 
  const [input, setInput] = useState({password : "", confirmPass: ""});

  const handleInputChange = (e) => {
    if(e.target.name === 'pass')
    {
      setInput({...input,  password: e.target.value })
    }
    else if (e.target.name === 'confirm'){
      setInput({...input, confirmPass: e.target.value })
    }  
  }

  const handleSubmitChangePass = async (e) =>{
      e.preventDefault();
      if (input.password !== input.confirmPass ) {
        alert("Xác nhận mật khẩu không khớp")
        return
      }
      if( input.password.length <= 7 ){
        alert('Mật khẩu phải có ít nhất 8 ký tự')
        return
      }

      const email = localStorage.getItem("email")
      const phone = localStorage.getItem("email")
      if(!email && !phone){
        alert("some thing wrong")
      }
      else if(email) {
          axios.post('http://localhost:8000/api/auth/changePass/email', {email, password: input.password}
          ).then(res =>{
            if(res.status === 200) {
              alert("Cập nhật mật khẩu thành công")
              window.location.href = '/log_in'
            }
            else{
              console.log(res);
            }
          }).catch(err => { console.log(err)})
          
          
      }
      else if(phone) {
          axios.post('http://localhost:8000/api/auth/changePass/phone', {phone, password: input.password}
          ).then(res =>{
            if(res.status === 200) alert("Cập nhật mật khẩu thành công")
            else{
              console.log(res);
            }
          }).catch(err => { console.log(err)})
          
          
      }
}

  return (
          <Form onSubmit={handleSubmitChangePass} className={props.className} style={{display: props.show? 'flex' : 'none' }}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control name='pass' onChange={handleInputChange} type="password" new-password='true' placeholder="Nhập mật khẩu mới" row={2} />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control name='confirm' onChange={handleInputChange} type='password' new-password='true' placeholder="Xác nhận mật khẩu mới" rows={2} />
              </Form.Group>

              <Button type='submit' className='btn_reg_log_round_8px btn_clickable_boldcolor' >Xác nhận</Button>
          </Form>
  );
}
      
export default ModelForgotPass;