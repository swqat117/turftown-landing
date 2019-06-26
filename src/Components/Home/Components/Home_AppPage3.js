import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import homephone from '../../../Assets/Images/homephone.png'
import Fade from 'react-reveal/Fade'; 


class HomePage3 extends Component{
    render(){
        return(
            <div style={{ backgroundColor: '#0956E6', padding: '7%' }}>
                <Grid className="homethree" container>
                    <Grid lg={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} data-aos="fade-left" >
                        {/* <Fade delay={250} > */}
                        <img src={ homephone } width="272px" height="530px" />
                        {/* </Fade> */}
                    </Grid>
                    <Grid lg={6} style={{ display: 'flex', flexDirection: 'column'}} data-aos="fade-right"  >          
                        {/* <Fade right delay={500}> */}
                        <div className="homediv9" style={{ flex:1,display: 'flex', fontWeight: 600, justifyContent: 'flex-start', alignItems: 'flex-end', paddingBottom: '2%' }} >
                            Events
                        </div>
                        <div className="homediv8" style={{ display: 'flex', flexDirection: 'column', flex: 2, width: '60%' }} >
                            <div style={{ fontSize: 38, fontWeight: 700 }} >
                                Get our App!
                            </div>
                            <div className="homediv10" style={{ fontWeight: 600 }} >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </div>
                        </div>
                        {/* </Fade> */}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default HomePage3