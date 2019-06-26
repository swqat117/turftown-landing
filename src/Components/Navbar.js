// import React, { Component } from 'react'
// import logo from './../../public/images/Assets/Images/Logo.png'
// import search from './../../public/images/Assets/Images/search.png'
// import './style.css'
// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import { withStyles } from '@material-ui/core/styles';
// import {
//     Link,
//   } from 'react-router-dom';

//   const styles = {
//     '@global': {
//       body: {
//         backgroundColor: "white",
//       },
//       ul: {
//         margin: 0,
//         padding: 0,
//       },
//       li: {
//         listStyle: 'none',
//       },
//     },
//     appBar: {
//       borderBottom: `1px solid red`,
//     },
//     toolbar: {
//       flexWrap: 'wrap',
//     },
//     toolbarTitle: {
//       flexGrow: 1,
//     },
//     link: {
//     //   margin: theme.spacing(1, 1.5),
//     },
//     heroContent: {
//     //   padding: theme.spacing(8, 0, 6),
//     },
//     cardHeader: {
//     //   backgroundColor: theme.palette.grey[200],
//     },
//     cardPricing: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'baseline',
//     //   marginBottom: theme.spacing(2),
//     },
//     footer: {
//     //   borderTop: `1px solid ${theme.palette.divider}`,
//     //   marginTop: theme.spacing(8),
//     //   paddingTop: theme.spacing(3),
//     //   paddingBottom: theme.spacing(3),
//     //   [theme.breakpoints.up('sm')]: {
//     //     paddingTop: theme.spacing(6),
//     //     paddingBottom: theme.spacing(6),
//       },
//     }
// class Navbar extends Component{

//     render(){
//         return(

//                 // <nav className="" style={{    position: 'fixed',
//                 //                                         top: 0,
//                 //                                         width: '100%',
//                 //                                         zIndex: 500,
//                 //                                         backgroundColor: this.props.transform}}>
//                 //     <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , }}  >
//                 //         <a href="#" className="sidenav-trigger" data-target="mobile-links">
//                 //         <i className="material-icons" >menu </i>
//                 //         </a>
//                 //         <ul  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,maxWidth:"45%" }} className="underline right hide-on-med-and-down">
//                 //             <li style={{flex:1,display:'flex' , justifyContent: 'center', alignItems: 'center' }}> <a href="/" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} > <img src={logo} className="navlogo"/> </a> </li>
//                 //             <li  style={{flex:1,display:'flex' , justifyContent: 'center', alignItems: 'center', fontWeight: 600 }}> <a href="/venues">THE APP</a> </li>
//                 //             <li  style={{flex:1,display:'flex' , justifyContent: 'center', alignItems: 'center', fontWeight: 600 }}> <a href="/events">EXPLORE</a> </li>
//                 //             <li  style={{flex:1,display:'flex' , justifyContent: 'center', alignItems: 'center', fontWeight: 600 }}> <a href="/listvenues">THE TEAM</a> </li>
//                 //             <li  style={{flex:1,display:'flex' , justifyContent: 'center', alignItems: 'center', fontWeight: 600 }}> <a href="/listevents">REACH US</a> </li>
//                 //             <li  style={{flex:1,display:'flex' , justifyContent: 'center', alignItems: 'center', fontWeight: 600 }} className="prob"> <a href="#" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} > <img src={search} className="search"/> </a>
//                 //             </li>
//                 //         </ul>
//                 //     </div>
//                 // </nav>

//                 <AppBar position="static" color="default" elevation={0} className={styles.appBar}>
//                 <Toolbar className={styles.toolbar}>
//                   <Typography variant="h6" color="inherit" noWrap className={styles.toolbarTitle}>
//                     Company name
//                   </Typography>
//                   <nav>
//                     <Link to="#" className={styles.link}>
//                       Features
//                     </Link>
//                     <Link to="#" className={styles.link}>
//                       Enterprise
//                     </Link>
//                     <Link to="#" className={styles.link}>
//                       Support
//                     </Link>
//                   </nav>
//                   <Button to="#" color="primary" variant="outlined" className={styles.link}>
//                     Login
//                   </Button>
//                 </Toolbar>
//               </AppBar>
//         )
//     }
// }

// export default withStyles(styles)(Navbar);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { MenuItem } from '@material-ui/core';
import logo from '../Assets/Images/Logo.png';
import { Redirect, Link } from 'react-router-dom';
import Subcategory from './Venues/Venues_Page_List/Components/Venues_List_SubCategory';
import Explore from './Venues/Venues_Page_List/Components/Venues_List_Category';
// import Explore from '../Components/Venues/Venues_Page_List/Components/Venues_List_Category'

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    maxWidth: 100,
    marginLeft: -12
  }
};

class ButtonAppBar extends Component {
  state = {
    isHovering: false,
    tokeep: false
  };

  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
  }

  handleMouseHover = event => {
    this.setState(this.toggleHoverState, () => {});
  };

  handleMouseHoverEnter = event => {
    this.setState({
      isHovering: true
    });
  };
  handleMouseHoverLeave = event => {
    this.setState({
      isHovering: false
    });
  };

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  setSport = event => {
    this.setState({ sport: event });
  };

  toggle = () => {
    this.setState({ sport: '' });
  };

  render() {
    // console.l
    const { classes } = this.props;

    return (
      <div className={classes.root} onMouseLeave={this.handleMouseHoverLeave}>
        <AppBar
          color="primary"
          position="fixed"
          style={{
            top: 0,
            marginBottom: 32,
            backgroundColor: '#0956E6',
            boxShadow: this.props.transform
              ? '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)'
              : 'none'
          }}
        >
          <div>
            <Toolbar
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                maxHeight: 64,
                minHeight: 64,
                maxWidth: '100vw'
              }}
              className="shadows2"
            >
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                style={{ borderRadius: 0 }}
              >
                <a href="/" className="navimage">
                  <img src={logo} width="75%" />
                </a>
              </IconButton>
              <div onMouseEnter={this.handleMouseHoverEnter}>
                <a className="fora" href="#">
                  {' '}
                  EXPLORE{' '}
                </a>
              </div>
              <div>
                <a className="fora" href="/reachus">
                  REACH US
                </a>
              </div>
            </Toolbar>
          </div>
        </AppBar>

        <div
          className={this.state.isHovering ? 'nav_visible' : 'nav_not_visible'}
          style={{
            zIndex: 100,
            top: '64px',
            position: 'fixed',
            maxWidth: '100vw'
          }}
        >
          {' '}
          <Explore
            style={{ background: 'transparent' }}
            stay={this.state.tokeep}
            setSport={this.setSport}
            register={this.setSport}
          />{' '}
        </div>

        <Subcategory
          hover={this.state.isHovering}
          show={this.state.sport}
          toggle={this.toggle}
          sport={this.state.sport}
        />
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
