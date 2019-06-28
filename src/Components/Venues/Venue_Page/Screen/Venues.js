import React, { Component } from 'react'
import VenuePoster from '../Components/Venue_Poster'
import VenueInfo from '../Components/Venue_Info'
import VenueCard from '../Components/Venue_Card'
import VenueReviews from '../Components/Venue_Reviews'
import {Helmet} from "react-helmet";
import VenueSlider from '../Components/Venue_Slider'
import history from '../../../history'

const axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token':
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTVlZTFhNTkyMzkxNzEzZWJkNTBiZCIsInVzZXJuYW1lIjoiYWtzaGF5QGdtYWlsLmNvbSIsInJvbGUiOiJzdXBlcl9hZG1pbiIsImlhdCI6MTU1Nzk5MTc5NX0.Cg14_ROhN155273K1xdWGPfbB7B5ztdHmobxoOFaOgk'
    }
  };

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };


class Events extends Component{

    state = {
        venues: []
    }

    render(){
        return(
            <div>
                <Helmet>
                    <title>Venues</title>
                </Helmet>
                <VenuePoster venue_poster = { this.state.venues } history={ history } />
                <VenueInfo venue_info = { this.state.venues } history={ history } />
                <VenueCard venue_card = { this.state.venues } history={ history } />
                <VenueSlider />
                <VenueReviews />
            </div>
        )
    }
}

export default Events