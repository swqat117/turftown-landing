import React,{ Component } from 'react'
import Category from '../Components/Venues_List_Category'


class Listvenues extends Component{
    state ={
        courtSelected:"",
        display: false,
        final: true
    }

    handleclick = (event) => {
        this.props.setSport(true,event)
    }



    render(){
        return(
            <div >
                <Category register = { this.handleclick } leave = { this.props.leave } />
            </div>
        )
    }
}


export default Listvenues;