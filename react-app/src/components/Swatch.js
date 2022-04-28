import React from 'react'

function Swatch({hexCode, bg}) {
  // console.log(hexCode)

  return (
    <div className='flex flex-col w-36 h-48'>
      <div 
        className='h-5/6'
        style={{ backgroundColor: hexCode }}
      ></div>
      <div className='h-1/6'>{hexCode}</div>
    </div>
  )
}

export default Swatch