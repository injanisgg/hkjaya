import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { productSearch } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [inputSearch, setInputSearch] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(productSearch(inputSearch));
    navigate(`/search/${inputSearch}`);
  }

  return (
    <div className="">
      <form onSubmit={handleSearch} className="relative sm:w-32 lg:w-80 xl:w-64">
        <input
          type="text"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          className="form-input w-full bg-gray-100 rounded-full py-2 xl:pl-10 sm:pl-10 pr-4 text-gray-700 placeholder-gray-500 focus:outline-none sm:text-xs xl:text-base"
          placeholder="Cari produk"
        />
        <button type="submit" className="absolute xl:left-0 xl:top-0 xl:mt-2 xl:ml-4 sm:ml-3 sm:left-0 sm:top-0 sm:mt-1">
          <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
        </button>
      </form>
    </div>
  )
}

export default Search
