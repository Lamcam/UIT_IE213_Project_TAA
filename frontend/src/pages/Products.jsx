import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export default function Products() {
    return (
        <Container>
            <Row>
                <Col><p>Sắp xếp theo: </p></Col>
                <p className="product__title label-large on-surface-text">Sắp xếp theo</p>
                <Button className={`btn-icon-label product__button js-button btn--outlined discount `}>
                    <span className="label">Giảm giá</span>
                </Button>

                <Button className={`product__button js-button btn--outlined best-seller `}>
                    Bán chạy nhất
                </Button>

            </Row>
            <Row>
                <Col lg={3}>danh muc</Col>
                <Col lg={9}>san pham</Col>
            </Row>
        </Container>
    );
}