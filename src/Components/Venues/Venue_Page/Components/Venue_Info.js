import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import '../../../style.css'
import whitestar from '../../../../Assets/Images/whitestar.png'
import phone from '../../../../Assets/Images/phone.png'

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
        display: 'flex', 
        flexDirection: 'row', 
        flex:1
    },

    style4: {
        display: 'flex', 
        flex: 1, 
        flexDirection: 'column', 
        marginLeft: 10
    },

    style5: {
        fontSize: 24, 
        fontWeight: 700, 
        marginLeft: 20
    },

    style6: {
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        paddingLeft: 20
    },

    style7: {
        fontSize: 16, 
        fontWeight: 600, 
        marginLeft: 20
    },

    style8: {
        display: 'flex',
        justifyContent: 'flex-end', 
        paddingRight: 10
    },

    style9: {
        display: 'flex', 
        marginRight: 23, 
        height: 78
    },

    style10: {
        backgroundColor: '#0745ba', 
        width: 120, 
        paddingLeft: 10, 
        paddingTop:10, 
        paddingRight: 10, 
        paddingBottom: 30, 
        borderRadius: 10
    },

    style11: {
        display: 'flex', 
        flexDirection: 'row',  
        justifyContent: 'center', 
        alignItems: 'center',
        fontSize: 20, 
        letterSpacing: 0.8, 
        fontWeight: 700
    },

    style12: {
        display: 'flex', 
        flexDirection: 'column',  
        justifyContent: 'center', 
        alignItems: 'center',
        fontSize: 18, 
        letterSpacing: 0.8, 
        fontWeight: 700
    }
}

class Eventsinfo extends Component{
    render(){
        return(
                        <Grid container className="gridvenueinfo" style={ s.style1 }>
                            <Grid container lg={6} sm={12} style={ s.style2 }>
                                
                                    <div style={ s.style3 }>
                                        <Grid className="gamecenteralign" container>
                                            <Grid item lg={12} sm={12}>
                                                <div className="venuediv1" style={ s.style4 }>
                                                    <div className="tikitakaandaddress" style={ s.style2 } >
                                                        <span className="tikitaka tikitakaagain" style={ s.style5 }>{this.props.history.location.state.data.venue.name}  <span className="phonespan" style={ s.style6 } ><img className="phoneimage" src={ phone } width="33px" /></span>  </span>
                                                    </div>
                                                    <span className="under17 address " style={ s.style7 }>{this.props.history.location.state.data.venue.address} </span> 
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>

                            </Grid>

                            <Grid container className="gridvenueinfo2 displayforpads grideventsinfo" lg={6} sm={12} style={ s.style8 }>
                                <div className="venuediv3" style={ s.style9 }>
                                    <span style={ s.style10 }>
                                        <div className="november" style={ s.style11 }> {this.props.history.location.state.data.rating}  <span style={{ marginLeft: 3 }} ><img src={ whitestar } height="15px" /></span>  </div>
                                        <div className="dates" style={ s.style12 } >146 Votes </div>
                                    </span>
                                </div>
                            </Grid>
                        </Grid>

            
        )
    }
}

export default Eventsinfo