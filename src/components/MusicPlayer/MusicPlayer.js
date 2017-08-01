import React, { Component } from 'react';
import ReactPlayer from 'react-player';

export default class MusicPlayer extends Component {
  constructor() {
    super()
    this.state = {
      url: '',
      playing: false,
      controls: false,
      volume: 1,
      playbackRate: 1,
      timestamp: ''
    }
  }

  isPlaying(e) {
    const { timestamp } = this.state;

    if (timestamp) {
      this.submitTimestamp();
    }

    this.setState({
      playing: !this.state.playing
    });
  }

  setUrl(e) {
    const { value } = e.target;

    this.setState({
      url: value
    });
  }

  submitUrl() {
    this.setState({
      playing: true
    });
  }

  resetState() {
    this.setState({
      url: '',
      playing: false,
      timestamp: ''
    })
  }

  setPlayback(e) {
    const { innerText } = e.target;
    const { playbackRate } = this.state;

    if (e.target.innerText === '+Speed') {
      this.setState({
        playbackRate: playbackRate + 0.1
      });
    } else {
      this.setState({
        playbackRate: playbackRate - 0.1
      });
    }
  }

  setTimestamp(e) {
    const { value } = e.target;

    this.setState({
      timestamp: value
    });
  }

  submitTimestamp() {
    const { timestamp } = this.state;
    const time = timestamp.split(':'),
          minutes = time[0],
          seconds = time[1],
          fixedTime = Number(minutes * 60) + Number(seconds);

    this.player.seekTo(fixedTime);
    this.setState({
      playing: true
    });
  }

  render() {
    const { url, playing, controls, volume, playbackRate, timestamp } = this.state;
    return (
      <section class="music-player">
        <ReactPlayer ref={player => this.player = player}
                     url={url}
                     playing={playing}
                     controls={controls}
                     volume={volume}
                     playbackRate={playbackRate}
                     width='0'
                     height='0'
                   />
        <section class="player-controls">
          <button onClick={(e) => this.isPlaying(e)}>{playing? 'Pause': 'Play'}</button>
          <button onClick={(e) => this.setPlayback(e)}>+Speed</button>
          <button onClick={(e) => this.setPlayback(e)}>-Speed</button>
          <input type='text'
                 placeholder='Seek To'
                 value={timestamp}
                 onChange={(e) => { this.setTimestamp(e) }}
               />
          <button onClick={() => this.submitTimestamp()}>Go</button>
          <input type='text'
                 placeholder='Paste Song Url'
                 value={url}
                 onChange={(e) => this.setUrl(e)}
               />
          <button onClick={() => this.submitUrl()}>Go</button>
          <button onClick={() => this.resetState()}>Reset</button>
        </section>
      </section>
    )
  }
}
