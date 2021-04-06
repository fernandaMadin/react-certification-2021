import React from 'react';
import { Link } from 'react-router-dom';
import VideosListElement from '../VideosListElement';

const VideosList = ({ videos, setVideo, setVideos }) => {
  const updateView = (video) => {
    setVideo(video);
    setVideos(videos);
  };

  return (
    <div>
      {videos.map((video) =>
        video.id.videoId ? (
          <Link
            key={video.id.videoId}
            to={{ pathname: `/${video.id.videoId}`, state: { video } }}
            onClick={() => updateView(video)}
          >
            <VideosListElement key={video.id.videoId} snippet={video.snippet} />
          </Link>
        ) : (
          ''
        )
      )}
    </div>
  );
};

export default VideosList;
