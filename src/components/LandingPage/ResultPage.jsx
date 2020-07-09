import React, { Component } from 'react';
import { connect } from 'react-redux';
//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button, FormControl, MenuItem, Select, InputLabel, Card, CardContent, CardMedia, CardActionArea } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';
import Header from '../Header/Header';

class ResultPage extends Component {

    state = {
        openType: false,
        type: '',
        state: null,
        startD: null,
        endD: null,
        minAttend: null,
        maxAttend: null,
        minSponsorPrice: null,
        maxSponsorPrice: null,
        income: ''
    };//end state

    componentDidMount() {
        document.title = "Sponsorship Hub - Results"; // Sets browser's title
        // get our event types
        this.props.dispatch({ type: 'FETCH_EVENT_TYPES' });
        window.scrollTo(0, 0);
        if (this.props.user.access_level === 0) { this.props.history.push(`/error`) }
    };//end componentDidMount

    handleOpen = () => {
        this.setState({ openType: true })
    };//end handleOpen

    handleClose = () => {
        this.setState({ openType: false })
    };// handleClose

    handleType = (event) => {
        this.setState({ type: event.target.value })
    };//end handleChange

    handleAttendance = (event) => {
        this.setState({ type: event.target.value })
    };//end handleAttendance

    // handleEvent allows the user to go to the page of the event on click
    handleEvent = (events) => {
        this.props.history.push(`/event/${events.id}`)
    };//end handleEvent

    //handleState allows the user to type in a state search
    handleState = (event) => {
        //change value of state in our states
        this.setState({ state: event.target.value })
    };//end handleState

    //handleStartD allows user to type select start date
    handleStartD = (event) => {
        // change the data of startD
        this.setState({ startD: event.target.value });
    };//end handleStartD

    //handleEndD allows user to type select end date
    handleEndD = (event) => {
        // change the data of endD
        this.setState({ endD: event.target.value });
    };//end handleStartD

    //handleType allows user to select type value which is a number
    handleType = (event) => {
        this.setState({ type: event.target.value })
    };//end handleType

    //handleMinAttend allows user to select minimum amount of attendees
    handleMinAttend = (event) => {
        this.setState({ minAttend: event.target.value });
    };//end handleMinAttend

    //handleMaxAttend allows user to select maximum amount of attendees
    handleMaxAttend = (event) => {
        this.setState({ maxAttend: event.target.value });
    };//end handleMaxAttend

    //handleMinSponsorPrice allows user to select minimum sponsorship price
    handleMinSponsorPrice = (event) => {
        this.setState({ minSponsorPrice: event.target.value });
    };//end handleMinSponsorPrice

    //handleMinSponsorPrice allows user to select maximum sponsorship price
    handleMaxSponsorPrice = (event) => {
        this.setState({ maxSponsorPrice: event.target.value });
    };//end handleMaxSponsorPrice

    /// waiting for karl /// HOUSE HOLD INCOME SEARCH
    handleHouseholdIncome = (event) => {
        this.setState({
            income: event.target.value
        })
    }

    //handleFilter will filter the adv search
    handleFilter = () => {
        if (this.state.type === 'Select All') {
            this.setState({
                type: ''
            });
        };
        if (this.state.income === 'All Income') {
            this.setState({
                income: ''
            })
        }
        if(this.state.state === 'All States') {
            this.setState({
                state: null
            })
        }
        this.props.dispatch({ type: 'FETCH_ADV_RESULTS', payload: this.state });
    };//end handleFilter

    render() {
        // allows us to connect this.props to styles 
        const { classes } = this.props;
        return (
            <Box>
                {/* Header */}
                <Header history={this.props.history} />
                {/* section that holds the advanced search filters */}
                <Box className={classes.search_section}>
                    {/* section that holds search events */}
                    <Grid container justify="center">
                        <Grid item xs={12} md={10}><Typography className={classes.title} variant="h4">Advanced Search</Typography></Grid>
                    </Grid>

                    {/* state and month selector options */}
                    <Grid container justify="center" spacing={2}>

                        {/* select state drop down */}
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
                            {/* <TextField onChange={(event) => this.handleState(event)} defaultValue={this.props.match.params.state} fullWidth={true} label="State" /> */}
                        </Grid>

                        {/* month selector with date text fields */}
                        <Grid item xs={12} md={2}>
                            <InputLabel>Start Date</InputLabel>
                            <TextField onChange={(event) => this.handleStartD(event)} defaultValue={this.props.match.params.startDate} type="date" />
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <InputLabel>End Date</InputLabel>
                            <TextField onChange={(event) => this.handleEndD(event)} defaultValue={this.props.match.params.endDate} type="date" />
                            {/* </Grid> */}
                        </Grid>
                    </Grid>

                    {/* type and attendance selector options*/}
                    <Grid container justify="center" spacing={2}>
                        {/* begin TYPE selector option */}
                        <Grid item xs={12} md={4}>
                            <InputLabel>Event Type</InputLabel>
                            <FormControl className={classes.advSearch} fullWidth={true}>
                                <Select open={this.state.open} onClose={this.handleClose} onOpen={this.handleOpen} defaultValue='Select All' onChange={(event) => this.handleType(event)}>
                                    <MenuItem value='Select All'><em>Select All</em></MenuItem>
                                    {this.props.types.map(types =>
                                        <MenuItem key={types.id} value={types.type}><em>{types.type}</em></MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </Grid> {/* END TYPE SELECTOR */}
                        {/* begin ATTENDANCE selector */}
                        <Grid item xs={12} md={2} className={classes.advSearch}>
                            <TextField onChange={(event) => this.handleMinAttend(event)} type="number" label="Min Attendees" />
                        </Grid>
                        <Grid item xs={12} md={2} className={classes.advSearch}>
                            <TextField onChange={(event) => this.handleMaxAttend(event)} type="number" label="Max Attendees" />
                        </Grid>
                        {/* END ATTENDANCE SELECTOR */}
                    </Grid>

                    {/* sponsorship cost and household income options */}
                    <Grid container justify="center" spacing={2}>
                        {/* begin SPONSORSHIP PRICE selector */}
                        <Grid item xs={12} md={2}>
                            <TextField onChange={(event) => this.handleMinSponsorPrice(event)} type="number" fullWidth={true} label="Min Sponsorship Price" />
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <TextField onChange={(event) => this.handleMaxSponsorPrice(event)} type="number" fullWidth={true} label="Max Sponsorship Price" />
                        </Grid>
                        {/* END SPONSORSHIP PRICE SELECTOR */}
                        <Grid item xs={12} md={4}>
                            <InputLabel>Household Income 20% and Up</InputLabel>
                            <Select open={this.state.open} onClose={this.handleClose} onOpen={this.handleOpen} defaultValue="All Income" fullWidth onChange={event => this.handleHouseholdIncome(event)}>
                                <MenuItem value='All Income'>All Income</MenuItem>
                                <MenuItem value={1}>$0-$24,999</MenuItem>
                                <MenuItem value={2}>$25,000-$49,999</MenuItem>
                                <MenuItem value={3}>$50,000-$74,999</MenuItem>
                                <MenuItem value={4}>$75,000-$99,999</MenuItem>
                                <MenuItem value={5}>$100,000-$149,999</MenuItem>
                                <MenuItem value={6}>$150,000-$199,999</MenuItem>
                                <MenuItem value={7}>$200,000+</MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                    {/* button grid that centers it */}
                    <Grid container justify="center" spacing={2}>
                        <Grid item xs={12} md={1}><Button onClick={this.handleFilter} className={classes.btn_search} variant="outlined">Filter</Button></Grid>
                    </Grid>
                    {/* </Grid> */}
                    {/* END ADVANCED FILTER */}
                </Box>

                {/* BEGIN RESULTS VIEW */}
                {/* section that holds mapped EVENTS */}
                <Box className={classes.margin}>
                    <Grid container justify="center">
                        <Grid item xs={12} md={10}><Typography className={classes.title} variant="h4">Events</Typography></Grid>
                    </Grid>

                    {/* BEGIN GRID */}
                    <Grid container justify="center" spacing={2}>
                        {this.props.results.map(events =>
                            <Grid item xs={4} md={4} key={events.id}>
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
                    </Grid>
                </Box>
                {/* end of mapped data */}
                {/* END RESULTS DISPLAY */}
            </Box>
        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
ResultPage.propTypes = { classes: PropTypes.object.isRequired };

const putStateOnProps = reduxState => ({
    results: reduxState.results,
    types: reduxState.eventType,
    user: reduxState.user
});
export default connect(putStateOnProps)(withStyles(styles)(ResultPage));