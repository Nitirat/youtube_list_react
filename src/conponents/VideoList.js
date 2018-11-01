import React, { Component } from 'react';
import VideoItem from "./VideoItem";

class VideoList extends Component {

    showVideoList() {
        return this.props.videos && this.props.videos.map((video, i) => (
            <VideoItem key={i} video={video} />
        ));
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {this.showVideoList()}
                </div>
            </div>
        )
    }
}

export default VideoList;