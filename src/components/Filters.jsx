import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterSubCategory, filterMerk, updateSelectedFilters } from '../redux/actions'

function Filters({title, content}) {
  const dispatch = useDispatch()
  const subCategories = useSelector(state => state.categories.subCategories)
  const merks = useSelector(state => state.categories.merks);
  const selectedFilters = useSelector(state => state.categories.selectedFilters) || { merkFilter: [], subCategory: [] };

const handleCheckbox = (item) => {
  const filterType = title === "Kategori" ? "subCategory" : "merkFilter";
  const normalizedItem = item.toLowerCase();
  dispatch(updateSelectedFilters(filterType, normalizedItem));
};

useEffect(() => {
  if (!content) {
      console.warn("Content is empty for filter:", title);
      return;
  }

  if (title === "Kategori") {
      dispatch(filterSubCategory(content));
  } else if (title === "Merk") {
      dispatch(filterMerk(content));
  }
}, [content, title, dispatch]);

const itemToDisplay = title === "Kategori" ? 
  (subCategories || []).sort() : 
  (merks || []).sort();

  return (
    <div className='relative xl:w-48 h-max py-10 bg-slate-100 rounded-xl'>
        <p className='text-primary-blue ml-5 font-bold'>{title}</p>
        {itemToDisplay.map((item, index) => {
            const filterKey = title === "Kategori" ? "subCategory" : "merkFilter";
            const normalizedItem = item.toLowerCase();
            const isSelected = selectedFilters[filterKey]?.includes(normalizedItem);

            return (
                <div key={index} className="flex items-center gap-3 ml-5 my-2">
                    <i
                        className={`${
                            isSelected
                                ? "fa-solid fa-square-check"
                                : "fa-regular fa-square"
                        } cursor-pointer`}
                        onClick={() => handleCheckbox(item)}
                    ></i>
                    <p className="text-primary-blue text-sm">{item}</p>
                </div>
            );
        })}
    </div>
);
}

export default Filters;