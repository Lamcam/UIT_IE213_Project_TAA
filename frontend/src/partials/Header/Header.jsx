import React from "react"
import MainNav from "../MainNav/MainNav";
import Logo from 'components/Common/Logo.jsx' // error
import Button from "components/Common/Button";
import SearchBar from "components/HeaderComponents/SearchBar";
import "./Header.scss";
import { NavLink } from "react-router-dom";


// import Logo
function Header() {
    return (
        <header className="visible un-radius">
            <div className="header__top">
                <div className="container">
                    <a className="header__link" href="/">
                        <Logo />
                    </a>
                    <SearchBar></SearchBar>

                    <div className="header__wrapper">
                        <NavLink to="/log_in" className="btn_reg_log_round_8px btn_clickable_boldcolor">
                            Đăng nhập
                        </NavLink>
                        <NavLink to="/register" className="btn_reg_log_round_8px">
                            Đăng ký
                        </NavLink>
                        {/* <Button className="btn_reg_log_round_32px btn_clickable_boldcolor" label="Đăng nhập" type="button" />
                        <Button className="btn_reg_log_round_32px" label="Đăng ký" type="button" /> */}
                    </div>
                </div>
            </div>

            <MainNav />

        </header>
    )
}

export default Header;
