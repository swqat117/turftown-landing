import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import homephone from '../../../Assets/Images/homephone.png'
// import Fade from 'react-reveal/Fade'; 


class HomePage2 extends Component {
    render(){
        return(
            <div style={{ backgroundColor: '#0745BA', padding: '7%'  }}   data-aos="homeback2">
                <Grid container className="hometwo" >
                    <Grid item lg={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} data-aos="fade-right">
                        {/* <Fade left delay={500}> */}
                        <div className="homediv5" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingLeft: 40  }} >
                            <div className="homediv6" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '60%', fontSize: 38, fontWeight: 700}} >
                                Find
                            </div>
                            <div className="homediv7" style={{ width: '60%', fontWeight: 600 }} >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </div>
                        </div>
                        {/* </Fade> */}
                    </Grid>
                    <Grid item lg={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center    ' }} data-aos="flip-left">
                        {/* <Fade delay={250}> */}
                        <img src={ homephone } width="272px" height="530px" />
                        {/* </Fade> */}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default HomePage2