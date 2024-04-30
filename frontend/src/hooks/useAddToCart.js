import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "./useAuthContext";

export function useAddToCart(prod, modal) {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const userID = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))[0]._id : null;
    const { cartQuantity, setCartQuantity } = useAuthContext();

    const addToCart = async (prod, quantity) => {
        try {
            setLoading(true);
            setError(null);
            const res = await axios.post('http://localhost:8000/cart/add', {
                product_id: prod._id,
                user_id: userID,
                quantity: quantity,

            })

            if (res.status === 200) {
                setLoading(false);
                // alert('Thêm vào giỏ hàng thành công');
                console.log('Thêm vào giỏ hàng thành công');
                // getCartQuantity();
                // modal();
            }

        } catch (error) {
            console.log('error', error)
            setError(error);
        }

    };
    

    return { addToCart, loading, error };

}

