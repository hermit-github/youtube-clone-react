import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_LIST_API } from "../../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEO_LIST_API).then((res) =>
      res.json()
    );

    setVideos(response.items);
  };

  return (
    <div className="w-full p-2 flex gap-2 flex-wrap">
      {videos.length > 0 &&
        videos.map((vid) => {
          return (
            <Link to={`/watch?v=${vid.id}`} key={vid.id}>
              <VideoCard  data={vid} />
            </Link>
          );
        })}
    </div>
  );
};

export default Videos;
