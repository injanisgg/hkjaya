import React from 'react'

function ButtonBorder({btnText, linkTo, event}) {
  return (
    <a href={linkTo} target="_blank" rel="noopener noreferrer">
      <button className='border-solid border-2 border-gray-400 py-2 px-1 bg-white w-fit xl:w-44 text-sm rounded-xl' onClick={event}>{btnText}</button>
    </a>
  )
}

export default ButtonBorder;
