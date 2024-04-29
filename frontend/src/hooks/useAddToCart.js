import { useState } from "react";
import axios from "axios";

export function useAddToCart(prod, modal) {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const userID = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))[0]._id : null;
    
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
                // modal();
            }

        } catch (error) {
            console.log('error', error)
            setError(error);
        }

    };
    

    return { addToCart, loading, error };

}

