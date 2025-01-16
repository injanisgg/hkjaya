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
      <form onSubmit={handleSearch} className="relative lg:w-80 xl:w-64">
        <input
          type="text"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          className="form-input w-full bg-gray-100 rounded-full py-2 pl-10 pr-4 text-gray-700 placeholder-gray-500 focus:outline-none text-md"
          placeholder="Cari produk"
        />
        <button type="submit" className="absolute left-0 top-0 mt-2 ml-4">
          <i className="fa fa-search text-gray-500"></i>
        </button>
      </form>
    </div>
  )
}

export default Search
