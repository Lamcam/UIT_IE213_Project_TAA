import { Container, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SaleCard from 'components/home_coponent/SaleCard';

function SaleSection(){
    return (
        <section>
        <h1>Các ưu đãi khi mua sắm tại TAA</h1>
        <Container className='saleSecCotainer'>
            <Col className='col-6'>
                <SaleCard 
                    title='Giảm giá cực sốc lên đến 25%'
                    treatTitle='Dành riêng cho gói hội viên của TAA'
                    treatDescription='TAA - nơi những ưu đãi tuyệt vời đang chờ đón!'
                    btnContent='Tìm hiểu ngay' ></SaleCard>
            </Col>

            <Col className='col-6'>
                <SaleCard  className='col-6'
                    title='Freeship cho mọi đơn hàng'
                    treatTitle='Mã giảm giá có hạn'
                    treatDescription='Mã giảm giá: FREESHIP25'
                    btnContent='Tìm hiểu ngay'></SaleCard>
            </Col>
        </Container> 
        </section>
    );
     
}
export default SaleSection;