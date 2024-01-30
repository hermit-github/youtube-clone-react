import React from 'react'

const SideBar = () => {
  return (
    <div className=' h-full shadow-lg px-2'>
    <div className="py-5">
      <p className='font-bold'>Subscriptions</p>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
    </div>
      
      <div className="py-5">
      <p className='font-bold'>Watch Later</p>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      </div>
      
    </div>
  )
}

export default SideBar