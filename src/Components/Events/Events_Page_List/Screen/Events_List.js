import React, { Component } from 'react'
import EventsListGrid from '../Components/Events_List_Grid'
import history from '../../../history'

class EventsList extends Component{
    render(){
        console.log("hitooo",history)
        return(
            <div>
                <EventsListGrid history={ history } />
            </div>
        )
    }
}


export default EventsList