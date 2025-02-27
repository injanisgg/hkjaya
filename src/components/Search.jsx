import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { productSearch } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

function Search({ className }) {
  const [inputSearch, setInputSearch] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(productSearch(inputSearch));
    navigate(`/search/${inputSearch}`);
  }

  return (
    <div className={className}>
      <form onSubmit={handleSearch} className="relative w-full bg-gray-100 rounded-full py-2">
        <input
          type="text"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          className="form-input text-gray-700 w-full bg-transparent ml-10 border-none outline-none focus:ring-0"
          placeholder="Cari produk"
        />
        <button type="submit" className="absolute left-3 bottom-2">
          <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
        </button>
      </form>
    </div>
  )
}

export default Search
