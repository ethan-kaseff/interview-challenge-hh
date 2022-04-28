import React from 'react'

function Swatch({hexCode, size, setCurrentColor}) {

  return (
    <div 
      className={`flex flex-col ${size} m-6 border-[.5px] border-white rounded-md shadow-[0px_0px_6px_1px_#888]`}
      onClick={() => setCurrentColor(hexCode) }
      id={hexCode}
    >
      <div 
        className='h-full rounded-md'
        style={{ backgroundColor: hexCode }}
      ></div>
      <div className='flex h-[25%] pl-[8%] items-center'>
        <p>{hexCode}</p>
      </div>
    </div>
  )
}

export default Swatch