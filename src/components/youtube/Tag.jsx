import React from 'react'

const Tag = ({name}) => {
  return (
    <button className='py-2 px-5 m-1 bg-gray-200 rounded-lg shadow-md'>{name}</button>
  )
}

export default Tag