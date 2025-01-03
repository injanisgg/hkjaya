import React from 'react'
import ButtonBorder from './ButtonBorder'

function HeaderPicture({picture, alt, textTop, textBottom, CustomButton}) {
  return (
    <div className='z-0'>
        <div className='relative'>
            {/* header pict main */}
            <img src={picture} alt={alt} className='opacity-60' />
            {/* end header pict main */}

            {/* content */}
            <div className="flex flex-col text-4xl font-bold shadow-sm text-primary-blue text-center items-center gap-5 z-10 absolute inset-y-44 inset-x-10">
                <span>{textTop}</span>
                <span>{textBottom}</span>
                {CustomButton && <CustomButton/>}
            </div>
            {/* endcontent */}
        </div>
    </div>
  )
}

export default HeaderPicture
