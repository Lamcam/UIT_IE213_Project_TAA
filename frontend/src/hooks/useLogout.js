import { useAuthContext } from "./useAuthContext";

export const useLogout = () => { 
    const { dispatch } = useAuthContext();
    
    const logout = () => {
        
        dispatch({ type: "LOGOUT" });
        
        // setTimeout(() => {
            
        // }, 50);
        window.location.href = "/";
        localStorage.removeItem("user");
        
        
    }

    return { logout };
}