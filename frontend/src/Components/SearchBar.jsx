import React, { useState } from 'react';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        // Perform search logic here
    };

    return (
        <form >
        <span className='header__search search-bar'>
        <input
                className='label-large'
                type="text"
                placeholder="Tìm kiếm..."
                value={searchTerm}
                onChange={handleSearch}
            />
        <button className='btn-icon btn--filled'> 
            <span className='status-layer icon icon--filled material-symbols-outlined' >
                search
            </span>
        </button>
        </span>
        </form>
       
    );
};

export default SearchBar;