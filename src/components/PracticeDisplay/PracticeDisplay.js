import React, { Component } from 'react';
import { Settings } from '../Settings/Settings'

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
            <div classname="practice-container">
                {this.settings()}
                <p>{tab}</p>
                <textarea class="tab-display"></textarea>
                <button class="settings-button" onClick={this.openSettings()}>Settings</button>
            </div>
        )
    }
}