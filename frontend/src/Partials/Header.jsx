import React from "react"
import MainNav from "./MainNav";
import Logo from "../Components/Logo";
import Button from "../Components/Button";
import SearchBar from "../Components/SearchBar";
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
        
                        {/* Nav comp */}
                        
                    </div>
            </div>
            
            <MainNav /> 
        </header>
    )
}

export default Header;
