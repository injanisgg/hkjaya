import React from 'react'

function Filters({title, content}) {
  return (
    <div className='relative w-48 h-max py-10 bg-slate-100 rounded-xl'>
      <p className='text-primary-blue ml-5 font-bold'>Kategori</p>
      <div className="flex items-center gap-3 ml-5 my-2">
        <i className="fa-regular fa-square"></i>
        <p className='text-primary-blue text-sm'>Joyko</p>
      </div>
      <div className="flex items-center gap-3 ml-5 my-2">
        <i className="fa-regular fa-square"></i>
        <p className='text-primary-blue text-sm'>Joyko</p>
      </div>
      <div className="flex items-center gap-3 ml-5 my-2">
        <i className="fa-regular fa-square"></i>
        <p className='text-primary-blue text-sm'>Joyko</p>
      </div>
    </div>
  )
}

export default Filters
