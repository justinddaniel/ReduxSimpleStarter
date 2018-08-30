import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />
  });

  return (

    <ul className="col-md-4 list-group">
      {videoItems}
    </ul> //if this were a class component it would be this.props.videos
  );
}

export default VideoList;
