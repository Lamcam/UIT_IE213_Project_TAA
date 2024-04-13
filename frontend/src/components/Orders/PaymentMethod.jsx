import React, { useState } from "react";
import { MdOutlineRadioButtonChecked, MdOutlineRadioButtonUnchecked } from "react-icons/md";
import "style/components/Orders/PaymentMethod.scss";

function PaymentMethod(props) {
    const [selectedOption, setSelectedOption] = useState(null);

    // Hàm xử lý sự kiện khi click vào một nút
    const handleClick = (index) => {
        // Nếu nút đã được chọn, không làm gì cả
        if (index === selectedOption) {
            return;
        }
        // Nếu không, cập nhật trạng thái của nút mới được chọn
        setSelectedOption(index);
        props.onPaymentMethodChange(index === 0 || index === 1);
    };

    return (
        <div className="payment__method">
            <div className="payment__method__title title-large">3. Phương thức thanh toán</div>
            <div className="payment__method__one body-medium" onClick={() => handleClick(0)}>
                {selectedOption === 0 ? <MdOutlineRadioButtonChecked className="icon__radio" /> : <MdOutlineRadioButtonUnchecked className="icon__radio" />}
                <span>Thanh toán tiền khi nhận hàng (COD)</span>
            </div>
            <div className="payment__method__two body-medium" onClick={() => handleClick(1)}>
                {selectedOption === 1 ? <MdOutlineRadioButtonChecked className="icon__radio" /> : <MdOutlineRadioButtonUnchecked className="icon__radio" />}
                <span>Thanh toán trực tuyến qua ngân hàng</span>
            </div>
        </div>
    );
}

export default PaymentMethod;
