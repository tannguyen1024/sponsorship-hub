import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';
import Header from '../Header/Header';

class Error extends Component {
    render() {
        // allows us to connect this.props to styles 
        return (<div>
            <Header /><center>
            <h1>You are not authorized to view this page.</h1>
            <h3>Please wait for Sponsorship Hub to approve you.</h3>
            <Paper style={{width: 300, padding: 15}}><Typography variant="h6">Contact Us</Typography>
                    <br />Email: <a href={`mailto:lamportkn@gmail.com`} target="_blank" rel="noopener noreferrer"><Typography style={{ color: 'black', fontWeight: '600' }} color="secondary">lamportkn@gmail.com</Typography></a>
                    <br />Phone: <a href={`tel:612-100-1000`} target="_blank" rel="noopener noreferrer"><Typography style={{ color: 'black', fontWeight: '600' }} color="secondary">612-100-1000</Typography></a>
                    </Paper>
                    <Link to="/home"><p>Return to Home Page</p></Link></center>
        </div>
        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
Error.propTypes = {classes: PropTypes.object.isRequired};

export default connect()(withStyles(styles)(Error));