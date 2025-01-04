import React from 'react'

function Search() {
  return (
    <div className="">
      <form onSubmit="" className="relative lg:w-80 xl:w-64">
        <input
          type="text"
          value=""
          onChange=""
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
