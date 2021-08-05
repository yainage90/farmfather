import React from "react";

import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

const VideoPlay = () => {
  const { videoId } = useParams();

  const videoUrl = `youtube.com/watch?v=${videoId}`;

  return (
    <div style={container}>
      <ReactPlayer url={videoUrl} playing controls />
    </div>
  );
};

const container = {
  display: "flex",
  width: "80%",
  height: "80%",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20%",
};

export default VideoPlay;
