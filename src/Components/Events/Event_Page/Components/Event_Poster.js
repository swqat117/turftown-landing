import React, { Component } from 'react'
import tournament from '../../../../Assets/Images/tournament.png'

const s = {
    
    style1: {
        marginBottom: -5.3, 
        // marginTop: -86
    }
}

class EventPoster extends Component{
    
    render(){
        console.log("inn", this.props.history)
        return(
            <div style={ s.style1 }>
                <img className="postervenue" src = { this.props.history.location.state.data.event.event_cover_picture[0] } height="500px" width="100%"/>
            </div>
        )
    }
}

export default EventPoster;