import React from "react";
import InforCard from "./InforCard";
import { Container, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function InfoSection(props) {
    return (
        <section className="infoSec">
        <h1 className="">Tại sao nên mua sắm trên TAA ?</h1>
        <Container className="d-flex justify-content-center gap-2" >
            <Col className="col-3">
                <InforCard title="20.000" text="Người dùng"></InforCard>
            </Col>

            <Col className="col-3">   
                <InforCard title="6.800" text="Đối tác"></InforCard>
            </Col> 

            <Col className="col-3" >   
                <InforCard title="30.000+" text="Sản phẩm"></InforCard>
            </Col>

            <Col className="col-3">   
                <InforCard title="24/7" text="Hỗ trợ tuyệt vời"></InforCard>
            </Col>
        </Container>
        </section>
    );

}
export default InfoSection;