import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => { // props [Object] are the attribute state we passed to <VideoList />
  const videosItems =  props.videos.map((video) => {
    return(
        <VideoListItem
          onVideoSelect={props.onVideoSelect} 
          key={ video.etag } 
          video={ video } />
        );
    });
    return (
        // don't use for loops use builtin map iterator
        <ul className = "col-md-4 list-group">
               {videosItems}
        </ul>
    );
}

export default VideoList; 