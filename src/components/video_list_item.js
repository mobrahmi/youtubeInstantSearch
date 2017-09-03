import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
    // passing props as a video props is equal to pass props and assign const video = props.video;
    return (
        <li onClick={ () => onVideoSelect(video) } className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img src={video.snippet.thumbnails.default.url} className="media-object" />
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );

}

export default VideoListItem;