import React from "react";
import { useSearchParams } from "react-router-dom";

const WatchVideo = () => {
  const [params] = useSearchParams();
  const videoId = params.get("v");

  return (
    <div className="p-2">
      <iframe
        width="1050"
        height="590"
        src={"https://www.youtube.com/embed/"+videoId}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullscreen
      ></iframe>
    </div>
  );
};

export default WatchVideo;
