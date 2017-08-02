import React, { Component } from 'react';
import { Settings } from '../Settings/Settings';
import MusicPlayer from '../MusicPlayer/MusicPlayer';

export default class PracticeDisplay extends Component{
    constructor(props){
        super(props)
        this.state = {
          settings: false,
        }
    }

    openSettings() {
        if(this.state.settings === false) {
            this.setState({settings: true})
        }
    }

    closeSettings() {
        if(this.state.settings === true) {
            this.setState({settings: false})
        }
    }

    settings() {
        if(this.state.settings === true) {
            return (
                <Settings
                    closeOut={this.props.unselect}
                    id={this.props.selectedSong.id}
                    title={this.props.selectedSong.title}
                    artist={this.props.selectedSong.artist}
                    timestamps={this.props.selectedSong.timestamps}
                    tab={this.props.selectedSong.tab}
                    audio={this.props.selectedSong.audio}
                    priority={this.props.selectedSong.priority}
                    closeSettings={this.closeSettings.bind(this)} />
            )
        }
    }

    renderTab() {
        if(this.props.selectedSong.tab.length) {
            let parsedTab = JSON.parse(this.props.selectedSong.tab)
            console.log('PD parsed tab', parsedTab[7] === ' ')
            return parsedTab.map(line => {
                if(line === ' ') {
                    return( <div className='tab-line'>.</div>)
                } else {
                    return( <div className='tab-line'>{line}</div> )
                }
            })
        } else {
            return (<div className='tab-line'>No tab exists yet</div> )
        }

    }

    render() {
        return (
            <div className="practice-container">
              {this.settings()}

              <MusicPlayer audioUrl={this.props.selectedSong.audio}/>
              <container className='controls'>
                <button className="settings-button" onClick={this.openSettings.bind(this)}>Edit Song</button>
                <button onClick={()=> this.props.unselect()} >Return to Song List</button>
              </container>
              <h3 className="song-info">Now viewing: <span className="title-and-artist">{`${this.props.selectedSong.title} - ${this.props.selectedSong.artist}`}</span></h3>
              <container className="tab-container">
                {this.renderTab()}
             </container>
            </div>
        )
    }
}

            //   <textarea className="tab-display" value={this.props.selectedSong.tab}></textarea>