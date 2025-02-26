import React from 'react'

function HeaderPicture({picture, alt, textTop, textBottom, CustomButton}) {
  return (
    <div className='w-full'>
        <div className='relative h-60'>
            {/* header pict main */}
            <img 
                src={picture} 
                alt={alt} 
                className='absolute inset-0 w-full h-full object-cover opacity-60 z-0' 
            />
            {/* end header pict main */}

            {/* content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-2xl font-bold text-primary-blue gap-5 z-10">
                <span>{textTop}</span>
                <span>{textBottom}</span>
                {CustomButton && <CustomButton/>}
            </div>
            {/* endcontent */}
        </div>
    </div>
  )
}

export default HeaderPicture;