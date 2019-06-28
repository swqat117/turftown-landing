import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import android from '../../../Assets/Images/android.png'
import apple from '../../../Assets/Images/apple.png'
import homephone from '../../../Assets/Images/homephone.png'
import Fade from 'react-reveal/Fade'; 


class HomePage1 extends Component{
    render(){
        return(
            <div style={{ backgroundColor: '#0956E6', padding: '5%'}}  className=" homeback1" >
                <Grid container className="homeone" >
                    <Grid lg={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <Fade delay={250} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    
                        <img src={ homephone } width="272px" height="530px" />
                    </Fade>
                    
                    </Grid>
                    <Grid lg={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}} >          
                    <Fade right delay={500}  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        
                        <div className="homediv2" style={{ display: 'flex', flexDirection: 'column', flex: 1,width: '100%', justifyContent: 'flex-end', alignItems: 'flex-start', paddingTop: '10%'}} >
                            <div className="homediv3" style={{ fontSize: 38, fontWeight: 700, background: '#0956e6', width: '90%' }} >
                                Your Friendly Neighbourhood Sports App
                            </div>
                            <div className="homediv4" style={{ width: '90%', fontWeight: 600, background: '#0956e6', fontSize: 16, paddingTop: 18, paddingBottom: '5%' }} >
                                A revolutionary neighbourhood sporting experience.
                            </div>
                        </div>

                        <div style={{ display: 'flex', flex: 1}} >
                            <div className="homediv1" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start'}} >
                                <img className= "homeimg1" src={ android } width="25%" style={{ background: '#0956e6', background: '#0956e6', paddingBottom: 10 }} />
                                <img className="homeimg2" src={ apple } width="25%" style={{ paddingLeft: 10, background: '#0956e6', background: '#0956e6', paddingBottom: 10 }} />
                            </div>
                      
                        </div>   
                    </Fade>

                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default HomePage1