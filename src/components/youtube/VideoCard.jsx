import React from 'react'

const VideoCard = ({data}) => {
    console.log(data);
    const {snippet,statistics} = data;
    const {channelTitle,title,thumbnails} = snippet;

  return (
    <div className='p-2 m-2 w-64 shadow-lg rounded-lg hover:scale-110 transition-all'>
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