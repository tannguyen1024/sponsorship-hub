import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Box, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from '../Style/Style';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import '../Structure/Nav/Nav.css';

const moment = require('moment');
class Header_Event extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_APPROVAL' });
    }
    render() {
        let start_date = moment(this.props.oneEvent.start_date).format(`MMM Do`);
        let end_date = moment(this.props.oneEvent.end_date).format(`MMM Do, YYYY`);
        const page = window.location.href.split('/')[4];
        const { classes } = this.props;
        return (
            <div>
                <Box className={classes.shadow}>
                    <Box className={classes.header} maxHeight="300px" style={{ backgroundImage: `url(${this.props.oneEvent.event_image_url})` }}>
                        <Box
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                            maxHeight="300px"
                            width="100%"
                            className={classes.header}
                        >
                            <Link className="nav-link" to="/home"><img id="hoverLogo" src='./images/logo_white_drop_shadow.png' height="80vh" alt="Sponsorship Hub" /></Link>
                            <Box>
                                {/* Home & Login Button */}
                                {!this.props.user.id && <Link className="nav-link" to="/home/login"><Button className={classes.btn_create_event}>Login / Register</Button></Link>}
                                {/* Admin Button */}
                                {this.props.user.access_level === 3 && <Link className="nav-link" to="/admin"><Button className={classes.btn_create_event}>Admin{this.props.approval.access_lvl_0 != 0 && <div className={classes.notification}>(<NotificationsIcon className="notification" style={{ fontSize: '80%' }} />{this.props.approval.access_lvl_0})</div>}</Button></Link>}
                                {/* Logout Button */}
                                {this.props.user.id && <Button className={classes.btn_create_event} onClick={() => this.props.dispatch({ type: 'LOGOUT' })}>Logout</Button>}
                            </Box>
                        </Box>
                        <Box
                            display="flex"
                            flexDirection="row"
                            justifyContent="center"
                            className={classes.header} >
                            <Box className={classes.header_text_event} style={{ color: 'white' }}>
                                {this.props.oneEvent.event_name}<br />
                                <Box style={{ fontSize: '50%' }}>{start_date} - {end_date}</Box>
                            </Box>
                        </Box>
                        <Box
                            display="flex"
                            flexDirection="row"
                            justifyContent="center"
                            className={classes.header_button_right}>
                            {this.props.user.access_level > 1 && page === 'event' && <Button className={classes.btn_create_event} onClick={() => this.props.history.push(`/event/edit/${this.props.match.params.id}`)} variant="outlined">Edit Event</Button>}
                        </Box>
                        <Box
                            display="flex"
                            flexDirection="row"
                            justifyContent="center"
                            className={classes.header_button_left}>
                            <Link to={`/details/${this.props.cardId}`} />
                            {this.props.oneEvent.event_facebook && <a href={`https://www.facebook.com/${this.props.oneEvent.event_facebook}`} rel="noopener noreferrer" target="_blank"><FacebookIcon color="secondary" className={classes.header_social} /></a>}
                            {this.props.oneEvent.event_instagram && <a href={`https://www.instagram.com/${this.props.oneEvent.event_instagram}`} rel="noopener noreferrer" target="_blank"><InstagramIcon color="secondary" className={classes.header_social} style={{ marginLeft: '5px' }} /></a>}
                            {this.props.oneEvent.event_twitter && <a href={`https://www.twitter.com/${this.props.oneEvent.event_twitter}`} rel="noopener noreferrer" target="_blank"><TwitterIcon color="secondary" className={classes.header_social} style={{ marginLeft: '5px' }} /></a>}
                        </Box>
                    </Box>
                </Box>
            </div>
        )
    }
}
Header_Event.propTypes = { classes: PropTypes.object.isRequired };
const putStateOnProps = reduxState => ({ user: reduxState.user, oneEvent: reduxState.oneEvent, approval: reduxState.approval, });
export default connect(putStateOnProps)(withStyles(styles)(Header_Event));
