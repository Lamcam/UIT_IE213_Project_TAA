import React from "react";
import QuestionCard from "./QuestionsCard";
import InforCard from "./InforCard";
import { Col, Container } from "react-bootstrap";

function QuestionSection(){
    return(
        <section>
            <Container className="d-flex justify-content-center gap-3">
                <Col className="col-6" >
                    <InforCard className='qaCard' title='Q & A' text='Question and Answear'></InforCard>
                </Col>

                <Col className="col-6">
                    <QuestionCard></QuestionCard>
                </Col>
            </Container>
        </section>
    );
}

export default QuestionSection;