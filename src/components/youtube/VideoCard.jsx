import React from 'react'

const VideoCard = ({data}) => {
    const {snippet,statistics} = data;
    const {channelTitle,title,thumbnails} = snippet;

  return (
    <div className='p-2 w-64 shadow-lg rounded-lg hover:scale-105 transition-all'>
        <img src={thumbnails.medium.url} alt="thumbnail" className='rounded-lg' />
        <ul>
            <li>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount}</li>
        </ul>
    </div>
  )
}

export default VideoCard