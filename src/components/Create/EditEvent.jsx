import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderEvent from '../Header/Header_Event'
// Material UI Imports
import { withStyles } from '@material-ui/core/styles';
import { FormControl, InputAdornment, Radio, TextField, InputLabel, Select, MenuItem, Grid, Box, Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';
// Sweetalert 2
import Swal from 'sweetalert2/src/sweetalert2.js';
import '../Style/Swal.scss';

const moment = require('moment');

class EditEvent extends Component {
    state = {
        newVenue: false,
        venue_id: '',
        event_name: 'Test',
        year_established: null,
        start_date: '',
        end_date: '',
        event_image_url: null,
        event_website: 'https://unsplash.com/photos/icyZmdkCGZ0/download?force=true&w=1920', // This is the default image if no image is entered.
        event_status: false,
        event_type: '',
        estimated_attendance: '',
        event_notes: null,
        contact_name: null,
        contact_title: null,
        contact_email: null,
        contact_phone: null,
        event_facebook: null,
        event_instagram: null,
        event_twitter: null,
        event_description: null,
        event_sponsorship_kit: null,
        event_open: false, // Dropdowns
        venue_open: false, // Dropdowns 
        state_open: false, // Dropdowns
        venue_name: null,
        venue_address: null,
        venue_city: null,
        venue_state: '',
        venue_zipcode: null,
        venue_notes: null,
        venue_capacity: null,
    }

    cancelSelect = (event) => {
        this.setState({ event_status: event.target.value });
    };

    componentDidMount = () => {
        document.title = "Sponsorship Hub - Edit Event"; // Sets browser's title
        this.props.dispatch({ type: 'FETCH_EVENT_TYPES' });
        this.props.dispatch({ type: "FETCH_ONE_EVENT", payload: this.props.match.params.id }); /* Gets one event */
        this.props.dispatch({ type: 'FETCH_VENUES' }); /* Gets all the venues */
        this.setState({ 
            newVenue: false,
            venue_id: this.props.oneEvent.venue_id,
            event_name: this.props.oneEvent.event_name,
            year_established: this.props.oneEvent.year_established,
            start_date: this.props.oneEvent.start_date,
            end_date: this.props.oneEvent.end_date,
            event_image_url: this.props.oneEvent.event_image_url,
            event_website: this.props.oneEvent.event_website,
            event_status: Boolean(this.props.oneEvent.event_status),
            event_type: this.props.oneEvent.type_id,
            estimated_attendance: this.props.oneEvent.estimated_attendance,
            event_notes: this.props.oneEvent.event_notes,
            contact_name: this.props.oneEvent.contact_name,
            contact_title: this.props.oneEvent.contact_title,
            contact_email: this.props.oneEvent.contact_email,
            contact_phone: this.props.oneEvent.contact_phone,
            event_facebook: this.props.oneEvent.event_facebook,
            event_instagram: this.props.oneEvent.event_instagram,
            event_twitter: this.props.oneEvent.event_twitter,
            event_description: this.props.oneEvent.event_description,
            event_sponsorship_kit: this.props.oneEvent.event_sponsorship_kit,
            event_id: this.props.match.params.id,
        });
        //scroll to top of page on load
        window.scrollTo(0, 0);
    }

    handleChange = (event, property) => {
        this.setState({ ...this.state, [property]: event.target.value })
        console.log(this.state)
    }

    updateClick = () => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom',
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
            onOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        if (this.state.event_name === '') {
            Toast.fire({
                icon: 'error',
                title: 'Please enter an event name'
            }); return
        }
        else if (this.state.start_date === '') {
            Toast.fire({
                icon: 'error',
                title: 'Please enter a start date'
            }); return
        }
        else if (this.state.end_date === '') {
            Toast.fire({
                icon: 'error',
                title: 'Please enter an end date'
            }); return
        }
        else if (this.state.venue_id === '') {
            Toast.fire({
                icon: 'error',
                title: 'Please choose a venue'
            }); return;
        }
        else if (this.state.estimated_attendance === '') {
            Toast.fire({
                icon: 'error',
                title: 'Please enter estimated attendance'
            }); return;
        }
        if (this.state.venue_capacity === '') { this.setState({ venue_capacity: null }) }
        if (this.state.event_type === '') { this.setState({ event_type: null }) }
        if (this.state.year_established === '') { this.setState({ year_established: null }) }
        Swal.fire({
            title: `${this.state.event_name}`,
            text: `Accept all changes and continue?`,
            // icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#296EC8',
            cancelButtonColor: '#F45255',
            confirmButtonText: 'Confirm',
            reverseButtons: true,
        }).then(result => {
            if (result.value) {
                // dispatch for updating event
                this.props.dispatch({ type: 'UPDATE_EVENT', payload: this.state, history: this.props.history })
                this.props.history.push(`/sponsor/edit/${this.props.match.params.id}`)
                Toast.fire({
                    icon: 'success',
                    title: `Your changes were saved`
                });
            }
        })
    }

    createClick = () => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom',
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
            onOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        if (this.state.event_name === '') {
            Toast.fire({
                icon: 'error',
                title: 'Please enter an event name'
            }); return }
        else if (this.state.start_date === '') {
            Toast.fire({
                icon: 'error',
                title: 'Please enter a start date'
            }); return }
        else if (this.state.end_date === '') {
            Toast.fire({
                icon: 'error',
                title: 'Please enter an end date'
            }); return }
        else if (this.state.venue_id === '') {
            Toast.fire({
                icon: 'error',
                title: 'Please choose a venue'
            }); return; }
        else if (this.state.estimated_attendance === '') {
            Toast.fire({
                icon: 'error',
                title: 'Please enter estimated attendance'
            }); return; }
        if (this.state.venue_capacity === '') { this.setState({ venue_capacity: null }) }
        if (this.state.event_type === '') { this.setState({ event_type: null }) }
        if (this.state.year_established === '') { this.setState({ year_established: null }) }
        Swal.fire({
            input: 'textarea',
            inputPlaceholder: `Input New Event Name Here`,
            inputAttributes: {
                'aria-label': 'New Event Name'
            },
            title: `${this.props.oneEvent.event_name}`,
            text: `This will save your edits as a new event`,
            // icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#296EC8',
            cancelButtonColor: '#F45255',
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Cancel',
            reverseButtons: true,
        }).then(result => {
            if (result.value) {
                this.setState({ event_name: result.value })
                // dispatch for making duplicate event
                this.props.dispatch({ type: 'POST_EVENT2', payload: this.state, history: this.props.history })
                let timerInterval
                Swal.fire({
                    title: `Creating New Event`,
                    html: `Bringing you to ${this.state.event_name}`,
                    icon: 'success',
                    timer: 2500,
                    timerProgressBar: true,
                    onBeforeOpen: () => {
                        Swal.showLoading()
                        timerInterval = setInterval(() => {
                            const content = Swal.getContent()
                            if (content) {
                                const b = content.querySelector('b')
                                if (b) {
                                    b.textContent = Swal.getTimerLeft()
                                }
                            }
                        }, 100)
                    },
                    onClose: () => {
                        clearInterval(timerInterval)
                    }
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {}
                })
            }
            else if (!result.value) { 
                Toast.fire({
                    icon: 'error',
                    title: 'Event was not created'
                })
            }
        })
    }

    deleteClick = () => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom',
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
            onOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        if (this.state.event_name === '') {
            Toast.fire({
                icon: 'error',
                title: 'Please enter an event name'
            }); return
        }
        else if (this.state.start_date === '') {
            Toast.fire({
                icon: 'error',
                title: 'Please enter a start date'
            }); return
        }
        else if (this.state.end_date === '') {
            Toast.fire({
                icon: 'error',
                title: 'Please enter an end date'
            }); return
        }
        else if (this.state.venue_id === '') {
            Toast.fire({
                icon: 'error',
                title: 'Please choose a venue'
            }); return;
        }
        else if (this.state.estimated_attendance === '') {
            Toast.fire({
                icon: 'error',
                title: 'Please enter estimated attendance'
            }); return;
        }
        if (this.state.venue_capacity === '') { this.setState({ venue_capacity: null }) }
        if (this.state.event_type === '') { this.setState({ event_type: null }) }
        if (this.state.year_established === '') { this.setState({ year_established: null }) }
        Swal.fire({
            input: 'textarea',
            inputPlaceholder: `Type "DELETE" Here and press Confirm`,
            inputAttributes: {
                'aria-label': 'New Event Name'
            },
            title: `${this.props.oneEvent.event_name}`,
            text: `This will delete this event permanently!`,
            // icon: 'error',
            showCancelButton: true,
            confirmButtonColor: '#296EC8',
            cancelButtonColor: '#F45255',
            confirmButtonText: 'Confirm',
            cancelButtonText: 'Cancel',
            reverseButtons: true,
        }).then(result => {
            if (result.value === 'DELETE') {
                this.props.dispatch({ type: 'DELETE_EVENT', payload: this.props.match.params.id, history: this.props.history })
                let timerInterval
                Swal.fire({
                    title: `Event Deleted`,
                    html: `Event has been successfully deleted.`,
                    icon: 'success',
                    timer: 2500,
                    timerProgressBar: true,
                    onBeforeOpen: () => {
                        Swal.showLoading()
                        timerInterval = setInterval(() => {
                            const content = Swal.getContent()
                            if (content) {
                                const b = content.querySelector('b')
                                if (b) {
                                    b.textContent = Swal.getTimerLeft()
                                }
                            }
                        }, 100)
                    },
                    onClose: () => {
                        clearInterval(timerInterval)
                    }
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) { }
                })
            }
            else if (result.value !== 'DELETE') {
                Toast.fire({
                    icon: 'info',
                    title: 'Event was not deleted'
                })
            }
        })
    }

    venueSelect(event) {
        console.log(event.target.value)
        // this.setState({ venue: event.target.value })
    }

    // SELECTOR EVENT TYPE START
    eventOpen = () => {
        this.setState({
            event_open: true
        })
    }
    eventClose = () => {
        this.setState({
            event_open: false
        })
    }
    eventSelector = (event) => {
        console.log('You have set the event type to:', event.target.value);
        this.setState({
            event_type: event.target.value,
        })
    }  // SELECTOR EVENT TYPE END

    // SELECTOR EVENT TYPE START
    venueOpen = () => {
        this.setState({
            venue_open: true
        })
    }
    venueClose = () => {
        this.setState({
            venue_open: false
        })
    }
    venueSelector = (event) => {
        console.log('You have set the venue to:', event.target.value);
        if (event.target.value == 0) {
            this.setState({
                newVenue: true,
                venue_id: event.target.value
            })
        }
        else {
            this.setState({
                newVenue: false,
                venue_id: event.target.value
            })
        }
    }  // SELECTOR EVENT TYPE END

    // SELECTOR EVENT TYPE START
    stateOpen = () => {
        this.setState({
            state_open: true
        })
    }
    stateClose = () => {
        this.setState({
            state_open: false
        })
    }
    stateSelector = (event) => {
        console.log('You have set the state to:', event.target.value);
        this.setState({
            venue_state: event.target.value
        })
    }  // SELECTOR EVENT TYPE END

    render() {
        // allows us to connect this.props to styles 
        const { classes } = this.props;
        let cancelValue = String(this.state.event_status);
        let start_date = moment(this.state.start_date).format(`YYYY-MM-DD`);
        let end_date = moment(this.state.end_date).format(`YYYY-MM-DD`);
        return (
            <>
                <HeaderEvent history={this.props.history} match={this.props.match}/>
                <Box className={classes.margin}>
                    <Grid justify="center" container>
                        <Grid item xs={12} md={4}><h1>Editing {this.props.oneEvent.event_name}</h1></Grid>
                        <Grid item xs={12} md={4}></Grid>
                    </Grid>

                    {/* SECTION - FIRST */}
                    {/* Row Start */}
                    <Box mb={2}>
                        <Grid justify="center" container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <TextField value={this.state.event_name} fullWidth={true} inputProps={{ maxLength: 255 }} label={<><span>Event Name</span> <span className={classes.red}>*</span></>} placeholder="Name of the Event" onChange={(event) => this.handleChange(event, 'event_name')} />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField value={this.state.estimated_attendance} type="number" label={<><span>Estimated Attendance</span> <span className={classes.red}>*</span></>} placeholder="#" fullWidth={true} onChange={(event) => this.handleChange(event, 'estimated_attendance')} />
                            </Grid>
                        </Grid>
                    </Box>

                    {/* Row Start */}
                    <Box mb={2}>
                        <Grid container spacing={2} item md={12}>
                            <Grid item md={2}></Grid>
                            <Grid item xs={12} md={4}>
                                <InputLabel>Start Date <span className={classes.red}>*</span></InputLabel>
                                <TextField value={start_date} type="date" placeholder="Start Date" onChange={(event) => this.handleChange(event, 'start_date')} />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <InputLabel>End Date <span className={classes.red}>*</span></InputLabel>
                                <TextField value={end_date} type="date" placeholder="End Date" onChange={(event) => this.handleChange(event, 'end_date')} />
                            </Grid>
                            <Grid item md={2}></Grid>
                        </Grid>
                    </Box>

                    {/* Row Start */}
                    <Grid container spacing={2} item md={12}>
                        <Grid item md={2}></Grid>
                        <Grid item xs={12} md={4}>
                            <InputLabel>Venue <span className={classes.red}>*</span></InputLabel>
                            <FormControl>
                                <Select
                                    open={this.state.venue_open}
                                    onClose={this.venueClose}
                                    onOpen={this.venueOpen}
                                    value={this.state.venue_id}
                                    onChange={(event) => this.venueSelector(event)}>
                                    {this.props.venues.map(venue =>
                                        <MenuItem key={venue.id} value={venue.id}>{venue.name}</MenuItem>
                                    )}
                                    <MenuItem value={0}>Other - Create New</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <InputLabel>Event Type</InputLabel>
                            <FormControl>
                                <Select
                                    open={this.state.event_open}
                                    onClose={this.eventClose}
                                    onOpen={this.eventOpen}
                                    // value={this.state.event_id}
                                    defaultValue={this.props.oneEvent.type_id}
                                    onChange={(event) => this.eventSelector(event)}>
                                    {this.props.types.map(types =>
                                        <MenuItem key={types.id} value={types.id}>{types.type}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={2}></Grid>
                    </Grid>
                </Box>

                {/* SECTION - VENUE */}
                {/* Show Only if newVenue=true */}
                {this.state.newVenue &&
                    <Box className={classes.box_grey}>
                        <Box className={classes.margin}>
                            <Grid justify="center" container>
                                <Grid item xs={12} md={4}><h2>New Venue</h2></Grid>
                                <Grid item xs={12} md={4}></Grid>
                            </Grid>

                            {/* Row Start */}
                            <Grid justify="center" container spacing={4}>
                                <Grid item xs={12} md={6}>
                                    <TextField fullWidth={true} inputProps={{ maxLength: 255 }} label={<><span>Venue Name</span> <span className={classes.red}>*</span></>} placeholder="Name" onChange={(event) => this.handleChange(event, 'venue_name')} />
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <TextField fullWidth={true} type="number" label="Capacity" placeholder="#" onChange={(event) => this.handleChange(event, 'venue_capacity')} />
                                </Grid>
                            </Grid>

                            {/* Row Start */}
                            <Grid justify="center" container spacing={4}>
                                <Grid item xs={12} md={8}>
                                    <TextField fullWidth={true} multiline={true} label={<><span>Street Address</span> <span className={classes.red}>*</span></>} placeholder="Notes about the Venue" onChange={(event) => this.handleChange(event, 'venue_address')} />
                                </Grid>
                            </Grid>

                            {/* Row Start */}
                            <Grid justify="center" container spacing={4}>
                                <Grid item xs={12} md={4}>
                                    <TextField fullWidth={true} inputProps={{ maxLength: 255 }} label={<><span>City</span> <span className={classes.red}>*</span></>} placeholder="City" onChange={(event) => this.handleChange(event, 'venue_city')} />
                                </Grid>
                                <Grid item xs={9} md={2}>
                                    <InputLabel>State <span className={classes.red}>*</span></InputLabel>

                                    <FormControl>
                                        <Select
                                            open={this.state.state_open}
                                            onClose={this.stateClose}
                                            onOpen={this.stateOpen}
                                            defaultValue='state'
                                            onChange={(event) => this.stateSelector(event)}>
                                            <MenuItem value='state'>Select a Sate</MenuItem>
                                            <MenuItem value='Alabama'>Alabama</MenuItem>
                                            <MenuItem value='Alaska'>Alaska</MenuItem>
                                            <MenuItem value='Arizona'>Arizona</MenuItem>
                                            <MenuItem value='Arkansas'>Arkansas</MenuItem>
                                            <MenuItem value='California'>California</MenuItem>
                                            <MenuItem value='Colorado'>Colorado</MenuItem>
                                            <MenuItem value='Connecticut'>Connecticut</MenuItem>
                                            <MenuItem value='Delaware'>Delaware</MenuItem>
                                            <MenuItem value='Florida'>Florida</MenuItem>
                                            <MenuItem value='Georgia'>Georgia</MenuItem>
                                            <MenuItem value='Hawaii'>Hawaii</MenuItem>
                                            <MenuItem value='Idaho'>Idaho</MenuItem>
                                            <MenuItem value='Illinois'>Illinois</MenuItem>
                                            <MenuItem value='Indiana'>Indiana</MenuItem>
                                            <MenuItem value='Iowa'>Iowa</MenuItem>
                                            <MenuItem value='Kansas'>Kansas</MenuItem>
                                            <MenuItem value='Kentucky'>Kentucky</MenuItem>
                                            <MenuItem value='Louisiana'>Louisiana</MenuItem>
                                            <MenuItem value='Maine'>Maine</MenuItem>
                                            <MenuItem value='Maryland'>Maryland</MenuItem>
                                            <MenuItem value='Massachusetts'>Massachusetts</MenuItem>
                                            <MenuItem value='Michigan'>Michigan</MenuItem>
                                            <MenuItem value='Minnesota'>Minnesota</MenuItem>
                                            <MenuItem value='Mississippi'>Mississippi</MenuItem>
                                            <MenuItem value='Missouri'>Missouri</MenuItem>
                                            <MenuItem value='Montana'>Montana</MenuItem>
                                            <MenuItem value='Nebraska'>Nebraska</MenuItem>
                                            <MenuItem value='Nevada'>Nevada</MenuItem>
                                            <MenuItem value='New Hampshire'>New Hampshire</MenuItem>
                                            <MenuItem value='New Jersey'>New Jersey</MenuItem>
                                            <MenuItem value='New Mexico'>New Mexico</MenuItem>
                                            <MenuItem value='New York'>New York</MenuItem>
                                            <MenuItem value='North Carolina'>North Carolina</MenuItem>
                                            <MenuItem value='North Dakota'>North Dakota</MenuItem>
                                            <MenuItem value='Ohio'> Ohio </MenuItem>
                                            <MenuItem value='Oklohoma'> Oklohoma </MenuItem>
                                            <MenuItem value='Oregon'> Oregon </MenuItem>
                                            <MenuItem value='Pennsylvania'> Pennsylvania </MenuItem>
                                            <MenuItem value='Rhode Island'> Rhode Island </MenuItem>
                                            <MenuItem value='South Carolina'> South Carolina </MenuItem>
                                            <MenuItem value='South Dakota'> South Dakota </MenuItem>
                                            <MenuItem value='Tennessee'> Tennessee </MenuItem>
                                            <MenuItem value='Texas'> Texas </MenuItem>
                                            <MenuItem value='Utah'> Utah </MenuItem>
                                            <MenuItem value='Vermont'> Vermont </MenuItem>
                                            <MenuItem value='Virginia'> Virginia </MenuItem>
                                            <MenuItem value='Washington'> Washington </MenuItem>
                                            <MenuItem value='West Virginia'> West Virginia </MenuItem>
                                            <MenuItem value='Wisconsin'> Wisconsin </MenuItem>
                                            <MenuItem value='Wyoming'> Wyoming </MenuItem>
                                        </Select>
                                    </FormControl>

                                </Grid>
                                <Grid item xs={3} md={2}>
                                    <TextField fullWidth={true} type="number" label="Zip Code" placeholder="#" onChange={(event) => this.handleChange(event, 'venue_zipcode')} />
                                </Grid>
                            </Grid>

                            {/* Row Start */}
                            <Grid justify="center" container spacing={4}>
                                <Grid item xs={12} md={8}>
                                    <TextField variant="outlined" fullWidth={true} multiline={true} label="Notes" placeholder="Notes about the Venue" onChange={(event) => this.handleChange(event, 'venue_notes')} />
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                }

                {/* SECTION - WEBSITE - IMAGE - CANCELLED */}
                {/* Row Start */}
                <Box className={classes.margin}>
                    <Grid justify="center" container spacing={2}>
                        <Grid item xs={12} md={8}>
                            <TextField value={this.state.event_website} multiline={true} label="Website" placeholder="URL" fullWidth={true} onChange={(event) => this.handleChange(event, 'event_website')} />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <TextField value={this.state.event_image_url} multiline={true} label="Event Image" placeholder="URL" fullWidth={true} onChange={(event) => this.handleChange(event, 'event_image_url')} />
                        </Grid>
                    </Grid>


                    {/* Row Start */}
                    <Grid justify="center" container spacing={2}>
                        <Grid item xs={12} md={2}>
                            <InputLabel>Cancelled?</InputLabel>
                            <Radio
                                checked={cancelValue === 'true'}
                                onChange={this.cancelSelect}
                                value='true'
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'TRUE' }}
                                color="primary"
                            />Yes
                            <Radio
                                checked={cancelValue === 'false'}
                                onChange={this.cancelSelect}
                                value='false'
                                name="radio-button-demo"
                                color="primary"
                                inputProps={{ 'aria-label': 'FALSE' }}
                            />No
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField value={this.state.year_established} inputProps={{ min: 1800, max: 2200 }} type="number" label="Year Established" placeholder="#" fullWidth={true} onChange={(event) => this.handleChange(event, 'year_established')} />
                        </Grid>
                    </Grid>

                    {/* Row Start */}
                    <Grid justify="center" container spacing={4}>
                        <Grid item xs={12} md={8}>
                            <TextField value={this.state.event_description} variant="outlined" fullWidth={true} multiline={true} label="Event Description" placeholder="A short description of the event" onChange={(event) => this.handleChange(event, 'event_description')} />
                        </Grid>
                    </Grid></Box>

                {/* SECTION - CONTACT INFO */}
                <Box className={classes.box_grey}><Box className={classes.margin}>

                    <Grid justify="center" container>
                        <Grid item xs={12} md={4}><h2>Event Contact Information</h2></Grid>
                        <Grid item xs={12} md={4}></Grid>
                    </Grid>

                    {/* Row Start */}
                    <Grid justify="center" container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <TextField value={this.state.contact_name} fullWidth={true} inputProps={{ maxLength: 255 }} label="Contact Name" placeholder="Name of Event Contact" onChange={(event) => this.handleChange(event, 'contact_name')} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField value={this.state.contact_title} fullWidth={true} inputProps={{ maxLength: 255 }} label="Title" placeholder="Title or Occupation" onChange={(event) => this.handleChange(event, 'contact_title')} />
                        </Grid>
                    </Grid>

                    {/* Row Start */}
                    <Grid justify="center" container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <TextField value={this.state.contact_email} fullWidth={true} inputProps={{ maxLength: 255 }} label="Email Address" placeholder="Email Address" onChange={(event) => this.handleChange(event, 'contact_email')} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField value={this.state.contact_phone} fullWidth={true} label="Phone Number" placeholder="#" onChange={(event) => this.handleChange(event, 'contact_phone')} />
                        </Grid>
                    </Grid></Box>
                </Box>

                {/* SECTION - SOCIAL TAGS */}
                <Box className={classes.margin}>
                    <Grid justify="center" container>
                        <Grid item xs={12} md={4}><h2>Social Tags</h2></Grid>
                        <Grid item xs={12} md={4}></Grid>
                    </Grid>
                    <Grid justify="center" container spacing={2}>
                        <Grid item xs={12} md={8}>
                            <TextField value={this.state.event_facebook} multiline={true} fullWidth={true} InputProps={{
                                startAdornment: <InputAdornment position="start">https://www.facebook.com/</InputAdornment>,
                            }} label={<><FacebookIcon /><span> Facebook</span></>} placeholder="social-tag" onChange={(event) => this.handleChange(event, 'event_facebook')} />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <TextField value={this.state.event_instagram} multiline={true} fullWidth={true} InputProps={{
                                startAdornment: <InputAdornment position="start">https://www.instagram.com/</InputAdornment>,
                            }} label={<><InstagramIcon /><span> Instagram</span></>} placeholder="social-tag" onChange={(event) => this.handleChange(event, 'event_instagram')} />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <TextField value={this.state.event_twitter} multiline={true} fullWidth={true} InputProps={{
                                startAdornment: <InputAdornment position="start">https://www.twitter.com/</InputAdornment>,
                            }} label={<><TwitterIcon /><span> Twitter</span></>} placeholder="social-tag" onChange={(event) => this.handleChange(event, 'event_twitter')} />
                        </Grid>
                    </Grid>
                </Box>

                {/* SECTION - SPONSOR KIT - NOTES */}
                <Box className={classes.box_grey}><Box className={classes.margin}>
                    {/* Row Start */}
                    <Grid justify="center" container spacing={2}>
                        <Grid item xs={12} md={8}>
                            <TextField value={this.state.event_sponsorship_kit} fullWidth={true} label="Sponsorship Kit" placeholder="URL" onChange={(event) => this.handleChange(event, 'event_sponsorship_kit')} />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <TextField value={this.state.event_notes} variant="outlined" fullWidth={true} multiline={true} label="Additional Notes" placeholder="Further notes on the event" onChange={(event) => this.handleChange(event, 'event_notes')} />
                        </Grid>
                    </Grid></Box>
                </Box>

                <Grid justify="center" spacing={2} container>
                    <Grid item xs={12} md={2}><Button fullWidth variant="outlined" className={classes.btn_def} onClick={this.createClick}>Create as New Event</Button></Grid>
                    <Grid item xs={12} md={2}><Button fullWidth variant="outlined" className={classes.btn_delete} onClick={this.deleteClick}>Delete This Event</Button></Grid>
                    <Grid item xs={12} md={2}><Button fullWidth variant="outlined" className={classes.btn_def} onClick={this.updateClick}>Update This Event</Button></Grid>
                    
                </Grid>

            </>
        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
EditEvent.propTypes = { classes: PropTypes.object.isRequired };

// Destructures reduxState to pull venues only.
const putStateOnProps = reduxState => ({
    venues: reduxState.venues,
    currentEvent: reduxState.currentEvent,
    oneEvent: reduxState.oneEvent,
    types: reduxState.eventType
});

export default connect(putStateOnProps)(withStyles(styles)(EditEvent));