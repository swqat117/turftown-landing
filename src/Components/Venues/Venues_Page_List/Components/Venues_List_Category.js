import React, { Component } from 'react'
import badminton from '../../../../Assets/Images/badminton.png'
import football from '../../../../Assets/Images/football.png'
import cricket from '../../../../Assets/Images/Cricket.png'
import basketball from '../../../../Assets/Images/basketball.png'
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import Explore from '../../Venues_Page_List/Screen/Venues_List'
import { Redirect } from 'react-router'
import history from '../../../history'

class Category extends Component{

    state = {
        display: false,
        link: false,
        show: false,
        type: "",
        keep: this.props.stay
    }

    handleclick = (event) =>{
        this.props.register(event) 
        this.setState({
            link: true,
            type: event,
            show: true,
            keep: true
        })
    }

    render(){
        return(
            <div  className="selectordiv" style={{ backgroundColor: '#063DA4', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 20}}>
                
                { this.state.link && history.push('/explore') }                
                
                <Grid container  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <div className="selector" style={{ display: 'flex',width: '50%', justifyContent: 'center', alignItems: 'center'}}>
                        
                        <Grid className="selectorgrid" item lg={3} onClick={ ()=>this.handleclick("football") } style={
                            this.state.show ? { display: 'none' } : { display: 'block' }
                         }>                        
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'  }}>
                                <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center' }} >
                                     <img src={football} width="30%" /> 
                                </div>
                                <div style={{ paddingTop: 13, fontWeight: 600 }} >
                                    Football
                                </div>
                            </div>
                        </Grid>



                        {/* <Grid className="selectorgrid" item lg={3} onClick={ ()=>this.handleclick("football") } style={ 
                            this.state.type === "football" && this.state.show ? { display: 'block' } : { display: 'none' }
                         }  >                        
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'  }}>
                                <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center' }} >
                                     <img src={football} width="30%" /> 
                                </div>
                                <div style={{ paddingTop: 13, fontWeight: 600 }} >
                                    Football
                                </div>
                            </div>
                        </Grid> */}



                        <Grid className="selectorgrid" item lg={3} onClick={ ()=> this.handleclick("badminton") } style={
                    this.state.show ? { display: 'none' } : { display: 'flex' }
                }  >
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'  }}>
                                <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center' }}>
                                    <img src={badminton} width="30%"/>
                                </div>
                                <div style={{ paddingTop: 13, fontWeight: 600 }} >
                                    Badminton
                                </div>
                            </div>
                        </Grid>


                        {/* <Grid className="selectorgrid" item lg={3} onClick={ ()=> this.handleclick("badminton") } style={ 
                            this.state.type === "badminton" && this.state.show ? { display: 'block' } : { display: 'none' }
                        }>
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'  }}>
                                <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center' }}>
                                    <img src={badminton} width="30%"/>
                                </div>
                                <div style={{ paddingTop: 13, fontWeight: 600 }} >
                                    Badminton
                                </div>
                            </div>
                        </Grid> */}


                        <Grid className="selectorgrid" item lg={3} onClick={ ()=> this.handleclick("basketball") } style={
                            this.state.show ? { display: 'none' } : { display: 'flex' }
                        }>
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'  }}>
                                <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center' }}>
                                    <img src={basketball} width="30%"/>
                                </div>
                                <div style={{ paddingTop: 13, fontWeight: 600 }} >
                                    Basketball
                                </div>
                            </div>
                        </Grid>



                        {/* <Grid className="selectorgrid" item lg={3} onClick={ ()=> this.handleclick("basketball") } style={ 
                            this.state.type === "basketball" && this.state.show ? { display: 'block' } : { display: 'none' }
                         }>
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'  }}>
                                <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center' }}>
                                    <img src={basketball} width="30%"/>
                                </div>
                                <div style={{ paddingTop: 13, fontWeight: 600 }} >
                                    Basketball
                                </div>
                            </div>
                        </Grid> */}


                        <Grid className="selectorgrid" item lg={3} onClick={ ()=> this.handleclick("cricket") } style={
                    this.state.show ? { display: 'none' } : { display: 'flex' }
                } >
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'  }}>
                                <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center' }}>
                                    <img src={cricket} width="30%"/>
                                </div>
                                <div style={{ paddingTop: 13, fontWeight: 600 }} >
                                    Cricket
                                </div>
                            </div>
                        </Grid>


                        {/* <Grid className="selectorgrid" item lg={3} onClick={ ()=> this.handleclick("cricket") } style={ 
                            this.state.type === "cricket" && this.state.show ? { display: 'block' } : { display: 'none' }
                         }>
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'  }}>
                                <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center' }}>
                                    <img src={cricket} width="40%"/>
                                </div>
                                <div style={{ paddingTop: 13, fontWeight: 600 }} >
                                    Cricket
                                </div>
                            </div>
                        </Grid> */}

                    </div>
                </Grid>
            </div>
        )
    }
}


export default Category