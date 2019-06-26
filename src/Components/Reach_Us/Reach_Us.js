import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import venueicon from '../../Assets/Images/venueicon.png'
import eventicon from '../../Assets/Images/eventicon.png'
import chat from '../../Assets/Images/chat.png'
import reachusimg1 from '../../Assets/Images/reachusimg1.png'
import reachusimg2 from '../../Assets/Images/reachusimg2.png'

class ReachUs extends Component{
    render(){
        return(
            <div className="reachusdiv1" style={{ backgroundColor: '#0956E6', paddingTop: 64, display: 'flex', flexDirection: 'column', paddingLeft: 40, paddingRight: 40, paddingBottom: 40 }} >
                <div className="reachusdiv2" style={{ display: 'flex', flex:1, fontSize: 40, fontWeight: 700, paddingBottom: 40, justifyContent: 'center', alignItems: 'center'}} >
                    Get in touch with us!
                </div>
                <div style={{ display: 'flex', flex:1, flexDirection: 'column' }} >
                    <Paper className="reachuspaper" style={{display: 'flex', flexDirection: 'column', padding: 30, justifyContent: 'center', alignItems: 'center' }} >
                        
                        <div className="reachusdiv3" style={{ display: 'flex', flex:1, color:'#4A4A4A', fontSize: 32, justifyContent: 'center', alignItems: 'center', fontWeight: 600, paddingBottom: 40}} >
                            <img src={venueicon} width="50px" height="40px" style={{ paddingRight: 16 }} />
                            Looking to list your venue on TURF TOWN?
                        </div>
                        
                        <div className="reachusdiv4" style={{ display: 'flex', flex:1, width: '90%', paddingBottom: 20, color: '#4A4A4A', fontSize: 20}} >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>

                        <div className="reachusdiv6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 40 }} >
                            <img src={ reachusimg2 } className="reachusimg2" />
                        </div>

                        <div className="gameinfoline" ></div>

                        <div className="reachusdiv2" style={{ display: 'flex', flex:1, color: '#4A4A4A', fontWeight: 600, paddingBottom: 40, justifyContent: 'center', alignItems: 'center', fontSize: 32, paddingTop: 40 }} >
                            <img src={ eventicon } width="35px" height="43px" style={{ paddingRight: 16 }} />
                            Looking to publish your sporting event on TURF TOWN?
                        </div>
                        
                        <div className="reachusdiv4" style={{ display: 'flex', flex:1,width: '90%', paddingBottom: 40, color: '#4A4A4A', fontSize: 20 }} >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={ reachusimg1 } className="reachusimg1" />
                        </div>

                    </Paper>                    
                        <div style={{ display: 'flex',  flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >              
                        <div style={{ display: 'flex', flex: 1, fontWeight: 600,fontSize: 30, paddingTop: 40, paddingBottom: 38 }} >
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',paddingRight: 18 }} >
                                <img src={ chat } height="33px" width="40px" className="reachusimg3" /> 
                            </div>
                            <div className="reachusdiv3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                Drop a line here
                            </div>
                        </div>

                        <div className="reachusdiv7" style={{ display: 'flex',flexDirection: 'column', flex:1, padding: 40,marginBottom:30, width: '100%', backgroundColor: '#F4F5F8', color: '#4A4A4A', fontWeight: 600,borderRadius: 8 }}>
                            <div className="reachusdiv11" style={{ display: 'flex', paddingBottom: 24}} >
                                <Grid container>
                                    <Grid className="reachusgrid2" item lg={6} md={12} sm={12} style={{ display: 'flex' }} >
                                        <div className="reachusdiv10" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 18 }} >Name:</div>  
                                        <div style={{ display: 'flex', flex:2, justifyContent:'center', alignItems: 'center'}} ><input className="reachusdiv12" type="text" className="reachtext" style={{ width: '90%', backgroundColor: 'white'  }} /></div> 
                                    </Grid>
                                    <Grid className="reachusgrid1" item lg={6} md={12} sm={12} style={{ display: 'flex', paddingLeft: 30 }} >
                                        <div className="reachusdiv9" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 18}} >Email ID:</div>  
                                        <div style={{ display: 'flex', flex:2, justifyContent:'center', alignItems: 'center'}} ><input className="reachusdiv12" type="email" className="reachtext" style={{ width: '90%', backgroundColor: 'white'  }} /></div>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className="reachusdiv8" style={{ display: 'flex' }} >
                                <div style={{ fontSize: 18, paddingRight: 20, marginLeft: -20 }} >Message:</div>
                                <div style={{ display: 'flex', flex:2 }} ><textarea></textarea></div> 
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: 20, paddingTop: 20 }} >
                                <button className="reachusbutton" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} >SUBMIT</button>
                            </div>
                        </div>

                        <div className="reachusdiv5" style={{ display: 'flex', flexDirection: 'column', width: '35%', paddingTop: 40 }} >
                            <div style={{ display: 'flex',width: '80%' ,flex:1,justifyContent: 'center', alignItems: 'center', fontSize: 30, fontWeight: 600, paddingBottom: 20 }} >
                                Contact Us @
                            </div>
                            <div style={{ display: 'flex', flex:1, paddingBottom: 10  }} >
                                <span style={{ display: 'flex', flex:1, justifyContent: 'center', alignItems: 'center', fontWeight: 600, fontSize: 20}}>Email ID: </span>
                                <span style={{ display: 'flex', flex:2, justifyContent: 'flex-start', alignItems: 'center'}}> support@turftown.in </span>
                            </div >
                            <div style={{ display: 'flex', flex:1, paddingBottom: 10  }} >
                                <span style={{ display: 'flex', flex:1, justifyContent: 'center', alignItems: 'center', fontWeight: 600, fontSize: 20}}>Phone: </span>
                                <span style={{ display: 'flex', flex:2, justifyContent: 'flex-start', alignItems: 'center'}}>+91 8754490508</span>
                            </div>
                            <div style={{ display: 'flex', flex:1, paddingBottom: 10  }}>
                                <span style={{ display: 'flex', flex:1, justifyContent: 'center', alignItems: 'center', fontWeight: 600, fontSize: 20}}>Address</span>
                                <span style={{ display: 'flex', flex:2, justifyContent: 'flex-start', alignItems: 'center'}}>17, Lakshmi Street, Kilpauk, Chennai</span>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default ReachUs