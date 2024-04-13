import React from 'react';
// import { RiSearchLine } from 'react-icons/ri';
// import { IoSearchCircleSharp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Tìm kiếm" />
            <FiSearch stroke='white' className="search-icon" />
        </div>
    );
};

export default SearchBar;