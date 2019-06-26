import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import ball from '../../../../Assets/Images/footballcut.png'
import star from '../../../../Assets/Images/star.png'
import court from '../../../../Assets/Images/court.png'
import arrow from '../../../../Assets/Images/arrow.png'
import Paper from '@material-ui/core/Paper';
import '../../../style.css'
import axios from 'axios'


const axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token':
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTVlZTFhNTkyMzkxNzEzZWJkNTBiZCIsInVzZXJuYW1lIjoiYWtzaGF5QGdtYWlsLmNvbSIsInJvbGUiOiJzdXBlcl9hZG1pbiIsImlhdCI6MTU1Nzk5MTc5NX0.Cg14_ROhN155273K1xdWGPfbB7B5ztdHmobxoOFaOgk'
    }
  };

const s = {

    style1: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#0956e6', 
        paddingBottom: 40, 
        paddingTop: 10
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
        fontSize:20, 
        borderRadius: 12,
        justifyContent: 'center', 
        alignItems: 'center',
        color: '#0956e6', 
        padding: 8, 
        backgroundColor: '#F4F5F8', 
        fontWeight: 700
    },

    style5: {
        display: 'flex', 
        flexDirection: 'row', 
        padding: 16
    },

    style6: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    style7: {
        display: 'flex', 
        flexDirection: 'column', 
        flex:1
    },

    style8: {
        display: 'flex', 
        flex:1,
        alignItems: 'flex-end'
    },

    style9: {
        fontSize: 16, 
        letterSpacing: 0.5, 
        color: '#0956e6', 
        fontWeight: 700
    },

    style10: {
        fontSize: 16, 
        letterSpacing: 0.5, 
        color: '#6D6D6D', 
        fontWeight: 600 
    },

    style11: {
        display: 'flex', 
        flex:1, 
        fontSize: 14, 
        letterSpacing: 0.5 , 
        color: '#6D6D6D', 
        fontWeight: 600
    },

    style12: {
        display: 'flex', 
        flexDirection: 'column', 
        color: '#6D6D6D'
    },

    style13: {
        display: 'flex', 
        flex:1, 
        alignItems: 'flex-end', 
        justifyContent: 'center', 
        fontSize: 16
    },

    style14: {
        paddingRight: 1, 
        fontWeight: 700
    },

    style15: {
        display: 'flex', 
        flex:1, 
        justifyContent: 'center', 
        fontSize: 12
    },

    style16: {
        color: '#6D6D6D', 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'flex-end', 
        paddingRight: 40
    },

    style17: {
        borderRadius: 10
    }
}

class Venuecard extends Component{

    componentDidMount(){
        axios
            .post(`http://159.65.146.12:3050/api/venue/review/5cffa5bd244929058288974d` ,{},axiosConfig)
                .then(res=>{
                    console.log("Ghants",res)
                })
                .catch(err=>{
                    console.log("AXIOS ERROR", err.response)
                })
    }

    render(){
        return(
            <div style={ s.style1 }>
            <Paper style={ s.style2 } className="paperstyling">
                <div  style={ s.style3 }> 
                    <div  style={ s.style4 }>
                        <span>
                            VENUE
                        </span>
                    </div>

                    <div  style={ s.style5 }>
                        <Grid container>
                            <Grid container xs={12} md={12} lg={3} sm={12} style={ s.style6 }>
                                <img className="imagecourt" src={ this.props.history.location.state.data.event.event_cover_picture[1] } style={ s.style17 } width="236px" height="143px" />
                            </Grid>


                            <Grid container md={12} lg={4} sm={12} xs={12} style={ s.style7 }>
                                <div  className="venueone" style={ s.style8 }>
                                     <span>
                                         <span style={ s.style9 }>TIKI TAKA, </span> <span style={ s.style10 }>KILPAUK</span>
                                     </span>
                                </div>
                                <div className="venueone" style={ s.style11 } >
                                    <span>
                                        17, Lakshmi Street, Kilpauk, Chennai
                                    </span>
                                </div>
                            </Grid>

                            <Grid container md={12} lg={2} sm={12} xs={12} style={ s.style12 }>
                                <div className="votes votestop" style={ s.style13 }>
                                    <span>
                                        <span style={ s.style14 }>4.3</span>  <img src= {star} width="14px" height="13px"/>
                                    </span>
                                </div>
                                <div className="votes" style={ s.style15 }>
                                    <span>
                                        221 votes
                                    </span>
                                </div>
                            </Grid>

                            <Grid className="arrow" container md={12} lg={3} sm={12} xs={12} style={ s.style16 }>
                                <img src={arrow} width="13" height="20px" />
                            </Grid>

                        </Grid>
                    </div>

                </div>


            </Paper>
        </div>
        )
    }
}

export default Venuecard;
