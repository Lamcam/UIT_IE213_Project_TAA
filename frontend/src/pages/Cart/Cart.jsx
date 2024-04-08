import CartBill from 'components/Carts/CartBill';
import CartItem from 'components/Carts/CartItem';
import { Col, Container, Row } from 'react-bootstrap';
import "style/pages/Cart/Cart.scss";

function Cart(props) {
    const temporaryAmount = 350000;
    const discountAmount = 50000;
    const totalAmount = temporaryAmount - discountAmount;

    // Danh sách các mục trong giỏ hàng
    const cartItems = [
        {
            imageUrl: "https://www.junie.vn/cdn/shop/files/vong-tay-amanda-14.jpg?v=1696476825",
            productName: "Vongf tay ddinhs ddas raats rta nhieu ne haha",
            moneyCurrent: 100000,
            moneyBeforeDiscount: 150000
        },
        {
            imageUrl: "https://www.junie.vn/cdn/shop/files/vong-tay-amanda-14.jpg?v=1696476825",
            productName: "Ten san pham 2",
            moneyCurrent: 120000,
            // moneyBeforeDiscount: 170000
        },
        // Thêm các mục khác nếu cần
    ];

    return (
        <Container className="cart">
            <Row className='cart__content'>
                <Col lg={9} md={12} className='cart__content__item'>
                    {/* Truyền danh sách các mục vào CartItem */}
                    <CartItem cartItems={cartItems} />
                </Col>
                <Col lg={3} md={12} className="cart__content__bill">
                    <CartBill
                        temporaryAmount={temporaryAmount}
                        discountAmount={discountAmount}
                        totalAmount={totalAmount}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Cart;
