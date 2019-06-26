import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import axios from 'axios'
import moment from 'moment'

const s = {
    
    style1: {
        padding: 45, 
        backgroundColor: '#0956e6'
    },

    style2: {
        display:'flex',
        flexDirection:'row'
    },

    style3: {
        display: 'flex' , 
        flexDirection: 'row', 
        flex:1
    },

    style4: {
        display: 'flex', 
        flex: 1, 
        flexDirection: 'column'
    },

    style5: {
        fontSize: 26, 
        fontWeight: 700, 
        marginLeft: 20,
    },

    style6: {
        fontSize: 18, 
        fontWeight: 600, 
        marginLeft: 20
    },

    style7: {
        display: 'flex',
        justifyContent: 'flex-end'
    },

    style8: {
        display: 'flex', 
        marginRight: 23,
        height: 63
    },

    style9: {
        backgroundColor: '#0745ba', 
        width: 110, 
        paddingLeft: 0, 
        paddingTop: 5, 
        paddingRight: 0, 
        paddingBottom: 5, 
        borderRadius: 10
    },

    style10: {
        display: 'flex', 
        flexDirection: 'column',  
        justifyContent: 'flex-end', 
        alignItems: 'center',
        fontSize: 20, 
        letterSpacing: 0.8, 
        fontWeight: 700
    },

    style11: {
        display: 'flex', 
        flexDirection: 'column',  
        justifyContent: 'center', 
        alignItems: 'center',
        fontSize: 14, 
        letterSpacing: 0.8, 
        fontWeight: 700
    },

    style12: {
        flex: 1, 
        fontSize: 14, 
        letterSpacing: 0.8, 
        marginTop: 12, 
        fontWeight: 600,
        textTransform: 'uppercase'
    },

    style13: {
        display: 'flex',
        justifyContent: 'flex-end'
    },

    style14: {
        display: 'flex', 
        marginRight: 23, 
        height: 63
    },

    style15: {
        backgroundColor: '#0745ba', 
        width: 110, 
        paddingLeft: 0, 
        paddingTop: 5, 
        paddingRight: 0, 
        paddingBottom: 5, 
        borderRadius: 10,
        textTransform: 'uppercase'
    },

    style16: {
        display: 'flex', 
        flexDirection: 'column',  
        justifyContent: 'flex-end', 
        alignItems: 'center',
        fontSize: 20, 
        letterSpacing: 0.8, 
        fontWeight: 700 
    },

    style17: {
        display: 'flex', 
        flexDirection: 'column',  
        justifyContent: 'center', 
        alignItems: 'center',
        fontSize: 14, 
        letterSpacing: 0.8, 
        fontWeight: 700 
    }
}

class VenueInfo extends Component{

    render(){
        return(
            <Grid container className="gridvenueinfo" style={ s.style1 }>
                <Grid container lg={6} sm={12} style={ s.style2 }>

                        <div style={ s.style3 }>
                            <Grid className="gamecenteralign" container>
                                <Grid item lg={8} sm={12}>
                                    <div className="venuediv1" style={ s.style4 }>
                                        <span className="tikitaka" style={ s.style5 }>{ this.props.history.location.state.data.event.name } </span> <br />
                                        <span className="under17" style={ s.style6 }>{ this.props.history.location.state.data.format.format }</span> 
                                    </div>
                                </Grid>
                                <Grid container className="gridagain gridvenueinfo2" lg={6} sm={12} style={ s.style7 }>
                                    <div className="venuediv3" style={ s.style8 }>
                                        <span style={ s.style9 }>
                                            <div className="november" style={ s.style10 } >{ moment(this.props.history.location.state.data.start_date).format('MMMM').substring(0,3) }</div>
                                            <div className="dates" style={ s.style11 } >{ moment(this.props.history.location.state.data.start_date).format('DD') } - { moment(this.props.history.location.state.data.end_date).format('DD') }</div>
                                        </span>
                                    </div>
                                </Grid>
                                <Grid item lg={4} sm={12}>
                                    <div className="venuediv2" style={ s.style12 }>
                                        <span className="venuefootball">{ this.props.history.location.state.data.type }</span> 
                                        <span className="venuefootball">{ this.props.history.location.state.data.format.game_type }</span> 
                                    </div>
                                </Grid>
                            </Grid>
                        </div>

                        {/* <div style={{ display: 'flex', flex: 1, fontSize: 20, padding: 7}}>
                            UNDER 17 GROUP & KNOCKOUT
                        </div> */}

                    
                </Grid>

                <Grid container className="gridvenueinfo2" lg={6} sm={12} style={ s.style13 }>
                    <div className="venuediv3" style={ s.style14 }>
                        <span style={ s.style15 }>
                            <div className="november" style={ s.style16 } >{ moment(this.props.history.location.state.data.start_date).format('MMMM').substring(0,3) }</div>
                            <div className="dates" style={ s.style17 } >{ moment(this.props.history.location.state.data.start_date).format('DD') } - { moment(this.props.history.location.state.data.end_date).format('DD') }</div>
                        </span>
                    </div>
                </Grid>
            </Grid>

            
        )}
    }

export default VenueInfo