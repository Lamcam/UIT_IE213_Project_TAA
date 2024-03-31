import React from "react";
import { Form, Button } from "react-bootstrap";
import './popUp.css';
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";

function ForgotPass() {
  return (
    <section className="get_email_popUp">
        <AiOutlineClose className="close_button"/>
        <AiOutlineLeft className="return_button"/>

        
        <h2>Quên mật khẩu</h2>
        <div>
            <Form className="get_email_form">
                <Form.Group className="mb-3 email_input" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Điền email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Button className='login_btn' type="submit" size='lg'>
                    Lấy mã
                </Button>
            </Form>
        </div>
    </section>
  );
}
export default ForgotPass;