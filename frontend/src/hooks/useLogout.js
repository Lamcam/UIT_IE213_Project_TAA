import { useAuthContext } from "./useAuthContext";

export const useLogout = () => { 
    const { dispatch } = useAuthContext();
    
    const logout = () => {
        
        
        dispatch({ type: "LOGOUT" });
        window.location.href = "/";
        setTimeout(() => {
            localStorage.removeItem("user");
        }, 100);
        
        
    }

    return { logout };
}