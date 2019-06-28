import React, { Component } from 'react'
import posterevents from '../../../../Assets/Images/posterevents.png'
import '../../../style.css'


const s = {
    style1: {
        marginBottom: -9, 
    }
}

class Eventsposter extends Component{

    render(){
        return(
            <div style={ s.style1 }>
                <img className="posterevents" src = { this.props.history.location.state.data.venue.venue_display_picture } width="100%"/>
            </div>
        )
    }
}


export default Eventsposter