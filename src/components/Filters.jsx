import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterSubCategory, filterMerk } from '../redux/actions'

function Filters({title, content}) {
  const dispatch = useDispatch()
  const subCategories = useSelector(state => state.categories.subCategories)
  const merks = useSelector(state => state.categories.merks)

  const [ isOn, setIsOn ] = useState(true)

  const handleCheckbox = () => {
    setIsOn((prev) => !prev)
  }

  useEffect(() => {
    if(title === "Kategori"){
      dispatch(filterSubCategory(content))
    } else if (title === "Merk") {
      dispatch(filterMerk(content))
    }
  }, [content, title, dispatch]);

  const itemToDisplay = title === "Kategori" ? subCategories || [] : merks || [];

  return (
    <div className='relative w-48 h-max py-10 bg-slate-100 rounded-xl'>
      <p className='text-primary-blue ml-5 font-bold'>{title}</p>
      {
        itemToDisplay.map((item, index) => (
          <div key={index} className="flex items-center gap-3 ml-5 my-2">
            <i className={`${isOn ? "fa-regular fa-square" : "fa-solid fa-square-check"} cursor-pointer`} onClick={handleCheckbox}></i>
            <p className='text-primary-blue text-sm'>{item}</p>
          </div>
        ))
      }
    </div>
  );
}

export default Filters;