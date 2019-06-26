import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import tick from '../../../../Assets/Images/tick.png'
import yellowstar from '../../../../Assets/Images/staryellow.png'
import face1 from '../../../../Assets/Images/face1.png'
import face2 from '../../../../Assets/Images/face2.png'
import face3 from '../../../../Assets/Images/face3.png'
import '../../../style.css'

const s = {

    style1: {
        backgroundColor: '#0956E6', 
        paddingBottom: 50, 
        paddingTop: 50
    },

    style2: {
        display: 'flex', 
        flex:1 , 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    style3: {
        width: '90%'
    },

    style4: {
        backgroundColor: 'white', 
        paddingBottom: 30
    },

    style5: {
        display: 'flex', 
        flexDirection: 'column'
    },

    style6: {
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

    style7: {
        flexDirection:'column', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flex: 1
    },

    style8: {
        padding: 30,
        paddingBottom: 0, 
        width: '80%' ,
        display: 'flex', 
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    style9: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'flex-start'
    },

    style10: {
        display: 'flex', 
        flex:1,
        flexDirection: 'column'
    },

    style11: {
        color: 'black',
        fontWeight: 700, 
        paddingBottom: 5, 
        borderBottom: 2, 
        borderColor: '#F4F5F8'
    },

    style12: {
        color: '#0956e6', 
        display: 'flex', 
        justifyContent: 'flex-end', 
        alignItems: 'center'
    },

    style13: {
        fontWeight: 700
    },
    
    style14: {
        width: '60%', 
        color: '#6d6d6d',
        paddingTop: 5, 
        fontWeight: 600
    },
}

class Eventsreviews extends Component{
    render(){
        return(
                <div style={ s.style1 } >
                    <Grid container style={ s.style2 } >
                        <div style={ s.style3 }>
                            <Paper style={ s.style4 }>
                                <div  style={ s.style5 }> 
                                    <div  style={ s.style6 }>
                                        <span>
                                            REVIEWS
                                        </span>
                                    </div>

                                    <div>

                                        <Grid container style={ s.style7 }>
                                            <div  className="eventsreviewsdiv1" style={ s.style8 }>
                                                <Grid className="eventsreviewsgrid1" item lg={1} md={2} sm={4} style={ s.style9 }>
                                                    <div className="eventsreviewsdiv3" >
                                                        <img src={ face1 } width="56px" height="56px" />
                                                    </div>
                                                </Grid>
                                                <Grid item lg={11} sm={8} md={10}>
                                                    <div style={ s.style10 } >
                                                        <div>
                                                            <Grid container className="eventsreviewstext">
                                                                <Grid className="eventsreviewsgrid2" item lg={10} sm={8} style={ s.style11 } >
                                                                    John Appleseed
                                                                </Grid>
                                                                <Grid item lg={2} sm={4} style={ s.style12 }>
                                                                    <div>
                                                                        <span style={ s.style13 } >4</span>
                                                                        <span> <img src= { yellowstar } width="12px" /> </span>
                                                                    </div>
                                                                </Grid>
                                                            </Grid>
                                                        </div>
                                                        <div>
                                                            <div className="eventsreviewsdiv2" style={ s.style14 }  >
                                                                Turf was well maintained and facilities such as toilets and dressing rooms werer neat and clean. 
                                                                Turf size was a bit small though.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Grid>
                                            </div>
                                        </Grid>


                                        <Grid container style={ s.style7 }>
                                            <div  className="eventsreviewsdiv1" style={ s.style8 }>
                                                <Grid className="eventsreviewsgrid1" item lg={1} md={2} sm={4} style={ s.style9 }>
                                                    <div className="eventsreviewsdiv3">
                                                        <img src={ face2 } width="56px" height="56px" />
                                                    </div>
                                                </Grid>
                                                <Grid item lg={11} sm={8} md={10} style={{}}>
                                                    <div style={ s.style10 } >
                                                        <div>
                                                            <Grid container className="eventsreviewstext">
                                                                <Grid className="eventsreviewsgrid2" item lg={10} sm={8} style={ s.style11 } >
                                                                    Akhil Khatri
                                                                </Grid>
                                                                <Grid item lg={2} sm={4} style={s.style12 }>
                                                                    <div>
                                                                        <span style={ s.style13 } >5</span>
                                                                        <span> <img src= { yellowstar } width="12px" /> </span>
                                                                    </div>
                                                                </Grid>
                                                            </Grid>
                                                        </div>
                                                        <div>
                                                            <div  className="eventsreviewsdiv2" style={ s.style14 }  >
                                                                Great rooftop atmosphere. Heart of the city. Do check it out
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Grid>
                                            </div>
                                        </Grid>

                                        <Grid container style={ s.style7 }>
                                            <div  className="eventsreviewsdiv1" style={ s.style8 }>
                                                <Grid className="eventsreviewsgrid1" item lg={1} md={2} sm={4} style={ s.style9 }>
                                                    <div className="eventsreviewsdiv3">
                                                        <img src={ face3 } width="56px" height="56px" />
                                                    </div>
                                                </Grid>
                                                <Grid item lg={11} sm={8} md={10} style={{}}>
                                                    <div style={ s.style10 } >
                                                        <div>
                                                            <Grid container className="eventsreviewstext">
                                                                <Grid className="eventsreviewsgrid2" item lg={10} sm={8} style={ s.style11 } >
                                                                    Akshay V
                                                                </Grid>
                                                                <Grid item lg={2} sm={4} style={s.style12 }>
                                                                    <div>
                                                                        <span style={ s.style13 } >3</span>
                                                                        <span> <img src= { yellowstar } width="12px" /> </span>
                                                                    </div>
                                                                </Grid>
                                                            </Grid>
                                                        </div>
                                                        <div>
                                                            <div  className="eventsreviewsdiv2" style={ s.style14 }  >
                                                                Good turf even though it has become a little old. But still worth a game. Fast paced and frantic. 
                                                                A little on the higher side for costs.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Grid>
                                            </div>
                                        </Grid>
                                    </div>
                                    
                                    <div  style={{ display: 'flex',fontSize:14, borderRadius: 12,justifyContent: 'center', alignItems: 'center',color: '#0956E6', marginTop: 20,padding: 5, fontWeight: 700 }}>
                                        <span className="eventsviewmore" >
                                            <a href="#">VIEW MORE</a> 
                                        </span>
                                    </div>

                                </div>
                            </Paper>
                        </div>
                    </Grid>
                </div>
        )
    }
}

export default Eventsreviews