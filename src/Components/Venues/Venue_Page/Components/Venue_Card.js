import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import '../../../style.css'
import tick from '../../../../Assets/Images/tick.png'
import size from '../../../../Assets/Images/size.png'
import artificialturf from '../../../../Assets/Images/artificialturf.png'
import cage from '../../../../Assets/Images/cage.png'

const s = {
    style1: {
        backgroundColor: '#0956E6', 
        paddingBottom: 50 
    },

    style2: {
        display: 'flex', 
        flex:1 , 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    style3: {
        width: '80%' 
    },
    
    style4: {
        backgroundColor: 'white'
    },

    style5: {
        display: 'flex', 
        flexDirection: 'column'
    },

    style6:{
        display: 'flex',
        fontSize:20, 
        borderRadius: 12,
        justifyContent: 'center', 
        alignItems: 'center',
        color: '#0956e6', 
        padding: 8, 
        backgroundColor: '#F4F5F8', 
        fontWeight: 700
    },

    style7:{
        display: 'flex', 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        color: '#6D6D6D', 
        padding: 15, 
        paddingTop: 40, 
        fontWeight: 600
    },

    style8: {
        paddingLeft: 40
    },
    
    style9: {
        paddingLeft: 5
    },

    style10: {
        display: 'flex', 
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center', 
        color: '#6D6D6D', 
        padding: 15, 
        fontWeight: 600
    },

    style11: {
        display: 'flex', 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        color: '#6D6D6D', 
        padding: 15, 
        paddingBottom: 40, 
        fontWeight: 600
    },

    style12: {
        backgroundColor: 'green',
        width: '80%'
    },

    style13: {
        display: 'flex', 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        color: '#6D6D6D', 
        paddingTop: 35, 
        paddingBottom: 37
    },

    style14: {
        display: 'flex', 
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },

    style15: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flex: 1, 
        flexDirection: 'column' 
    },

    style16: {
        display: 'flex', 
        alignItems: 'flex-start', 
        justifyContent: 'center'
    },

    style17: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingTop: 20, 
        fontWeight: 600
    },

    style18: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flex: 1, 
        flexDirection: 'column', 
        paddingTop: 20, 
        paddingBottom: 10, 
        fontWeight: 600
    },

    style19: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flex: 1, 
        flexDirection: 'column', 
        paddingTop: 20, 
        fontWeight: 600
    }
}


class Eventscardone extends Component{
    
    
    render(){
        return(
            <div style={ s.style1 } >
                <Grid container className="eventscardsgrid4" > 

                    <Grid className="eventscardsgrid2" item lg={6} sm={12} md={12} style={ s.style2 } >
                        <div className="eventscardsdiv1" style={ s.style3 }>
                            <Paper style={ s.style4 }>
                                <div  style={ s.style5 }> 
                                    <div  style={ s.style6 }>
                                        <span>
                                            AMENITIES
                                        </span>
                                    </div>

                                        {/* <div>   

                                        <Grid className="eventscardsgrid1" container style={ s.style7 }>
                                            
                                            
                                        { Object.keys(data).map(el =>{
                                            return(
                                                <div>  
                                                        <Grid className="e" container lg={4} sm={12} md={3} style={ s.style8 } >
                                                            <div>
                                                                <img src={ tick } height="15px" /><span style={ s.style9 }> Toilets</span>
                                                            </div> 
                                                        </Grid>
                                                </div>
                                            )
                                        }) }

                                        </Grid>
                                        </div> */}

                                        <div>
                                        <Grid className="eventscardsgrid1" container style={ s.style7 }>                                        
                                            <Grid className="eventscardsgrid3" container lg={4} sm={12} md={3} style={ s.style8 } >
                                                <div>
                                                    { this.props.history.location.state.data.features.benches ? <img src={ size } height= "15px"/>  : <img src={ tick } height="15px" />}<span style={ s.style9 }> Toilets </span>
                                                </div> 
                                            </Grid>

                                            <Grid className="eventscardsgrid3" container lg={4} sm={12} md={5} >
                                                <div>
                                                    <img src={ tick } height="15px" /><span style={ s.style9 }> Changing Rooms </span>
                                                </div> 
                                            </Grid>

                                            <Grid className="eventscardsgrid3" container lg={4} sm={12} md={4} style={ s.style8 } >
                                                <div>
                                                    <img src={ tick } height="15px" /><span style={ s.style9 }> Showers </span>
                                                </div> 
                                            </Grid>
                                        </Grid>


                                        <Grid container className="eventscardsgrid6" style={ s.style10 }>
                                            <Grid className="eventscardsgrid3" container lg={4} sm={12} md={4} style={ s.style8 } >
                                                <div>
                                                    <img src={ tick } height="15px" /><span style={ s.style9 }> Towels </span>
                                                </div> 
                                            </Grid>

                                            <Grid className="eventscardsgrid3" container lg={4} sm={12} md={4} style={{ }} >
                                                <div>
                                                    <img src={ tick } height="15px" /><span style={ s.style9 }> Lockers </span>
                                                </div> 
                                            </Grid>

                                            <Grid className="eventscardsgrid3" container lg={4} sm={12} md={4} style={ s.style8 } >
                                                <div>
                                                    <img src={ tick } height="15px" /><span style={ s.style9 }> Bibs </span>
                                                </div> 
                                            </Grid>
                                        </Grid>

                                        
                                        <Grid container className="eventscardsgrid7" container style={ s.style11 }>
                                            <Grid className="eventscardsgrid3" container lg={4} sm={12} md={4} style={ s.style8 } >
                                                <div>
                                                    <img src={ tick } height="15px" /><span style={ s.style9 }> Parking </span>
                                                </div> 
                                            </Grid>

                                            <Grid className="eventscardsgrid3" container lg={4} sm={12} md={4} style={{ }} >
                                                <div>
                                                    <img src={ tick } height="15px" /><span style={ s.style9 }> Card Accepted </span>
                                                </div> 
                                            </Grid>

                                            <Grid className="eventscardsgrid3" container lg={4} sm={12} md={4} style={ s.style8 } >
                                                <div>
                                                    <img src={ tick } height="15px" /><span style={ s.style9 }> Bottled Water </span>
                                                </div> 
                                            </Grid>
                                        </Grid>
                                        
                                    </div>

                                </div>
                            </Paper>
                        </div>
                    </Grid>
                    


                    <Grid container lg={6} sm={12} md={12} style={ s.style2 } >
                        <div className="eventscardsdiv1" style={ s.style12 } >
                            <Paper style={ s.style4 }>
                                <div  style={ s.style5 }> 
                                    <div  style={ s.style6 }>
                                        <span>
                                            GAME INFO
                                        </span>
                                    </div>

                                    <div>
                                        <Grid className="eventscardsgrid5" item lg={12} sm={12} style={ s.style13 }>
                                                <Grid item lg={4} sm={12} md={4} style={ s.style14 } >
                                                    <div style={ s.style15 } >
                                                        <span style={ s.style16 } ><img src={ cage } width="81px" height="60px" /></span> 
                                                        <div className="eventscardsdiv2" style={ s.style17 }>
                                                            <span>Cage Football</span>
                                                            <span>Sidewalls and no outs</span> 
                                                        </div>
                                                    </div> 
                                                </Grid>

                                                <Grid item lg={4} sm={12} md={4} style={ s.style14 } >
                                                    <div style={ s.style15 } >
                                                        <span><img src={ size } width="141px" height="72px" /></span> 
                                                        <div className="eventscardsdiv3"style={ s.style18 }>
                                                            <span style={{ }}>Size</span>
                                                        </div>
                                                    </div> 
                                                </Grid>

                                                <Grid container lg={4} sm={12} md={4} style={ s.style14 } >
                                                    <div style={ s.style15 } >
                                                        <span><img src={ artificialturf } width="91px" height="66px" /></span> 
                                                        <div className="eventscardsdiv4" style={ s.style19 }>
                                                            <span>Artificial</span>
                                                            <span>Football Turf</span>
                                                        </div>
                                                    </div> 
                                                </Grid>
                                            </Grid>
                                    </div>
                                </div>
                            </Paper>
                        </div>
                    </Grid>

                </Grid>
            </div>
        )
    }
}

export default Eventscardone
