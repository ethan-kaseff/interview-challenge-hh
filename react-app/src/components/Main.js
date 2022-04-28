import React from 'react'

function Main({children}) {
  return (
    <div className='flex min-h-screen'>
      {children}
    </div>
  )
}

export default Main