import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import TextField from '@mui/material/TextField';
import './style.css';

function Search() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="searchWrapper">
      <AiOutlineSearch id="wishListIcon" className="searchIcon" />
      <input placeholder="Search" className="searchInput" />
    </div>
  );
}

export default Search;
