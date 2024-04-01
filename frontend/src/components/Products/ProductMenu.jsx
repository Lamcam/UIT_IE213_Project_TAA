import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import { IoMenuSharp } from "react-icons/io5";
import '../../style/components/Products/productMenu.css';

function ProductMenu(props) {
    const [activeCategory, setActiveCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setActiveCategory(activeCategory === category ? null : category);
    };

    return (
        <Row lg={12} className="product__menu">
            <ul className="aside__list label-large primary-text visible">
                <li className="aside__item title_aside_item">
                    <span className="item__title">
                        <IoMenuSharp className='icon-menu' />
                        Danh mục sản phẩm
                    </span>
                </li>
                <li className="aside__item js-item">
                    <div className="aside__item__line"></div>
                    <span className={`aside__header ${activeCategory === 'trang_suc' ? 'active' : ''}`} onClick={() => handleCategoryClick('trang_suc')}>
                        Trang sức
                    </span>
                    <ul className={`aside__item__sub-menu ${activeCategory === 'trang_suc' ? 'active' : ''}`}>
                        <li className="category" data-category="vong_co"><span>Vòng cổ</span></li>
                        <li className="category" data-category="vong_tay"><span>Vòng tay</span></li>
                        <li className="category" data-category="hoa_tai"><span>Hoa tai</span></li>
                        <li className="category" data-category="nhan"><span>Nhẫn</span></li>
                    </ul>
                </li>
                <li className="aside__item js-item">
                    <span className={`aside__header ${activeCategory === 'phu_kien_toc' ? 'active' : ''}`} onClick={() => handleCategoryClick('phu_kien_toc')}>
                        Phụ kiện tóc
                    </span>
                    <ul className={`aside__item__sub-menu ${activeCategory === 'phu_kien_toc' ? 'active' : ''}`}>
                        <li className="category" data-category="kep"><span>Kẹp</span></li>
                        <li className="category" data-category="day_cot_toc"><span>Dây cột tóc</span></li>
                        <li className="category" data-category="cai_toc"><span>Cài tóc</span></li>
                        <li className="category" data-category="tram_cai"><span>Trâm cài</span></li>
                    </ul>
                </li>
                <li className="aside__item js-item">
                    <span className={`aside__header ${activeCategory === 'tui_vi' ? 'active' : ''}`} onClick={() => handleCategoryClick('tui_vi')}>
                        Túi ví
                    </span>
                    <ul className={`aside__item__sub-menu ${activeCategory === 'tui_vi' ? 'active' : ''}`}>
                        <li className="category" data-category="balo"><span>Balo</span></li>
                        <li className="category" data-category="tui_xach"><span>Túi</span></li>
                        <li className="category" data-category="vi"><span>Ví</span></li>
                    </ul>
                </li>
                <li className="aside__item js-item">
                    <span className={`aside__header ${activeCategory === 'khac' ? 'active' : ''}`} onClick={() => handleCategoryClick('khac')}>
                        Khác
                    </span>
                    <ul className={`aside__item__sub-menu ${activeCategory === 'khac' ? 'active' : ''}`}>
                        <li className="category" data-category="thiep"> <span>Thiệp</span></li>
                        <li className="category" data-category="op_lung"><span>Ốp lưng</span></li>
                        <li className="category" data-category="mat_kinh"><span>Mắt kính</span></li>
                        <li className="category" data-category="day_deo"><span>Dây đeo</span></li>
                        <li className="category" data-category="mu_non"><span>Mũ nón</span></li>
                        <li className="category" data-category="khau_trang"><span>Khẩu trang</span></li>
                    </ul>
                </li>
            </ul>
        </Row>
    );
}

export default ProductMenu;
