import { useState } from "react";
import { useAuthContext } from "./useAuthContext.js";
import axios from "axios";

export function useLogIn() {
    const { dispatch } = useAuthContext();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const logIn = async ( {email, password} ) => {
        try {
            setLoading(true);
            setError(null);
            const res = await axios.post('http://localhost:8000/api/auth/login', {
                email : email,
                password: password
            })
            
            if (res.status === 200) {
                localStorage.setItem('user', JSON.stringify(res.data));
                dispatch({ type: "LOGIN", payload: res.data });
                setLoading(false);
                window.location.href = "/";
            }

            } catch (error) {
                setError(error);
            }
            
    };

    return { logIn, loading , error };
}


// const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
    //   const res = await axios.post('http://localhost:8000/api/auth/login', {
    //     email,
    //     password
    //   })
//         .then((res) => {
//           const user = res.data;
//           if (user) {
//             localStorage.setItem('user', JSON.stringify(user));
//           }
//           else {
//             alert('Sai tài khoản hoặc mật khẩu');
//           }
      
//         }).catch((error) => {
//           console.log(error);
//         });
//     }catch(error) {
//       console.log(error);
//     }
//   }