import React from "react";
import { Container } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';

function QuestionCard(param) {
    return(
    <Container className="qa_list">
        <h1> Hỏi đáp xoay </h1>
        <h3> Nơi trả lời những câu hỏi của bạn </h3>
        <ListGroup>
            <ListGroup.Item>Làm sao để mua hàng trên TAA?</ListGroup.Item>
            <ListGroup.Item>Chính sách bảo hành của TAA như thế nào?</ListGroup.Item>
            <ListGroup.Item>Làm sao để đổi hàng trên TAA?</ListGroup.Item>
            <ListGroup.Item>Thông tin về TAA</ListGroup.Item>
        </ListGroup>
    </Container>
    );
  }

export default QuestionCard;