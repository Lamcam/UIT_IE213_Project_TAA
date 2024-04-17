import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { RiDeleteBin6Line } from "react-icons/ri";
import "style/components/Carts/CartItem.scss";

CartItem.propTypes = {
    cartItems: PropTypes.arrayOf(
        PropTypes.shape({
            imageUrl: PropTypes.string.isRequired,
            productName: PropTypes.string.isRequired,
            moneyCurrent: PropTypes.number.isRequired,
            moneyBeforeDiscount: PropTypes.number,
        })
    ).isRequired,
};


function CartItem(props) {

    const [quantity, setQuantity] = useState({});
    const [checkedItems, setCheckedItems] = useState([]);
    const [allItemsChecked, setAllItemsChecked] = useState(false);

    useEffect(() => {
        const initialCheckedItems = Array(props.cartItems.length).fill(false);
        setCheckedItems(initialCheckedItems);
    }, [props.cartItems.length]);

    useEffect(() => {
        const allChecked = checkedItems.every(item => item);
        setAllItemsChecked(allChecked);
    }, [checkedItems]);

    const handleCheckboxClick = (index) => {
        setCheckedItems(prevCheckedItems => {
            const newCheckedItems = [...prevCheckedItems];
            newCheckedItems[index] = !newCheckedItems[index];
            return newCheckedItems;
        });
    };

    const handleAllCheckboxClick = () => {
        setAllItemsChecked(prevState => !prevState);
        setCheckedItems(prevCheckedItems => {
            const newCheckedItems = prevCheckedItems.map(() => !allItemsChecked);
            return newCheckedItems;
        });
    };

    const handleIncreaseQuantity = (index) => {
        setQuantity(prevQuantity => {
            return {
                ...prevQuantity,
                [index]: (prevQuantity[index] || 0) + 1
            };
        });
    };

    const handleDecreaseQuantity = (index) => {
        if (quantity[index] && quantity[index] > 1) {
            setQuantity(prevQuantity => {
                return {
                    ...prevQuantity,
                    [index]: prevQuantity[index] - 1
                };
            });
        }
    };

    return (
        <Table borderless responsive="lg" className='table__cart__item'>
            <thead className="cart__item__thead title-medium">
                <tr>
                    <th>
                        <div className="item__checkbox__all">
                            {allItemsChecked ? <ImCheckboxChecked onClick={handleAllCheckboxClick} /> : <ImCheckboxUnchecked onClick={handleAllCheckboxClick} />}
                        </div>
                    </th>
                    <th>Sản phẩm</th>
                    <th>Giá tiền</th>
                    <th>Số lượng</th>
                    <th>Thành tiền</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className="cart__item__tbody body-large">
                {props.cartItems.map((item, index) => (
                    <tr key={index} className={index === props.cartItems.length - 1 ? 'last__item' : ''}>
                        <td className="item__checkbox">
                            {checkedItems[index] ? <ImCheckboxChecked onClick={() => handleCheckboxClick(index)} /> : <ImCheckboxUnchecked onClick={() => handleCheckboxClick(index)} />}
                        </td>
                        <td>
                            <div className="info__product">
                                <img className="img__product" src={item.imageUrl} alt={item.productName} />
                                <span className="name__product">{item.productName}</span>
                            </div>

                        </td>
                        <td>
                            <div className={item.moneyBeforeDiscount ? "item__money__product have__discount" : "item__money__product"}>
                                <span className="money__current">{item.moneyCurrent} đ</span>
                                {item.moneyBeforeDiscount && <span className="money__befor__discount primary-text">{item.moneyBeforeDiscount} đ</span>}
                            </div>
                        </td>
                        <td>
                            <div className="item__number">
                                <div className="item__number__decrease" onClick={() => handleDecreaseQuantity(index)}>-</div>
                                <input id="" type="number" min="1" max={10} step="1" value={quantity[index] || 1} className="item__number__product" readOnly />
                                <div className="item__number__increase" onClick={() => handleIncreaseQuantity(index)}>+</div>
                            </div>
                        </td>
                        <td>
                            <div className="item__total__money">
                                {(quantity[index] || 1) * item.moneyCurrent} đ
                            </div>
                        </td>
                        <td>
                            <div className="item__delete__product">
                                <RiDeleteBin6Line className="icon__delete primary-text" />
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default CartItem;

