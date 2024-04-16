import React, { useEffect } from "react"
import MainNav from "../MainNav/MainNav";
import Logo from 'components/Common/Logo.jsx' // error
import SearchBar from "components/HeaderComponents/SearchBar";
import "./Header.scss";
import AuthPart from "components/HeaderComponents/AuthPart";
import UnAuthPart from "components/HeaderComponents/UnAuthPart";

function Header() {
   const Auth = localStorage.getItem('user');
   
   useEffect(() => {
        checkAuth();
   }, [Auth]);

   function checkAuth() {
        if (Auth) {
            
            return <AuthPart />
        }
        return <UnAuthPart />
    }

    return (
        <header className="visible un-radius">
            <div className="header__top">
                <div className="container">
                    <a className="header__link" href="/">
                        <Logo />
                    </a>
                    <SearchBar></SearchBar>

                    <div className="header__wrapper">
                        
                        {checkAuth()}

                    </div>
                </div>
            </div>

            <MainNav />

        </header>
    )
}

export default Header;
