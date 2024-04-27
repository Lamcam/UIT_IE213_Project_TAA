import React from "react";
import { Container } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import { BsBack } from "react-icons/bs";

const styleTitle = {
    // Hỏi xoáy đáp xoay.
   // Hỏi xoáy đáp xoay.
    color: '#0D0C46',
    fontSize: '45px',
    fontFamily: 'Playfair Display',
    fontWeight: '600',
    lineHeight: '52px',
    wordWrap:' break-word',
}
const styleText = {
    // Nơi trả lời những câu hỏi của bạn ><
    color:'#454452',
    fontSize: '24px',
    fontFamily: 'Roboto',
    fontWeight: '400',
    lineHeight: '32px',
    wordWrap: 'break-word',
}


const styleList = {

    // Làm sao để có thể mua hàng trên TAA?
    color: '#454552',
    fontSize: '16px',
    fontFamily: 'Roboto',
    fontWeight: '500',
    lineHeight: '24px',
    letterSpacing: '0.15px',
    wordWrap: 'break-word',
    backgroundColor: 'rgba(13, 4, 0, 0)',
    border: 'none',
    borderBottom: '1px solid rgba(215, 193, 193, 0.61)',

}

function QuestionCard(param) {
    return(
    <Container className="qa_list">
        <h1 style={styleTitle}> Hỏi xoáy đáp xoay </h1>
        <h3 style={styleText} > Nơi trả lời những câu hỏi của bạn </h3>
        <ListGroup>
            <ListGroup.Item style={styleList}>Làm sao để có thể mua hàng trên TAA?</ListGroup.Item>
            <ListGroup.Item style={styleList}>Chính sách bảo hành của TAA như thế nào?</ListGroup.Item>
            <ListGroup.Item style={styleList}>Làm sao để đổi hàng trên TAA?</ListGroup.Item>
            <ListGroup.Item style={styleList}>Thông tin về TAA</ListGroup.Item>
        </ListGroup>
    </Container>
    );
  }

export default QuestionCard;