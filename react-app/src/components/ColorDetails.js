import React from 'react';
import Swatch from './Swatch';


function ColorDetails({hexCode, setCurrentColor}) {
  return (
    <div className='w-full h-full flex flex-col items-center pt-12'>
      <Swatch hexCode={hexCode} size='w-4/6 h-4/6' />
      <button
        className='text-2xl'
        onClick={() => setCurrentColor('')}
      >Cancel</button>
    </div>
  )
}

export default ColorDetails