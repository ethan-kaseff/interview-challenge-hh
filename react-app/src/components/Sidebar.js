import React from 'react'

function Sidebar({colors}) {
  return (
    <div className='flex flex-col w-72 bg-[#d6d8d8] shadow-[6px_0_10px_-2px_#888]'>
      <button
        className='border-2 border-black rounded-xl p-2 pl-10 pr-10 self-center mt-12 bg-white'
      >Random Color</button>
      <div className='pt-8 pl-8'>
          {colors.map( (color, i) => (
            <p className='p-1' key={i}>{color}</p>
          ))}
      </div>
    </div>
  )
}

export default Sidebar