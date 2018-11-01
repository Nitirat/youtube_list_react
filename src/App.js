import React, { Component } from 'react';
import VideoList from "./conponents/VideoList";
import axios from "axios";

class App extends Component {

  constructor() {
    super();
    this.state = { videos: "" };
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:3001/items")
      .then(res => {
        this.setState({ videos: res.data });
      });
  }

  render() {
    return (
      <div>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
