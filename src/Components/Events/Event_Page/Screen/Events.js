import React, { Component } from 'react'
import '../../../style.css'
import EventPoster from '../Components/Event_Poster'
import EventInfo from '../Components/Event_Info'
import EventBounty from '../Components/Event_Bounty'
import EventCard from '../Components/Event_Cards'
import EventGameInfo from '../Components/Event_Game_Info'
import {Helmet} from "react-helmet";
import axios from 'axios'
import Loader from '../../../Loader'
import history from '../../../history'

const axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token':
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTVlZTFhNTkyMzkxNzEzZWJkNTBiZCIsInVzZXJuYW1lIjoiYWtzaGF5QGdtYWlsLmNvbSIsInJvbGUiOiJzdXBlcl9hZG1pbiIsImlhdCI6MTU1Nzk5MTc5NX0.Cg14_ROhN155273K1xdWGPfbB7B5ztdHmobxoOFaOgk'
    }
  };

class Venues extends Component{

    state = ({
        event : [],
        loader: false
    })

    componentDidMount(){
        this.setState({
            loader: true
        },()=>{
        axios.post('http://159.65.146.12:3040/api/admin/event',{},axiosConfig)
            .then(res => {
                this.setState({
                    event: res.data.data,
                    loader: false
                })
            })
        })
    }

    render(){
        return(
            <div>
                <Loader loadit = { !this.state.loader ? this.state.loader : "" } />
                <Helmet>
                    <title>Events</title>
                </Helmet>
                <EventPoster history={ history }  />
                <EventInfo history = { history } />
                <EventCard history= { history } />
                <EventBounty history = { history } />
                <EventGameInfo />
            </div>
        )
    }
}

export default Venues