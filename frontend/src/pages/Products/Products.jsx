import { useState } from 'react';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { BsCheck2 } from "react-icons/bs";
// import Button from 'components/Common/Button';
import ProductMenu from 'components/Products/ProductMenu';
import ProductItem from 'components/Products/ProductItem';
import '../../style/pages/Products/ProductStyle.scss';

export default function Products() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedButtons, setSelectedButtons] = useState([]); // Sử dụng một mảng để lưu trữ tất cả các nút được chọn

    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };

    const handleDropdownSelect = (eventKey, event) => {
        setSelectedOption(eventKey);
        setShowDropdown(false);
    };

    const handleButtonClick = (buttonName) => {
        const selectedIndex = selectedButtons.indexOf(buttonName);
        if (selectedIndex !== -1) {
            // Nếu nút đã được chọn trước đó được nhấn lại, hủy trạng thái đã chọn
            setSelectedButtons(selectedButtons.filter(name => name !== buttonName));
        } else {
            // Nếu nút mới được chọn, thêm vào mảng các nút được chọn
            setSelectedButtons([...selectedButtons, buttonName]);
        }
    };

    let dropdownTitle = "Giá";
    if (selectedOption === "1") {
        dropdownTitle = "Từ thấp đến cao";
    } else if (selectedOption === "2") {
        dropdownTitle = "Từ cao đến thấp";
    }

    return (
        <Container className="product">
            <Row>
                <Col className="product__filter">
                    <span>Sắp xếp theo: </span>
                    <Button className={`product__button discount  ${selectedButtons.includes('discount') ? 'active' : ''}`} onClick={() => handleButtonClick('discount')}>
                        {selectedButtons.includes('discount') && <BsCheck2 className='icon-check' />}
                        Giảm giá
                    </Button>

                    <Button className={`product__button best-seller    ${selectedButtons.includes('best-seller') ? 'active' : ''}`} onClick={() => handleButtonClick('best-seller')}>
                        {selectedButtons.includes('best-seller') && <BsCheck2 className='icon-check' />}
                        Bán chạy nhất
                    </Button>

                    <DropdownButton
                        title={dropdownTitle}
                        id="dropdown-menu-align-right"
                        show={showDropdown}
                        onSelect={handleDropdownSelect}
                        onToggle={handleDropdownToggle}
                    >
                        <Dropdown.Item eventKey="1">Từ thấp đến cao</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Từ cao đến thấp</Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>
            <Row>
                <Col lg={3}>
                    <ProductMenu />
                </Col>
                <Col lg={9}>
                    <ProductItem />
                </Col>
            </Row>
        </Container>
    );
}
