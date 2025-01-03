import React from 'react'

function ButtonBorder({btnText}) {
  return (
    <button className='border-solid border-2 border-gray-400 py-2 px-1 bg-white w-44 text-sm rounded-xl'>{btnText}</button>
  )
}

export default ButtonBorder;
