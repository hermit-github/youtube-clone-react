import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_LIST_API } from '../../utils/constants'
import VideoCard from './VideoCard'

const Videos = () => {

  const [videos,setVideos] = useState([])

  useEffect(() => {
    fetchVideos()
  },[])

  const fetchVideos = async() => {
    const response = await fetch(YOUTUBE_VIDEO_LIST_API)
                            .then(res => res.json());

    setVideos(response.items);
  }

  return (
    <div className="p-2 flex gap-2 flex-wrap">
      {videos.length > 0 && videos.map(vid => {
        return <VideoCard key={vid.id} data={vid}/>
      })}
      {/* {videos.length > 0 && 
      <VideoCard data={videos[0]}/>} */}
    </div>
  )
}

export default Videos