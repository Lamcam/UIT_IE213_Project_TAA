import React from "react"
import { NavLink } from "react-router-dom"

function UnAuthPart() {
    return(
        <>
            <NavLink to="/log_in" className="btn_reg_log_round_8px btn_clickable_boldcolor">
                Đăng nhập
            </NavLink>
            <NavLink to="/register" className="btn_reg_log_round_8px">
                Đăng ký
            </NavLink>
        </>
    )
}

export default UnAuthPart;

