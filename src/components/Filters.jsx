import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { subCategory } from '../redux/actions'

function Filters({title, content}) {

  const dispatch = useDispatch()
  const subCategories = useSelector(state => state.subCategories)

  useEffect(() => {
    dispatch(subCategory(content))
  }, content)

  return (
    <div className='relative w-48 h-max py-10 bg-slate-100 rounded-xl'>
      <p className='text-primary-blue ml-5 font-bold'>{title}</p>
      {
        subCategories.map((item, index) => (
          <div key={index} className="flex items-center gap-3 ml-5 my-2">
            <i className="fa-regular fa-square"></i>
            <p className='text-primary-blue text-sm'>{item.subcategory}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Filters
