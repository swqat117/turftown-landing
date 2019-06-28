import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home/Screen/Home'
import Event from './Components/Events/Event_Page/Screen/Events'
import Venue from './Components/Venues/Venue_Page/Screen/Venues'
import EventsList from './Components/Events/Events_Page_List/Screen/Events_List'
import ReachUs from './Components/Reach_Us/Reach_Us'
import { Router} from 'react-router-dom'
import history from './Components/history'
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends Component{

  state={
    transform: false     
}

   
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    AOS.init();
}

componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
}

handleScroll = (event) =>{
    this.setState({
      transform: window.pageYOffset  >=  200 ? true : false
    });
}

  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar transform={this.state.transform} />
            <Router history={ history }>
              <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/venue" component={ Venue } />
                <Route path="/event" component={ Event } />
                <Route path="/listevents" component={ EventsList } />
                <Route path="/reachus" component={ ReachUs } />              
              </Switch>
            </Router>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
