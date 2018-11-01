import React, { Component } from 'react';

class VideoItem extends Component{

    render(){
        return(
            <div className="col-2">
                <a href={"https://www.youtube.com/watch?v="+this.props.video.id.videoId} target="_blank"><img src={this.props.video.snippet.thumbnails.default.url} /></a>
                <hr />
            </div>
        )
    }
}

export default VideoItem;