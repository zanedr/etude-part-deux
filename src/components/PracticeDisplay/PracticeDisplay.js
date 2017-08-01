import React, { Component } from 'react';
import { Settings } from '../Settings/Settings';
import MusicPlayer from '../MusicPlayer/MusicPlayer';

export default class PracticeDisplay extends Component{
    constructor(props){
        super(props)
        this.state = {
            settings: false
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
                <Settings closeSettings={this.closeSettings.bind(this)} />
            )
        }
    }

    render() {
        return (
            <div className="practice-container">
              <MusicPlayer />
                <h1></h1>

                <textarea className="tab-display"></textarea>
                <button className="settings-button" onClick={this.openSettings.bind(this)}>Settings</button>
            </div>
        )
    }
}
