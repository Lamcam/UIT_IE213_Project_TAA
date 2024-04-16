import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const useSignUp = () => {
    const { dispatch } = useAuthContext();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const register = async (user) => {
        try {
            const response = await axios.post("http://localhost:8000/api/auth/register", user);
            dispatch({ type: "REGISTER", payload: response.data });

            if(response.status === 200) {
                localStorage.setItem("user", JSON.stringify(response.data));
            
                return response.data;
            }
            else {
                setLoading(false);
                setError(response.data);
            }

        } catch (error) {
            setError(error.response.data);
        }
    };

    return { register, error };

}