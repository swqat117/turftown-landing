import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import group from '../../../../Assets/Images/group.png'
import noofplayers from '../../../../Assets/Images/noofplayers.png'
import halftime from '../../../../Assets/Images/halftime.png'
import smallicon from '../../../../Assets/Images/smallicon.png'
import call from '../../../../Assets/Images/call.png'
import '../../../style.css'

const s ={
    style1: {
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#0956e6', 
        paddingBottom: 40, 
        paddingTop: 40
    },

    style2: {
        backgroundColor: 'white'
    },

    style3: {
        display: 'flex', 
        flexDirection: 'column'
    },

    style4: {
        display: 'flex',
        borderRadius: 12,
        flex:1, 
        fontSize:20, 
        justifyContent: 'center', 
        alignItems: 'center',
        color: '#0956e6', 
        padding: 8 , 
        backgroundColor: '#F4F5F8', 
        fontWeight: 700
    },

    style5: {
        display: 'flex', 
        flexDirection: 'row', 
        padding: 55
    },

    style6: {
        display: 'flex', 
        flex:1, 
        flexDirection: 'column'
    },
    
    style7: {
        display: 'flex', 
        justifyContent: 'flex-end', 
        alignItems: 'center', 
        paddingBottom: 26, 
        paddingRight: 20
    },

    style8: {
        display: 'flex', 
        fontSize: 18, 
        justifyContent: 'flex-end', 
        alignItems: 'center', 
        color: '#6D6D6D', 
        fontWeight: 600
    },

    style9: {
        paddingBottom: 33
    },

    style10: {
        display: 'flex', 
        flexDirection: 'column', 
        flex: 1
    },

    style11: {
        display: 'flex', 
        fontSize: 18,
        justifyContent: 'center', 
        alignItems: 'center' , 
        color: '#6D6D6D', 
        fontWeight: 600
    },

    style12: {
        display: 'flex', 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        paddingBottom: 24 , 
        paddingLeft: 40
    },

    style13: {
        display: 'flex', 
        fontSize: 18, 
        justifyContent: 'flex-start', 
        alignItems: 'center' , 
        color: '#6D6D6D', 
        fontWeight: 600
    },

    style14: {
        display: 'flex', 
        fontSize: 18,
        justifyContent: 'flex-start', 
        alignItems: 'center' , 
        color: '#6D6D6D', 
        paddingLeft: 27, 
        fontWeight: 600
    },

    style15: {
        display: 'flex', 
        justifyContent: 'center'
    },

    style16: {
        color:'#4A4A4A', 
        display: 'flex',
        flex:1, 
        flexDirection: 'column', 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    style17: {
        marginBottom: 20,  
        fontSize: 18,
        paddingTop: 30, 
        fontWeight: 600
    },

    style18: {
        color:'#4A4A4A', 
        fontSize: 18, 
        marginBottom: 50, 
        fontWeight: 600
    },

    style19: {
        display: 'flex',
        flex:1, 
        flexDirection: 'column',
        margin: 30, 
        fontSize: 18
    },

    style20: {
        display: 'flex',
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 20, 
        fontWeight: 600
    },
    
    style21: {
        display: 'flex',
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
}

class Gameinfo extends Component{
    render(){
        return(
            <div style={ s.style1 }>
                <Paper style={ s.style2 } className="gameinfostyle">
                    <div style={ s.style3 }> 
                        <div  style={ s.style4 }>
                            <span>
                                GAME INFO
                            </span>
                        </div>
                    
                        <div className="divgameinfo gameimg1" style={ s.style5 }>
                            <Grid container>
                                <Grid container md={4} lg={4} sm={4}>
                                    <div style={ s.style6 }>
                                        <div className="gameinfo1" style={ s.style7 }>
                                            <img className="halftimeimg" src={halftime} width="70px" height="88px" />
                                        </div>
                                        <div className="gameinfo1 gameinfotext" style={ s.style8 }>
                                            Half Length
                                        </div>
                                    </div>
                                </Grid>

                                <Grid container md={4} lg={4} sm={4}>
                                    <div style={ s.style6 }>
                                        <div className="gameinfo1 gameimg1" style={ s.style9 }>
                                            <img className="noofplayersimg" src={ noofplayers } width="85px" height="67px" />
                                        </div>
                                        <div className="gameinfotext" style={ s.style10 }>
                                            <div  className="gameinfo1 " style={ s.style11 }>
                                                5 Players
                                            </div>
                                            <div className="gameinfo1 " style={ s.style11 }>
                                                3 Substitutes
                                            </div>
                                        </div>
                                    </div>
                                </Grid>

                                <Grid container md={4} lg={4} sm={4}>
                                    <div style={ s.style6 }>
                                        <div className="gameinfo1 gameimg1" style={ s.style12 }>
                                            <img className="groupimg" src={ group } width="74" height="76" />
                                        </div>
                                        <div className="gameinfo1 gameinfotext" style={ s.style10 }>
                                            <div className="gameinfo1" style={ s.style13 }>
                                                Group & Knockout
                                            </div>
                                            <div className="gameinfo1 gameinfogroup" style={ s.style14 }>
                                                Groups of 4
                                            </div>
                                        </div>
                                    </div>
                                </Grid>

                            </Grid>
                        </div>
                        <div style={ s.style15 } >
                            <div className="gameinfoline"></div>
                        </div>

                        <div className="gameinfotextbottom" style={ s.style16 }>
                            <div className="gameinfofontchange gamemarginalter" style={ s.style17 }>
                                <span><img className="smallicon" src={ smallicon } width="7px" /></span>  All players must carry valid ID cards and must be born on or after 5th Jan, 2002
                            </div>
                            <div className="gameinfofontchange" style={ s.style18 }>
                            <span><img className="smallicon" src={ smallicon } width="7px" /></span> Teams must arrive 15 mins prior to their matches
                            </div>
                        </div>
                    </div>
                </Paper>

                <div style={ s.style19 }>
                    <div className="organised" style={ s.style20 }>
                        ORGANISED BY TIKI TAKA
                    </div>
                    <div style={ s.style21 }>
                        <a href="#"><img className="callbutton" src={ call } width="98px" height="43px" /></a> 
                    </div>
                </div>

            </div>
        )
    }
}

export default Gameinfo