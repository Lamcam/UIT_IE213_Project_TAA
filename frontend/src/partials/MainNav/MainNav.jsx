import React from "react";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import './mainNav.scss';


const navLiStyle = {
    display: 'flex-inline',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '8rem',
    maxWidth: '10rem',
    width: '100%',  
    minHeight: '48px'
}

function MainNav(props){

    return (

        <Navbar className="main_nav" >
        <Container fluid='lg'>
            <Nav className="my-nav">
                <NavLink className='nav-link' style={navLiStyle} to="/">Trang chủ</NavLink>
                <NavLink className='nav-link' style={navLiStyle} to="products">Sản phẩm</NavLink>
                <NavLink className='nav-link' style={navLiStyle} to="news">Tin tức</NavLink>
                <NavLink className='nav-link' style={navLiStyle} to="about_us">Về chúng tôi</NavLink>
                <NavDropdown title='Hướng dẫn' className="nav-link" style={navLiStyle} fluid >
                    <NavDropdown.Item href="guideline">Hướng dẫn mua hàng</NavDropdown.Item>
                    <NavDropdown.Item href="policy">Chính sách</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Container>
        </Navbar>

    )
}
export default MainNav;