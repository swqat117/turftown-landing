import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import {venues} from '../../../../data/venueslist'
import axios from 'axios'
import bluestar from '../../../../Assets/Images/bluestar.png'
import grayrupee from '../../../../Assets/Images/grayrupee.png'
import person from '../../../../Assets/Images/person.png'
import history from '../../../history'
import { Redirect, Link } from 'react-router-dom';

const s = {
    
    style1: {
        backgroundColor: '#0956e6',
        display: 'flex', 
        justifyContent: 'center',
        color: '#6d6d6d'
    },

    style2: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '90%'
    },
    
    style3: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingBottom: 50
    },

    style4: {
        backgroundColor: '#F4F5F8', 
        display: 'flex', 
        flexDirection: 'column', 
        width: 332,
        borderRadius: 7,
        cursor: 'pointer'
    },

    style5: {
        display: 'flex',
        flex:2, 
        flexDirection: 'row', 
        marginTop: -5, 
        padding: 10
    },

    style6: {
        color:'#0956e6', 
        // color: 'black',
        fontWeight: 700
    },

    style7: {
        display: 'flex', 
        justifyContent: 'flex-end', 
        alignItems: 'center', 
        flex: 1
    },

    style8: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    style9: {
        display: 'flex', 
        flexDirection: 'row',
        padding: 10
    },

    style10: {
        backgroundColor: '#E4E5E7',
        color: '#6d6d6d'
    },

    style11: {
        display: 'flex',
        flex:1, 
        alignItems:'center'
    },

    style12: {
        display: 'flex', 
        flex: 1, 
        justifyContent: 'flex-end', 
        alignItems: 'center',
        color: '#6d6d6d'
    }
}

const axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token':
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTVlZTFhNTkyMzkxNzEzZWJkNTBiZCIsInVzZXJuYW1lIjoiYWtzaGF5QGdtYWlsLmNvbSIsInJvbGUiOiJzdXBlcl9hZG1pbiIsImlhdCI6MTU1Nzk5MTc5NX0.Cg14_ROhN155273K1xdWGPfbB7B5ztdHmobxoOFaOgk'
    }
  };

class Listvenuesgrids extends Component{

    state = {
        venues: venues,
        main: [],
    }

    componentDidMount(){
        axios.post('http://159.65.146.12:3040/api/admin/venue',{},axiosConfig)
            .then(res => {
                this.setState({
                    main: res.data.data
                })
            })
            .catch( err =>{
                console.log("Error", err.response)
            })
    }

    handleClick = (object) => {
        history.push({
            pathname: '/venue',
            state: { data: object } 
        })     
        this.props.toggle()
    }

    render(){
            return(
                <div className="listvenuesdiv1" style={ s.style1 } >
                    <Grid container style={ s.style2 }>
                     
                    {this.state.main.length  >0 &&  
                    this.state.main.map(venue =>(                                
                            <Grid className="listvenuesgrid1" item lg={4} md={6} style={ s.style3 }>
                                    <div className="listvenuesdiv2" style={ s.style4 } onClick={()=> this.handleClick(venue) }>
                                        <div>
                                            <img className="listvenuesimage" src= { venue.venue.venue_cover_picture } width="332px" height="135px" />
                                        </div>

                                        <div style={ s.style5 } >
                                            <div>
                                                <span style={ s.style6 } > { venue.venue.name.substring(0,11) }  </span> <span className="venueslistgrid" >{ venue.venue.name.substring(11) }</span>
                                            </div>

                                            <div style={ s.style7 } >
                                                <Grid item>
                                                    <span style={{ color: '#0956e6', fontWeight: 700 }} > {venue.rating} </span>
                                                    <img src={ bluestar } width="12px" height="12px" />
                                                </Grid>
                                            </div>
                                        </div>

                                        <div style={ s.style8 } >
                                            <div className="gameinfoline" style={{ backgroundColor: '#c8c4c4' }} ></div>
                                        </div>

                                        <div style={ s.style9 } >
                                            <div className="venueslistgrid venueslistgridborder" style={ s.style10 } >
                                                <div style={ s.style11 }>
                                                    <img src= { grayrupee} width="7.5px" height="9.9px" /> <span > 200 / </span>
                                                    <img src= { person } width="10px" height="10px" />
                                                </div>
                                            </div>
                                            <div style={ s.style12 } >
                                                <span  className="venueslistgrid" style={{ color: '#6d6d6d', fontWeight: 600 }} > { venue.venue.review ? venue.venue.review.length : "0" } Reviews</span>                                            
                                            </div>
                                        </div>

                                    </div>
                            </Grid>

                    ))}
                
                    </Grid>
                </div>
           
        )
    }
}


export default Listvenuesgrids