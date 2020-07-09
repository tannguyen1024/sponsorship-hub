import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { Grid, Typography, TextField, Box, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from '../../Style/Style';
import { withStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';

class Nav extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_APPROVAL' });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="nav">
        <Link to="/home">
          <img id="hoverLogo" src='./images/logo_white_drop_shadow.png' height="80vh" alt="Sponsorship Hub"/>
        </Link>
        <div className="nav-right">
          <Link className="nav-link" to="/home/login">
            {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
            {this.props.user.id ? <Button className={classes.btn_create_event}>Home</Button> : <Button color="primary">Login / Register</Button>}
          </Link>
          {/* Show the link to the info page and the logout button if the user is logged in */}
          {this.props.user.access_level === 3 && <Link className="nav-link" to="/admin"><Button className={classes.btn_create_event}>Admin{this.props.approval.access_lvl_0 != 0 && <div className={classes.notification}>(<NotificationsIcon className="notification" style={{ fontSize: '80%' }}/>{this.props.approval.access_lvl_0})</div>}</Button></Link>}
          {this.props.user.id && (
            <>
              {/* <Link className="nav-link" to="/info">
            Info Page
          </Link> */}
              <Button className={classes.coral} style={{fontWeight: '500', fontSize: '125%', textShadow: '0px 1px 2px black'}} onClick={()=>this.props.dispatch({ type: 'LOGOUT' })}>Logout</Button>
              {/* <LogOutButton className="nav-link" /> */}
            </>
          )}
          {/* Always show this link since the about page is not protected */}
          {/* <Link className="nav-link" to="/about">
        About
      </Link> */}
        </div>
      </div>
    )
  }
};

// PropTypes allows us to import style.jsx for use
Nav.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
  user: state.user,
  approval: state.approval,
});

export default connect(mapStateToProps)(withStyles(styles)(Nav));
