import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from '../Style/Style';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';

class Footer extends Component {
    state = { search: '' }

    render() {
        const { classes } = this.props;
        return (
            <Box>
                <Box className={classes.footer} maxHeight="150px">
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        maxHeight="300px"
                        width="100%"
                        className={classes.footer}
                    >
                        <Box style={{ margin: '12px', wordWrap: 'break-word', maxWidth: '35%'}}>
                            <Typography style={{ fontWeight: '600' }} color="primary">
                                Sponsorship Hub</Typography>
                            <Typography style={{ color: 'white', fontWeight: '300', fontSize: '14px' }} color="secondary">
                                We allow brands to search events and find sponsorship opportunities.
                            </Typography>
                        </Box>
                            
                        <Box fontWeight={800} textAlign="center" style={{ margin: '10px', position: 'relative', float: 'right' }}>
                            <Typography style={{fontWeight: '600'}} color="primary">Connect With Us</Typography>
                            <a href={`https://www.facebook.com/`} rel="noopener noreferrer" target="_blank"><FacebookIcon color="secondary" className={classes.header_social} style={{ margin: '4px' }} /></a>
                            <a href={`https://www.instagram.com/`} rel="noopener noreferrer" target="_blank"><InstagramIcon color="secondary" className={classes.header_social} style={{ margin: '4px' }} /></a>
                            <a href={`https://www.twitter.com/`} rel="noopener noreferrer" target="_blank"><TwitterIcon color="secondary" className={classes.header_social} style={{ margin: '4px' }} /></a>
                            <a href={`mailto:lamportkn@gmail.com`} rel="noopener noreferrer" target="_blank"><EmailIcon color="secondary" className={classes.header_social} style={{ margin: '4px' }} /></a>
                            <a href={`tel:612-100-1000`} rel="noopener noreferrer" target="_blank" style={{ textDecoration: 'none', }}><Typography style={{ color: 'white', fontWeight: '600' }} color="secondary">612-100-1000</Typography></a>
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    }
}

Footer.propTypes = { classes: PropTypes.object.isRequired };
const putStateOnProps = reduxState => ({ user: reduxState.user, oneEvent: reduxState.oneEvent, approval: reduxState.approval, });
export default connect(putStateOnProps)(withStyles(styles)(Footer));