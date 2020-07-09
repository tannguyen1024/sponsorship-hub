import React, { Component } from 'react';
import { connect } from 'react-redux';

//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';

class TEMPLATE extends Component {
    render() {
        // allows us to connect this.props to styles 
        const { classes } = this.props;
        return (
            <h1>TEMPLATE</h1>
        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
TEMPLATE.propTypes = {classes: PropTypes.object.isRequired};

// const putStateOnProps = reduxState => ({reduxState});
export default connect()(withStyles(styles)(TEMPLATE));