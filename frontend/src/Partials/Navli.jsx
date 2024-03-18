import React from "react";

function NavLi(props){
    return (
        <li className='main-nav__item'>
            <a className="main-nav__link" href="/"> 
            {props.text}
            </a> 
        </li>
    )
}

export default NavLi;