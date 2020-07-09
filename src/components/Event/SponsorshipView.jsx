import React, { Component } from 'react';
import { connect } from 'react-redux';
import SponsorshipPackage from './SponsorshipPackage';

//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper} from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';

class SponsorshipView extends Component {

    state = {
        sponsorship: [],
        openModal: false,
    }

    componentDidUpdate(prevProps) {
        if (prevProps.oneEvent.sponsorship != this.props.oneEvent.sponsorship) {
            this.setState({
                sponsorship: this.props.oneEvent.sponsorship
            })
        }
        //scroll to top of page on load
        window.scrollTo(0, 0);
    }

    render() {
        // allows us to connect this.props to styles 
        const { classes } = this.props;
        return (
            <Box my={2}>
                <Box className={classes.margin}>
                    <Grid container justify="space-evenly">
                        <Grid item md={10}>
                            <Box mb={3}>
                                <Typography variant="h4">Sponsorship</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container justify="space-evenly">
                        <Grid item md={8}>
                            <Paper>
                                <TableContainer>
                                    <Table>
                                        <TableHead className="DemoBackground">
                                            <TableRow>
                                                <TableCell>Sponsor Image</TableCell>
                                                <TableCell>Sponsorship Opportunity</TableCell>
                                                <TableCell>Price</TableCell>
                                                <TableCell>Details</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>

                                            {/* Will be populated my with map*/}
                                            {this.state.sponsorship.map((item, index) =>
                                                <TableRow key={index}>
                                                    <SponsorshipPackage item={item} />
                                                </TableRow>
                                            )}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
SponsorshipView.propTypes = { classes: PropTypes.object.isRequired };

const putStateOnProps = reduxState => ({
    oneEvent: reduxState.oneEvent
});

export default connect(putStateOnProps)(withStyles(styles)(SponsorshipView));