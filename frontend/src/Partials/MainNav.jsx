import React from "react";
import NavLi from "./Navli";

const NavContent = ['Trang chủ','Sản phẩm','Tin tức', 'Về chúng tôi', 'Hướng dẫn']

const createNavLi = (NavLiContent) => {
    return <NavLi 
                text = {NavLiContent}
            />
}

function MainNav(props){

    return (
        <nav className="main-nav">
            <div className="container">
                <label for="main-nav__ctl" className="main-nav__ctl__label hide-lg">
                    <span className="icon material-symbols-outlined">menu</span>
                </label>
                <input type="checkbox" id="main-nav__ctl"></input>
                <ul className="visible label-large header hide-sm hide-md">
                    { NavContent.map(createNavLi) }
                    
                </ul>

            </div>
        </nav> 


    )

}
export default MainNav;

