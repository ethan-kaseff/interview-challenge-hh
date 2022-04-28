import React, { useState } from 'react'
import Swatch from './Swatch'

function AllColors({colors, setCurrentColor}) {
  let pages = [];
  let pageNumbers = [];
  const [currentPage, setCurrentPage] = useState(1);
  let colorsTemp = [...colors];

  while (colorsTemp.length > 0) {
    const page = colorsTemp.splice(0, 12);
    pages.push(page);
    pageNumbers.push(pageNumbers.length + 1)
  }

  const paginateButton = (e) => {
    setCurrentPage(e.target.id);
  }

  return (
    <div className='p-8 flex flex-col items-center h-full justify-between'>
      <div className='flex flex-wrap justify-center max-w-5xl'>
        {pages[currentPage-1].map( (color, i) => (
          <Swatch hexCode={color} key={i} size='w-48 h-52' setCurrentColor={setCurrentColor} 
          />
        ))}
      </div>
      <div className='flex justify-center mb-20'>
        {pageNumbers.map(page => (
          <button
            onClick={paginateButton}
            href=''
            id={page}
            className='hover:border-b-2 border-gray-200 p-2'
            key={page}
          >{page}</button>
        ))}
      </div>
    </div>
  )
}

export default AllColors