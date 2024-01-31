import clsx from 'clsx';
import React from 'react'
import { useSelector } from 'react-redux';

const VideoCard = ({data}) => {

    const {snippet,statistics} = data;
    const {channelTitle,title,thumbnails} = snippet;

    const showSearchSuggestions = useSelector(state => state.search.showSearchSuggestions)

  return (
    <div className={clsx('p-2 w-64 shadow-lg rounded-lg ',{'hover:scale-105 transition-all':!showSearchSuggestions})}>
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