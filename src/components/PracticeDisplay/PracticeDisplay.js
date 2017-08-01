import React, { Component } from 'react';
import Settings from '../Settings/Settings'

export default class PracticeDisplay extends Component{
    constructor(props){
        super(props)
        this.state = {
            settings: true,
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
                    id={this.props.id}
                    title={this.props.title}
                    artist={this.props.artist}
                    timestamps={this.props.timestamps}
                    tab={this.props.tab}
                    audio={this.props.audio}
                    priority={this.props.priority}
                    closeSettings={this.closeSettings.bind(this)} />
            )
        }
    }

    render() {
        return (
            <div className="practice-container">
                {this.settings()}
                <textarea className="tab-display"></textarea>
                <button className="settings-button" onClick={this.openSettings.bind(this)}>Settings</button>
            </div>
        )
    }
}