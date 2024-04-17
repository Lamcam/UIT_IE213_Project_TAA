import React from "react"
import { NavLink } from "react-router-dom"
import "./UnAuthPart.scss"

function UnAuthPart() {
    return(
        <>
            <NavLink to="/log_in" className="login_btn btn_reg_log_round_8px btn_clickable_boldcolor">
                Đăng nhập
            </NavLink>
            <NavLink to="/register" className="register_btn btn_reg_log_round_8px">
                Đăng ký
            </NavLink>
        </>
    )
}

export default UnAuthPart;

