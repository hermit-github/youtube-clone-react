import React from 'react'

const Header = () => {
  return (
    <div className='px-4 py-1 flex justify-between items-center shadow-lg'>
      <div className="flex gap-2">
        <img src="/icons/hamburger.svg" alt="menu" width="40px"/>
        <img src="/icons/youtube.svg" alt="youtube-logo" width="50px"/>
      </div>
      <div className= "w-[40%] px-2 py-2 flex gap-2 border rounded-full">
        <input type="text"  className='w-[90%] text-black/60 text-lg focus:outline-none'/>
        <button className=' w-[10%]  flex justify-center items-center'>
          <img src="/icons/search.svg" alt="search-icon" width="30px" />
        </button>
      </div>
      <div>
        <img src="/icons/user.svg" alt="user-icon" width="50px" />
      </div>

    </div>
  )
}

export default Header