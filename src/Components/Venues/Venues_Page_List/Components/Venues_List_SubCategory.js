import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import React, { Component } from 'react'
import venueicons from '../../../../Assets/Images/venueicon.png'
import eventicon from '../../../../Assets/Images/eventicon.png'
import '../../../style.css'
import VenuesListGrid from './Venues_List_Grid'
import VenuesListSports from './Venues_List_Sports'
import EventsListGrid from '../../../Events/Events_Page_List/Components/Events_List_Grid'
import badminton from '../../../../Assets/Images/badminton.png'
import football from '../../../../Assets/Images/football.png'
import cricket from '../../../../Assets/Images/Cricket.png'
import basketball from '../../../../Assets/Images/basketball.png'
import Grid from '@material-ui/core/Grid';


export default class listvenuessubcategory extends Component {
  
  state ={
    courtSelected:"",
    display: false
}

componentDidMount(e){
  this.setState({
      courtSelected : "5s"
  })  
}

onChange=(e)=>{
  this.setState({courtSelected:e})
}   


  render() {
    let x = true
    let check = this.props
    return(
      <div>
        <div  style={{ backgroundColor: '#063DA4', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
          <Grid 
            container 
            style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            className= { this.props.show === "football" ? "forfootball": this.props.show === "badminton" ? "forbadminton" : this.props.show ==="basketball" ? "forbasketball" : this.props.show === "cricket" ? "forcricket" : "" }
          >
            
            <Grid className="selectorgrid" item lg={3} style={ 
                  (x && this.props.show === "football")  ? { display: 'block' } : { display: 'none' }
              }  >                        
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: 20  }}>
                    <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center' }} >
                          <img src={football} width="18%" /> 
                    </div>
                    <div style={{ paddingTop: 8, fontWeight: 600 }} >
                        Football
                    </div>
                </div>
            </Grid>

            <Grid className="selectorgrid" item lg={3} style={ 
                (x && this.props.show === "badminton") ? { display: 'block' } : { display: 'none' }
            }>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: 20   }}>
                    <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center' }}>
                        <img src={badminton} width="18%"/>
                    </div>
                    <div style={{ paddingTop: 8, fontWeight: 600 }} >
                        Badminton
                    </div>
                </div>
            </Grid>

            <Grid className="selectorgrid" item lg={3} style={ 
                (x && this.props.show === "basketball") ? { display: 'block' } : { display: 'none' }
              }>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: 20   }}>
                    <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center' }}>
                        <img src={basketball} width="18%"/>
                    </div>
                    <div style={{ paddingTop: 8, fontWeight: 600 }} >
                        Basketball
                    </div>
                </div>
            </Grid>

            <Grid className="selectorgrid" item lg={3} style={ 
                (x && this.props.show === "cricket") ? { display: 'block' } : { display: 'none' }
              }>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: 20  }}>
                    <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center' }}>
                        <img src={cricket} width="18%"/>
                    </div>
                    <div style={{ paddingTop: 8, fontWeight: 600 }} >
                        Cricket
                    </div>
                </div>
            </Grid>

          </Grid>
        </div>


        <Tabs style={ (this.props.sport === '' || this.props.sport === undefined || this.props.sport == null) ? { display: 'none' } : { display: 'block' } } >
          <TabList style={{ backgroundColor: '#0745BA', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 50 }} >
              <Tab style={{ backgroundColor: '#0745BA', width: '8%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',margin: 20}} >
                <div style={{ paddingRight: 10, fontWeight: 600, color: 'white' }} >
                  VENUES  
                </div>
                <img src={venueicons} width="34%" /> 
              </Tab>
              <Tab style={{ backgroundColor: '#0745BA', width: '8%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',margin: 20 }} >
                <div style={{ paddingRight: 10, fontWeight: 600, color: 'white' }} >
                  EVENTS
                </div>
                <img src={eventicon} width="18%" /> 
              </Tab>
          </TabList>
      


          <TabPanel>
            <VenuesListSports onChange = { this.onChange } />
              {
                  this.state.courtSelected === "5s" &&
                  <VenuesListGrid toggle={this.props.toggle}  />
              }
              {
                  this.state.courtSelected === "7s" &&
                  <div style={{ backgroundColor: 'red' }}> Heiol </div> 
              }
              {
                  this.state.courtSelected === "9s" && 
                  <div style={{ backgroundColor: 'yellow' }} > Again Heiol </div>
              }
          </TabPanel>

          <TabPanel>
            <div style={{ color: 'purple' }}>
              <EventsListGrid toggle={this.props.toggle}  />
            </div>
          </TabPanel>
        </Tabs>
        </div>
      )
  }
}




 