import React, { Component } from 'react'
import logo from '../Assets/Images/Logo.png'
import facebook from '../Assets/Images/facebook.png'
import instagram from '../Assets/Images/instagram.png'
import twitter from '../Assets/Images/twitter.png'
import apple from '../Assets/Images/apple.png'
import android from '../Assets/Images/android.png'
import Grid from '@material-ui/core/Grid';
import './style.css'


const s = {

    style1: {
        backgroundColor: '#0745ba'
    },

    style2: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    style3: {
        display: 'flex', 
        justifyContent: 'flex-end', 
        alignItems: 'center'
    }
}

class Footer extends Component{
    render(){
        return(
            <Grid container  style={ s.style1 } className="mainfooter">
                <Grid item md={2} sm={12} style={ s.style2 }>
                    <img src={logo} alt="Hellloo" className="footerlogo" width="55%"  />                        
                </Grid>
                <Grid container className="gridfooter2" md={2} sm={12} style={ s.style2 }>
                    Email:
                    support@turftown.in
                </Grid>
                <Grid container className="gridfooter3" md={2} sm={12} style={ s.style2 }>
                    Contact: 
                    +91 8754490508
                </Grid>
                <Grid container md={6} sm={12} className="ftwo gridfooter4" style={ s.style3 }>
                    <Grid item md={12} sm={12} className="innerfooterone">
                        <span className="follow" ><b>Follow us on</b></span>  
                        <img src= { facebook } className="footicon" height="40px" width="40px"/>
                        <img src= { instagram } className="footicon" height="40px" width="40px"/>
                        <img src= { twitter } className="footicon" height="40px" width="40px"/>                        
                    </Grid>
                    <Grid item md={12} sm={12} className="innerfootertwo">
                        <Grid item md={12} sm={12} className="lastlogone"> 
                            <a href="#"><img src = { apple } className="footlogo footlogo1"/></a>
                        </Grid>
                        <Grid item md={12} sm={12} className="lastlogotwo"> 
                            <a href="#"><img src = { android } className="footlogo" /></a>                                
                        </Grid>
                    </Grid>
                </Grid>
            </Grid> 
        )
    }
}


export default Footer