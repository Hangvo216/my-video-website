import React from 'react';

const VideoItem = ({ video }) => {
  return (
    <div className="video-item">
      {/* Display video details */}
      <h3>{video.name}</h3>
      <video src={video.url} style={{ width: "400px", height: "400px" }}  controls />
      {/* Add tags component */}
    </div>
  );
};

export default VideoItem;
