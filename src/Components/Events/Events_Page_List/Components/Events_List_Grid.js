import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import venuesgridimg from '../../../../Assets/Images/venuesgridimg.png'
import axios from 'axios'
import moment from 'moment'
import Loader from '../../../Loader'
import history from '../../../history'

const axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token':
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTVlZTFhNTkyMzkxNzEzZWJkNTBiZCIsInVzZXJuYW1lIjoiYWtzaGF5QGdtYWlsLmNvbSIsInJvbGUiOiJzdXBlcl9hZG1pbiIsImlhdCI6MTU1Nzk5MTc5NX0.Cg14_ROhN155273K1xdWGPfbB7B5ztdHmobxoOFaOgk'
    }
  };





class EventsGrid extends Component{

    state = {
        events: [],
        loader: false
    }

    componentDidMount(){
        this.setState({
            loader: true
        }, ()=>{
        axios.post('http://159.65.146.12:3040/api/admin/event',{},axiosConfig)
            .then(res => {
                console.log("Ghants",res)
                this.setState({
                    events: res.data.data,
                    loader: false
                })
            })
            .catch(err =>{
                console.log("AXIOS ERROR", err.response)
            })
        })
    }

    handleClick = (object) =>{
        history.push({
            pathname: '/event',
            state: { data: object }
        })
        this.props.toggle()
    }

    render(){
        return(
            <div style={{ padding: 40, backgroundColor: '#0956E6' }} >
                <Loader loadit = { !this.state.loader ? this.state.loader : "" } />
                <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}  >

                    { 
                        this.state.events.length &&
                         this.state.events.map(event =>(

                        <Grid item lg={4} sm={12} style={{ padding: 30, cursor: 'pointer' }} onClick={()=> this.handleClick(event)} >
                            <Paper style={{ display: 'flex', flexDirection: 'column'}} className="eventspaper" >
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                                    <img src={event.event.event_cover_picture[0]} width="100%" height="165px"  style={{ borderTopLeftRadius: 4, borderTopRightRadius: 4 }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row'}} >
                                    
                                    <div style={{ display: 'flex', padding: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'column',color: '#0956E6',borderLeft: '6.5px solid #FFBE43', borderRadius: 4 }} >
                                        <div style={{ display: 'flex',flex:1, justifyContent: 'center', alignItems: 'center', fontWeight: 700, fontSize: 14  }} >
                                            { moment(event.start_date).format('MMMM').substring(0,3) }
                                        </div>
                                        <div style={{ display: 'flex',flex:2, justifyContent: 'center', alignItems: 'center', fontWeight: 700, fontSize: 24 }} >
                                            { moment(event.start_date).format('DD') }
                                        </div>
                                        <div style={{ display: 'flex',flex:1 , justifyContent: 'center', alignItems: 'center', fontWeight: 800, fontSize: 12 }} >
                                            onwards
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', flex:3, flexDirection: 'column', paddingLeft: 10 }} >  
                                        <div style={{ display: 'flex', flexDirection: 'row', color: '#0956E6' }} >
                                            <div style={{ display: 'flex', flex: 2, justifyContent: 'flex-start', alignItems: 'center', fontWeight: 700, fontSize: 14}} >
                                                {event.event.name}
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection: 'column', fontSize:11, paddingRight: 10, paddingTop: 10}} >
                                                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', fontWeight: 700 }} >
                                                    Rs.{event.format.entry_fee}
                                                </div>
                                                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', fontWeight: 700 }}>
                                                    PER TEAM
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', paddingBottom: 7, fontWeight: 600, color: '#4A4A4A' , fontSize: 13 }} >
                                            {event.format.age_category} {" "} {event.format.format}
                                        </div>
                                        <div style={{ display: 'flex' }} >
                                            <div style={{ display: 'flex', flex: 1, color: '#6D6D6D', fontSize: 12 }} >
                                                <span style={{ paddingTop: 2, paddingBottom: 2, paddingLeft: 5, paddingRight: 5, borderRadius: 5, backgroundColor: '#EBECEE', fontWeight: 700 }} >{event.format.game_type}</span>
                                                <div style={{ marginLeft: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 5, paddingLeft: 5 , paddingRight: 5, backgroundColor: '#EBECEE'  }} >
                                                    <span style={{ fontWeight: 700 }} >COUNTER ATTACK, </span>
                                                    <span style={{ fontWeight: 600 }} >   Adambakkam</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        </Grid>
                ))}
                    
                </Grid>
            </div>
        )
    }
}

export default EventsGrid