import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import winners from '../../../../Assets/Images/winners.png'
import runners from '../../../../Assets/Images/runners.png'
import rupee from '../../../../Assets/Images/rupee.png'

const s = {

    style1: {
        backgroundColor: '#0745ba'
    },

    style2: {
        display: 'flex', 
        flex:1 , 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 16, 
        fontSize: 20, 
        fontWeight: 700
    },

    style3: {
        display: 'flex', 
        flex:1 , 
        flexDirection: 'column'
    },
    
    style4: {
        display: 'flex', 
        flex:1, 
        justifyContent: 'flex-end', 
        padding: 40
    },

    style5: {
        display: 'flex', 
        flex:1 , 
        flexDirection: 'column' 
    },

    style6: {
        display: 'flex', 
        flex:1 , 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingTop: 26, 
        fontSize: 18, 
        letterSpacing: 0.5, 
        fontWeight: 600
    },

    style7: {
        display: 'flex', 
        flex:1 ,
        justifyContent: 'center', 
        alignItems: 'center', 
        fontWeight: 600
    },

    style8: {
        display: 'flex', 
        flex:1, 
        justifyContent: 'flex-start', 
        padding: 40
    },

    style9: {
        paddingLeft: 3
    }
}

class Bountyvenue extends Component{
    render(){ 
        return(
            <div style={ s.style1 }>
                <div style={ s.style2 }>
                    BOUNTY
                </div>
                
                <div style={ s.style3 }>
                    <Grid container>
                        <Grid item xs={6} md={6} lg={6} sm={6} style={ s.style4}>
                            <div>
                                <div style={ s.style5 }>
                                    <img src = { winners } width="85px" height="79px" />
                                </div>
                                <div style={ s.style6 }>
                                    Winners
                                </div>
                                <div style={ s.style7 }>
                                    <img src={ rupee } width="8px" height="11px" /> <span style={ s.style9 }>{ this.props.history.location.state.data.format.winner_fee }</span> 
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6} md={6} lg={6} sm={6} style={ s.style8 }>
                            <div>
                                <div style={ s.style5 }>
                                    <img src = { runners } width="85px" height="79px" />
                                </div>
                                <div style={ s.style6 }>
                                    Runners
                                </div>
                                <div style={ s.style7 }>
                                    <img src={ rupee } width="8px" height="11px" /> <span style={ s.style9 }>{ this.props.history.location.state.data.format.runner_up }</span> 
                                </div>
                            </div>
                        </Grid> 
                    </Grid>
                </div>                
            </div>
        )
    }
}

export default Bountyvenue