import React from "react";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import '/partials/footer.module.scss'
import 'styles/components/mainNav.css'
import { NavLink } from "react-router-dom";

const navLiStyle = {
    display: 'flex-block',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '10rem',
    minHeight: '4rem',

    ':hover': {
       backgroundColor: 'red',
      },
    
}

function MainNav(props){

    return (

        <Navbar>
        <Container>
            <Nav className="my-nav">
                <NavLink className='nav-link' style={navLiStyle} to="/">Trang chủ</NavLink>
                <NavLink className='nav-link' style={navLiStyle} to="products">Sản phẩm</NavLink>
                <NavLink className='nav-link' style={navLiStyle} to="news">Tin tức</NavLink>
                <NavLink className='nav-link' style={navLiStyle} to="about_us">Về chúng tôi</NavLink>
            </Nav>
        </Container>
        </Navbar>

    )
}
export default MainNav;


