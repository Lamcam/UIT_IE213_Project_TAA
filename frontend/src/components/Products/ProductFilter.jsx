import Button from 'components/Common/Button1';
import { useState } from 'react';
import { Col, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import { BsCheck2 } from 'react-icons/bs';
import 'style/components/Products/ProductFilter.scss';
ProductFilter.propTypes = {

};

function ProductFilter(props) {
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
            setSelectedButtons(selectedButtons.filter((name) => name !== buttonName));
        } else {
            // Nếu nút mới được chọn, thêm vào mảng các nút được chọn
            setSelectedButtons([...selectedButtons, buttonName]);
        }
    };

    let dropdownTitle = 'Giá';
    if (selectedOption === '1') {
        dropdownTitle = 'Từ thấp đến cao';
    } else if (selectedOption === '2') {
        dropdownTitle = 'Từ cao đến thấp';
    }
    return (
        <Row>
            <Col className="product__filter body-large on-surface-text">
                <span>Sắp xếp theo: </span>
                <Button
                    className="product__button"
                    label="Giảm giá"
                    onClick={() => handleButtonClick("Giảm giá")}
                    icon={selectedButtons.includes("Giảm giá") ? BsCheck2 : null}
                    iconHeight="24px"
                    iconWidth="24px"
                />
                <Button
                    className="product__button"
                    label="Bán chạy nhất"
                    onClick={() => handleButtonClick("Bán chạy nhất")}
                    icon={selectedButtons.includes("Bán chạy nhất") ? BsCheck2 : null}
                    iconHeight="24px"
                    iconWidth="24px"
                />
                <DropdownButton
                    title={dropdownTitle}
                    id="dropdown-menu-align-right"
                    show={showDropdown}
                    onSelect={handleDropdownSelect}
                    onToggle={handleDropdownToggle}
                    className="dropdown__product"
                >
                    <Dropdown.Item eventKey="1" >Từ thấp đến cao</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Từ cao đến thấp</Dropdown.Item>
                </DropdownButton>
            </Col>
        </Row>
    );
}

export default ProductFilter;