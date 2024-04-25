import React from "react";
import QuestionCard from "./QuestionsCard";
import InforCard from "./InforCard";
import { Col, Container } from "react-bootstrap";

function QuestionSection(){
    return(
        <section>
            <Container className="d-flex justify-content-around gap-7">
                <Col className="col-5" >
                    <InforCard className='qaCard' title='Q&A' text='Question and Answear'></InforCard>
                </Col>

                <Col className="col-5">
                    <QuestionCard></QuestionCard>
                </Col>
            </Container>
        </section>
    );
}

export default QuestionSection;