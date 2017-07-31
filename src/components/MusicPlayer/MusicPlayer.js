import React, { Component } from 'react';
import ReactPlayer from 'react-player';

export default class MusicPlayer extends Component {
  constructor() {
    super()
    this.state = {
      playing: true
    }
  }

  render() {
    return (
      <section class="music-player">
        <ReactPlayer url='https://www.youtube.com/watch?v=LU8aRDRrrh0' />
      </section>
    )
  }
}
