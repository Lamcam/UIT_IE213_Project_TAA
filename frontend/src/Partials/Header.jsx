import React from "react"
import MainNav from "./MainNav";
import Logo from "../components/Logo";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import "../styles/partials/updateHeader.css";

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
