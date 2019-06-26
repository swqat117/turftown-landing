import React, { Component } from 'react'
import TabsExampleSwipeable from './Venues_List_Tab'

const s = {
    
    style1: {
        backgroundColor: '#0956E6', 
        display:'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    style2: {
        display: 'flex', 
        flexDirection: 'column', 
        width: '90%',
        padding:40,
    },

    style3: {
        display: 'flex', 
        flex:1,
        paddingBottom: 20
    },

    style4: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'flex-start',
        flex:1, 
        alignItems: 'center', 
        fontWeight: 600,
        fontSize: 18,
        zIndex: 0
    },

    style5: {
        display: 'flex', 
        justifyContent: 'flex-end', 
        alignItems: 'center', 
        flex:1,
        fontWeight: 600,
        fontSize: 18,
        zIndex: 0
    },
    
    style6: {
        display: 'flex', 
        flex:1,
        borderRadius: 5,
        backgroundColor: '#FFBE43',
        boxShadow: '0px 2px 4px -2px black'
    }
}

class Listvenuessports extends Component{
    handleChange =(name)=>{
        console.log("name",name)
        this.props.onChange(name)
    }
    render(){
        return(
            <div style={ s.style1 } >
                <div style={ s.style2 } >
                    <div style={ s.style3 } >
                        <div style={ s.style4 } >
                            Football Venues in Chennai
                        </div>
                        <div style={ s.style5 } >
                            210 Venues 
                        </div>
                    </div>
                        
                    <div style={ s.style6 } >
                        <TabsExampleSwipeable handleChange ={this.handleChange}/>
                    </div>
                </div>
            </div>
        )
    }
}


export default Listvenuessports


