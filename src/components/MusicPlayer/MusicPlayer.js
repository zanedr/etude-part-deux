import React, { Component } from 'react';
import ReactPlayer from 'react-player';

export default class MusicPlayer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: this.props.audioUrl,
      playing: false,
      controls: false,
      volume: 1,
      playbackRate: 1,
      timestamp: '0:0'
    }
  }

  componentWillMount() {
    this.setState({url: this.props.audioUrl})
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
          <container className='seek'>
            <p>Starting point</p>
            <input className='seek-to player-input'
              type='text'
              placeholder='Seek To'
              value={this.state.timestamp}
              onChange={(e) => { this.setTimestamp(e) }}
            />
          </container>
          <container className='playbackRate-container'>
            <p>Speed</p>
            <input className='playbackRate-input player-input'
              type='number'
              value={this.state.playbackRate}
              onChange={(e) => this.setState({playbackRate: e.target.value})}
            />
          </container>
          <container className='speed'>
            <button className='speed-up'
              onClick={() => this.setPlayback('+')}>+Speed</button>
            <button className='speed-down'
              onClick={() => this.setPlayback('-')}>-Speed</button>
          </container>
          <container className='play-reset'>
            <button className='play-button' onClick={(e) => this.isPlaying(e)}>{playing? 'Pause': 'Play'}</button>
            <button className='reset-url' onClick={() => this.resetState()}>Reset</button>
          </container>
        </section>
      </section>
    )
  }
}
