import React, { Component } from 'react';
import { connect } from 'react-redux';
//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button, Card, CardContent, InputLabel, CardMedia, FormControl, Select, MenuItem, CardActionArea } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';
import Header from '../Header/Header';
// Sweetalert 2
import Swal from 'sweetalert2/src/sweetalert2.js';
import '../Style/Swal.scss';
//carousel set up
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
        swipeable: true,
        showDots: true,
        ssr: true,
        infinite: true,
        autoPlaySpeed: 5000,
        slidesToSlide: 3,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        swipeable: true,
        showDots: true,
        ssr: true,
        infinite: true,
        autoPlaySpeed: 5000,
        slidesToSlide: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        swipeable: true,
        showDots: true,
        ssr: true,
        infinite: true,
        autoPlaySpeed: 5000,
        slidesToSlide: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        swipeable: true,
        showDots: true,
        ssr: true,
        infinite: true,
        autoPlaySpeed: 5000,
        slidesToSlide: 1,
    },
};

class LandingPage extends Component {

    state = {
        startDate: null,
        endDate: null,
        state: '',
        state_open: false
    };//end state

    componentDidMount() {
        document.title = "Sponsorship Hub"; // Sets browser's title
        // on landing page load, get our data for the featured events
        this.props.dispatch({ type: 'FETCH_LANDING' });
        // default our results so when we click back from a featured events results page shows data
        this.props.dispatch({ type: 'FETCH_DEFAULT_RESULTS' });
        window.scrollTo(0, 0);
    };//end componentDidMount

    handleSearch = () => {
        //IF STATEMENT SO THAT THEY DO BOTH START AND END DATE IF SELECTED
        if (this.state.startDate !== null && this.state.endDate === null) {
            Swal.fire({
                title: `Please fill in both date inputs.`,
                // text: `Accept all changes and continue?`,
                icon: 'warning',
                confirmButtonColor: '#F45255',
                confirmButtonText: 'Ok'
            });
            return
        } else if (this.state.endDate !== null && this.state.startDate === null) {
            Swal.fire({
                title: `Please fill in both date inputs.`,
                // text: `Accept all changes and continue?`,
                icon: 'warning',
                confirmButtonColor: '#F45255',
                confirmButtonText: 'Ok'
            });
            return
        };//end if statement
        // if statement if default is set to All States
        if (this.state.state === 'All States'){
            this.setState({
                state: ''
            })
        }
        // on click of the search button, the user will be taken to the results view page
        this.props.history.push(`/results/`);
        // send our inputs to our results view page
        this.props.dispatch({ type: 'FETCH_RESULTS', payload: this.state })
    };//end handleSearch

    //handles state input change
    handleState = (event) => {
        this.setState({ state: event.target.value });
    };//end handle state

    //handle start and end date selectors
    handleStart = (event) => {
        // change the data of startDate
        this.setState({ startDate: event.target.value });
    };//end handleStart
    handleEnd = (event) => {
        // change the data of endDate
        this.setState({ endDate: event.target.value });
    };//end handleEnd

    // handleEvent allows the user to go to the page of the event on click
    handleEvent = (events) => {
        this.props.history.push(`/event/${events.id}`)
    };//end handleEvent   
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

    render() {
        const { classes } = this.props;
        return (
            <Box style={{ overflow: 'hidden' }}>
                {/* Header */}
                <Header history={this.props.history} />

                {/* section to hold search inputs */}

                <Box className={classes.search_section}>
                    <Grid container justify="center">
                        <Grid item xs={12} md={10}><Typography variant="h4" className={classes.title}>Search for Events</Typography></Grid>
                    </Grid>

                    {/* grid that wraps location and selector */}
                    <Grid container justify="center">
                        {/* location and month selector options */}
                        <Grid container justify="center" spacing={2}>
                            <Grid item xs={12} md={4}>
                                <InputLabel>State</InputLabel>
                                <FormControl fullWidth={true}>
                                    <Select
                                        open={this.state.state_open}
                                        onClose={this.stateClose}
                                        onOpen={this.stateOpen}
                                        defaultValue="All States"
                                        onChange={(event) => this.handleState(event)}>
                                        <MenuItem value="All States">All States</MenuItem>
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
                                        <MenuItem value='Oklahoma'> Oklahoma </MenuItem>
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
                            {/* month selector with date text fields */}
                            <Grid item xs={12} md={2}>
                                <InputLabel>start date</InputLabel>
                                <TextField fullWidth={true} type="date" onChange={(event) => this.handleStart(event)} />
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <InputLabel>end date</InputLabel>
                                <TextField fullWidth={true} type="date" onChange={(event) => this.handleEnd(event)} />
                            </Grid>
                        </Grid>
                        {/* end location and month selector */}
                        {/* button search grid */}
                        <Grid item xs={12} md={1}><Button className={classes.btn_search} variant="outlined" onClick={this.handleSearch}>Search</Button></Grid>
                    </Grid>
                </Box>

                {/* section that holds mapped EVENTS */}
                <Box className={classes.margin}>
                    <Grid container justify="center">
                        <Grid item xs={12} md={10}><Typography variant="h4" className={classes.title}>Featured Events</Typography></Grid>
                    </Grid>
                    {/* BEGIN CAROUSEL */}
                    <Carousel responsive={responsive}
                        swipeable={true}
                        showDots={true}
                        ssr={true}
                        infinite={true}
                        autoPlaySpeed={5000}
                        autoPlay={this.props.deviceType !== "mobile" ? true : false}
                        slidesToSlide={3}
                    >
                        {this.props.landing.map(events =>
                            <Grid item key={events.id} >
                                <Card variant="outlined" className={classes.card} onClick={(event) => this.handleEvent(events)}>
                                    <CardContent>
                                        <CardActionArea>
                                            <CardMedia className={classes.landMedia} component="img" image={events.event_image_url} title={events.event_name} />
                                            <Typography variant="h6" style={{ paddingTop: '12px' }}>{events.event_name}</Typography>
                                        </CardActionArea>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )}
                        {/* end of mapping for landing page GET */}
                    </Carousel>
                </Box>
                {/* end of mapped data */}
            </Box>
            // Box that wraps page
        )//end return
    };//end render
};//end LandingPage

// PropTypes allows us to import style.jsx for use
LandingPage.propTypes = { classes: PropTypes.object.isRequired };

const putStateOnProps = reduxState => ({
    landing: reduxState.landing,
    user: reduxState.user
});

export default connect(putStateOnProps)(withStyles(styles)(LandingPage));