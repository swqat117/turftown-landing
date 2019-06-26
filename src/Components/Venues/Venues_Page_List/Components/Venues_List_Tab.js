// import React from 'react';
// import {Tabs, Tab} from 'material-ui/Tabs';
// import SwipeableViews from 'react-swipeable-views';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// const styles = {
//   headline: {
//     fontSize: 24,
//     paddingTop: 16,
//     marginBottom: 12,
//     fontWeight: 400,
//   },
//   slide: {
//     padding: 10,
//   },
// };

// export default class TabsExampleSwipeable extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       slideIndex: 0,
//     };
//   }

//   handleChange = (value) => {
//     this.setState({
//       slideIndex: value,
//     });
//   };

//   render() {
//     return (
//         <MuiThemeProvider>
//             <div style={{ backgroundColor: 'brown' }} >

//                 <Tabs
//                 onChange={this.handleChange}
//                 value={this.state.slideIndex}
//                 >
//                     <Tab label="Tab One" value={0} />
//                     <Tab label="Tab Two" value={1} />
//                     <Tab label="Tab Three" value={2} />
//                     <Tab label="Tab Four" value={3} />
//                 </Tabs>

//                 <SwipeableViews
//                 index={this.state.slideIndex}
//                 onChangeIndex={this.handleChange}
//                 >
//                     <div>
//                         <h2 style={styles.headline}>Tabs with slide effect</h2>
//                         Swipe to see the next slide.<br />
//                     </div>
//                     <div style={styles.slide}>
//                         slide n°2
//                     </div>
//                     <div style={styles.slide}>
//                         slide n°3
//                     </div>
//                 </SwipeableViews>

//             </div>
//         </MuiThemeProvider>
//     );
//   }
// }



import React from 'react';
import Listvenuesgrids from './Venues_List_Grid';
// import CourtOption from './CourtOption';

const footballCourts = [{key:'5s',value:"5-A-SIDE"},{key:'7s',value:"7-A-SIDE"},{key:'9s',value:"9-A-SIDE"}];
const basketCourts=[{key:"FullCourt",value:"FullCourt"},{key:"HalfCourt",value:"HalfCourt"}]
const badmintonCourts=[{key:"NonA/C",key:"NonA/C"},{key:"A/C",value:"A/C"}]
const cricketCourts =[{key:"BoxCricket",value:"BoxCricket"},{key:"Nets",value:"Nets"}]

const s = {
  container: {
    flex: 1,
    height: '40px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '16px',
    letterSpacing: '1.07px',
    cursor: 'pointer',
    margin: '5px 5px'
  },
  selected: {
    backgroundColor: '#E8A322',
    color: '#FFFFFF',
  },
  unselected: {
    backgroundColor: '#FFBE43',
    color: '#FFFFFF'
  }
};

class CourtPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courtSelected: '5s',
      courts:''
    };
  }

  updateCourtSelected=(e) => {
    const courtSelected = e;
    if(e){
    this.setState({ courtSelected }, () => {
      this.props.handleChange(e);
    });
  }else {
    // this.props.courtSelected(this.state.courtSelected)
  }
  }
  // componentDidMount(){
  //   this.updateCourtSelected();
  // }
  
  // componentWillReceiveProps =(props) =>{
  //   var that =this;
  //   if(props.sportSelected === "CRICKET" ){
  //     that.setState({courts:cricketCourts,courtSelected:"BoxCricket"})
  //   }
  //   else if(props.sportSelected ==="BASKETBALL"){
  //     that.setState({courts:basketCourts,courtSelected:"FullCourt"})
  //   }
  //   else if(props.sportSelected ==="BADMINTON"){
  //     that.setState({courts:badmintonCourts,courtSelected:"NonA/C"})
  //   }
  //   else{
  //     that.setState({courts:footballCourts,courtSelected:"5s"})
  //   }
  // }
  render() {
    let courts= this.state.courts ? this.state.courts:footballCourts;
    return (
      <div style={s.container}>
        {courts.map(key => (
          <div
            style={{ ...s.container, ...(key.key === this.state.courtSelected && this.state.courtSelected ? s.selected : s.unselected) }}
            key={key.key}
            value={this.state.courtSelected}
            onClick={() => this.updateCourtSelected(key.key)}
          >
            {key.value}
          </div>
        ))}
        {/* {this.state.courtSelected  === "5s" &&
        <Listvenuesgrids />
        } */}
        </div>
      );
  }
};

export default React.memo(CourtPicker);

