import React from 'react';
import logo from '../media/logo-symbol.svg';

function Nav() {
  return (
    <div className='flex justify-between bg-[#363c3c] p-4 pr-12'>
      <img 
        src={logo} 
        alt='logo'
        classname=''
      ></img>
      <input 
        type='text'
        placeholder='Search'
        className='p-4 rounded-xl'
      />
    </div>
  )
}

export default Nav