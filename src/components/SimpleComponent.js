import React, {Component} from 'react'

export default class SimpleComponent extends Component {
    state = {
        mood: 'happy'
    }

    moodChange = ()=>{
        const newMood = this.state.mood === 'happy' ? 'sad' : 'happy'
        this.setState({
            mood: newMood
        })
    }

    render(){
        return(
            <div onClick={this.moodChange} >{this.state.mood}</div>
        );
    }
}