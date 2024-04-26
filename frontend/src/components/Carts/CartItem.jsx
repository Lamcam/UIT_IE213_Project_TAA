import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { RiDeleteBin6Line } from 'react-icons/ri';
import 'style/components/Carts/CartItem.scss';
import axios from 'axios';
import { useDeleteCartItem } from 'hooks/useDeleteCartIem';

CartItem.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      productName: PropTypes.string.isRequired,
      moneyCurrent: PropTypes.number.isRequired,
      moneyBeforeDiscount: PropTypes.number,
    }),
  ).isRequired,
  setMoneyAll: PropTypes.func.isRequired,
};

function CartItem(props, id) {
  const { deleteFromCart } = useDeleteCartItem();
  const [quantity, setQuantity] = useState({});
  const [checkedItems, setCheckedItems] = useState([]);
  const [allItemsChecked, setAllItemsChecked] = useState(false);
  const [checkedItemsInfo, setCheckedItemsInfo]=useState([])

  useEffect(() => {
    const initialCheckedItems = Array(props.cartItems.length).fill(false);
    setCheckedItems(initialCheckedItems);
  }, [props.cartItems.length]);

  useEffect(() => {
    const allChecked = checkedItems.every((item) => item);
    setAllItemsChecked(allChecked);
  }, [checkedItems]);

  useEffect(() => {
    calculateTotalPrice();
    const checkedItemsInfo = [];
  
      checkedItems.forEach((item, i) => {
        if (item === true) {
          // item.number = quantity[i] || 1; // Thêm thuộc tính number vào đối tượng item
          props.cartItems[i].number = quantity[i] || 1
          checkedItemsInfo.push(props.cartItems[i]); // Đưa đối tượng item vào mảng checkedItemsInfo
        }
      });
      setCheckedItemsInfo(checkedItemsInfo);
      props.onCheckedItemsChange(checkedItemsInfo)
  }, [checkedItems, quantity]);

  const handleCheckboxClick = (index) => {
    setCheckedItems((prevCheckedItems) => {
      const newCheckedItems = [...prevCheckedItems];
      newCheckedItems[index] = !newCheckedItems[index];
      return newCheckedItems;
    });
  };
  

  const handleAllCheckboxClick = () => {
    setAllItemsChecked((prevState) => !prevState);
    setCheckedItems((prevCheckedItems) => {
      const newCheckedItems = prevCheckedItems.map(() => !allItemsChecked);
      return newCheckedItems;
    });
  };

  const handleIncreaseQuantity = (index) => {
    setQuantity((prevQuantity) => {
      return {
        ...prevQuantity,
        [index]: (prevQuantity[index] || 0) + 1,
      };
    });
  };

  const handleDecreaseQuantity = (index) => {
    if (quantity[index] && quantity[index] > 1) {
      setQuantity((prevQuantity) => {
        return {
          ...prevQuantity,
          [index]: prevQuantity[index] - 1,
        };
      });
    }
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    props.cartItems.forEach((item, index) => {
      if (checkedItems[index]) {
        totalPrice += calculateSubtotal(index);
      }
    });
    props.setMoneyAll(totalPrice);
  };

  // Tính thành tiền của từng sản phẩm
  const calculateSubtotal = (index) => {
    return (quantity[index] || 1) * props.cartItems[index].moneyCurrent;
  };
  const formatPrice = (price) => {
    const priceNumber = parseFloat(price);
    let formattedPrice = priceNumber.toLocaleString('vi-VN', { maximumFractionDigits: 0 });
    return formattedPrice.trim();
  };

  // const getCheckedItem = () => {
  //   const checkedItemsInfo = [];
  
  //   props.cartItems.forEach((item, index) => {
  //     if (checkedItems[index]) {
  //       checkedItemsInfo.push(item);
  //     }
  //   });
  // setCheckedItemsInfo(checkedItemsInfo)
  // }
  // console.log(checkedItemsInfo)
  return (
    <Table borderless responsive="lg" className="table__cart__item">
      <thead className="cart__item__thead title-medium">
        <tr>
          <th>
            <div className="item__checkbox__all">
              {allItemsChecked ? (
                <ImCheckboxChecked onClick={handleAllCheckboxClick} />
              ) : (
                <ImCheckboxUnchecked onClick={handleAllCheckboxClick} />
              )}
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
              {checkedItems[index] ? (
                <ImCheckboxChecked onClick={() => handleCheckboxClick(index)} />
              ) : (
                <ImCheckboxUnchecked onClick={() => handleCheckboxClick(index)} />
              )}
            </td>
            <td>
              <div className="info__product">
                <img
                  className="img__product"
                  src={item.product.imageUrl}
                  alt={item.product.productName}
                />
                <span className="name__product">{item.product.productName}</span>
              </div>
            </td>
            <td>
              <div
                className={
                  item.product.moneyBeforeDiscount
                    ? 'item__money__product have__discount'
                    : 'item__money__product'
                }
              >
                <span className="money__current">{item.product.moneyCurrent} đ</span>
                {item.product.moneyBeforeDiscount && (
                  <span className="money__befor__discount primary-text">
                    {item.product.moneyBeforeDiscount} đ
                  </span>
                )}
              </div>
            </td>
            <td>
              <div className="item__number">
                <div
                  className="item__number__decrease"
                  onClick={() => handleDecreaseQuantity(index)}
                >
                  -
                </div>
                <input
                  id=""
                  type="number"
                  min="1"
                  max={10}
                  step="1"
                  value={quantity[index] || 1}
                  className="item__number__product"
                  readOnly
                />
                <div
                  className="item__number__increase"
                  onClick={() => handleIncreaseQuantity(index)}
                >
                  +
                </div>
              </div>
            </td>
            <td>
              <div className="item__total__money">
                {formatPrice(calculateSubtotal(index))} đ
              </div>
            </td>
            <td>
              <div className="item__delete__product">
                <RiDeleteBin6Line
                  className="icon__delete primary-text"
                  method="delete"
                  onClick={() => deleteFromCart(item?._doc?._id)}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default CartItem;
