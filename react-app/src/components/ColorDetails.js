import React from 'react';
import Swatch from './Swatch';


function ColorDetails({hexCode, setCurrentColor}) {
  return (
    <div className='w-full h-full flex flex-col items-center pt-12 justify-between'>
      <Swatch hexCode={hexCode} size='w-5/6 h-4/6 text-3xl' />
      <button
        className='text-2xl font-semibold mb-32 p-2 pr-12 pl-12 border-[1px] border-gray-600 rounded-md'
        onClick={() => setCurrentColor('')}
      >Cancel</button>
    </div>
  )
}

export default ColorDetails