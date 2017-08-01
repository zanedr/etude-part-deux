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
      playbackRate: 1,
      timestamp: ''
    })
  }

  setPlayback(text) {
    const { playbackRate } = this.state;

    if (text === '+') {
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
      <section className="music-player">
        <ReactPlayer ref={player => this.player = player}
                     url={url}
                     playing={playing}
                     controls={controls}
                     volume={volume}
                     playbackRate={playbackRate}
                     width='0'
                     height='0'
                   />
        <section className="player-controls">
          <button className='play-button'
                  onClick={(e) => this.isPlaying(e)}>{playing? 'Pause': 'Play'}</button>
          <button className='speed-up'
                  onClick={() => this.setPlayback('+')}>+Speed</button>
          <button className='speed-down'
                  onClick={() => this.setPlayback('-')}>-Speed</button>
          <input className='seek-to'
                 type='text'
                 placeholder='Seek To'
                 value={timestamp}
                 onChange={(e) => { this.setTimestamp(e) }}
               />
          <button className='submit-timestamp'
                  onClick={() => this.submitTimestamp()}>Go</button>
          <input className='url-input'
                 type='text'
                 placeholder='Paste Song Url'
                 value={url}
                 onChange={(e) => this.setUrl(e)}
               />
          <button className='submit-url'
                  onClick={() => this.submitUrl()}>Go</button>
          <button className='reset-url'
                  onClick={() => this.resetState()}>Reset</button>
        </section>
      </section>
    )
  }
}
