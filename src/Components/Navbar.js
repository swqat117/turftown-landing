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
import history from './history'

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
    const { classes } = this.props;

    return (
      <div className={classes.root}>
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
              <div onMouseEnter={this.handleMouseHover}>
                <a className="fora" href="#">
                  EXPLORE
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
            // className={this.state.isHovering ? 'nav_visible' : 'nav_not_visible'}
            style={{
              zIndex: 100,
              top: '64px',
              position: 'fixed',
              maxWidth: '100vw'
            }}
            onMouseLeave = { this.handleMouseHover }
          >
              { this.state.isHovering && 
            <Explore
              style={{ background: 'transparent' }}
              stay={this.state.tokeep}
              isHovering={this.state.isHovering}
              setSport={this.setSport}
              register={this.setSport}
            />
        }

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
