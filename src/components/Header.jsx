import React from 'react'

const Header = () => {
  return (
    <header className='
      flex items-center justify-between gap-4 
     bg-blue-400 px-4 shadow-slate-950 shadow-custom-1
      p-3 rounded-3xl font-bold
    '>  <a href='/'>
          <h1 className='
            text-[20px] text-white font-mono
          '>
            Trans
            <span className='
              text-blue-950
            '>
              Lingo
            </span>
          </h1>
        </a>
        <a href='/' className='
          flex flex-row gap-2 
          items-center cursor-pointer
        '>
          <p className='
            text-[20px] text-white font-mono
          '>
            New
          </p>
          <i className="fa-solid fa-plus text-blue-950"></i>
        </a>
    </header>
  )
}

export default Header