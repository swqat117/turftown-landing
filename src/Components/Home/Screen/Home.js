import React, { Component } from 'react';
import HomePage1 from '../Components/Home_AppPage1'
import HomePage2 from '../Components/Home_AppPage2'
import HomePage3 from '../Components/Home_AppPage3'
import HomePage4 from '../Components/Home_AppPage4'
import '../../style.css'
import HomePage5 from '../Components/Home_AppPage5';



class Home extends Component{
    render(){
        return(
        <div className="main">
            <HomePage1 />
            <HomePage2 />
            <HomePage3 />
            <HomePage4 />
            <HomePage5 />
        </div>
        )
    }
}

export default Home