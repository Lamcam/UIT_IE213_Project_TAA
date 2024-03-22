import React from 'react';
import { RiSearchLine } from 'react-icons/ri';


const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Tìm kiếm" />
            <RiSearchLine className="search-icon" />
        </div>
    );
};

export default SearchBar;