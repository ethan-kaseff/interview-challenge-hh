import React from 'react'
import Swatch from './Swatch'

function AllColors({colors}) {
  return (
    <div className='p-8'>
      <div className='flex flex-wrap'>
        {colors.map( (color, i) => (
          <Swatch hexCode={color} key={i}/>
        ))}
      </div>
      <div className='flex justify-center'>
        pagination
      </div>
    </div>
  )
}

export default AllColors