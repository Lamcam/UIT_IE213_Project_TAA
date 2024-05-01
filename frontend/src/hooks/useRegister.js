import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import axios from 'axios';

export function useRegister() {
  const { dispatch } = useAuthContext();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const register = async (user) => {
    try {
      const response = await axios.post('http://localhost:8000/api/auth/register', user);
      dispatch({ type: 'REGISTER', payload: response.data });
      if (response.status === 201) {
        dispatch({ type: 'REGISTER', payload: response.data });
        window.location.href = '/log_in';
        return response.data;
      } else if (response.status === 400) {
        setError(response.data);
      } else {
        setLoading(false);
        setError(response.data);
      }
    } catch (error) {
      setError(error.response.data);
    }
  };

  return { register, loading, error };
}
