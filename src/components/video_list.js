import React from 'react';

const VideoList = (props) => {
  return (
    <ul className="col-md-4 list-group">
      {props.videos.length}
    </ul> //if this were a class component it would be this.props.videos
  );
}

export default VideoList;
