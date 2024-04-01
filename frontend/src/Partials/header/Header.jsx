import React from "react"
import MainNav from "../MainNav/MainNav";
import Logo from '@components/Common/Logo.jsx' // error
import Button from "@components/Common/Button";
import SearchBar from "@components/HeaderComponents/SearchBar";
import "./header.css";


// import Logo
function Header() {
    return(
        <header className="visible un-radius">
            <div className="header__top">
                <div className="container">
                    <a className="header__link" href="/">
                        <Logo />
                    </a>
                        {/* Form comp */}
                    <SearchBar></SearchBar>

                    <div className="header__wrapper">
                        <Button className="btn--filled header__btn" label="Log in" type="button" />
                        <Button className="btn--filled header__btn" label="Register"  type="button" />
                    </div>
                </div>
            </div>
            
            <MainNav /> 
            
        </header>
    )
}

export default Header;
