import React, { Component } from 'react';
import { connect } from 'react-redux';

//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Box } from '@material-ui/core';
// MATERIAL ICONS
import PlaceIcon from '@material-ui/icons/Place';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';

class Venue extends Component {
    render() {
        // allows us to connect this.props to styles 
        const { classes } = this.props;
        return (
            <Box className={classes.box_grey} my={2}>
                <Box className={classes.margin}>
                    <Grid container justify="space-evenly">
                        <Grid item md={4}>
                            {/* Venue Name */}
                            <Box mb={3}>
                                <Typography variant="h5"><a rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }} href={`http://maps.google.com/?q=${this.props.oneEvent.address} ${this.props.oneEvent.city} ${this.props.oneEvent.state}`} target="_blank"><h2>{this.props.oneEvent.name}</h2></a></Typography>
                            </Box>
                            {/* Capacity Need to fix spacing */}
                            {/* venue_capacity */}
                            <Typography>Capacity: {this.props.oneEvent.venue_capacity}</Typography>
                            <Box mb={2}>
                                <PlaceIcon />
                                <Typography display="inline">Address</Typography>
                                {/* Address */}
                                <a rel="noopener noreferrer" style={{ textDecorationColor: '#f45255', color: 'black'}} href={`http://maps.google.com/?q=${this.props.oneEvent.address} ${this.props.oneEvent.city} ${this.props.oneEvent.state}`} target="_blank"><Typography>{this.props.oneEvent.address}</Typography>
                                    <Typography>{this.props.oneEvent.city && this.props.oneEvent.city + ', '} {this.props.oneEvent.state} {this.props.oneEvent.zipcode}</Typography></a>
                            </Box>
                        </Grid>
                        <Grid item md={4}>
                            <Box p={2} my={2} className={classes.eventTextBoxes}>
                                {/* venue_notes */}
                                <Typography className={classes.whiteSpace}>
                                    {this.props.oneEvent.venue_notes}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>    
            </Box>
        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
Venue.propTypes = { classes: PropTypes.object.isRequired };

const putStateOnProps = reduxState => ({
    oneEvent: reduxState.oneEvent
});

export default connect(putStateOnProps)(withStyles(styles)(Venue));