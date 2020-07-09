import React, { Component } from 'react';
import { connect } from 'react-redux';
import SponsorItem from './SponsorItem';
import Header from '../Header/Header'

//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';

class EditSponsor extends Component {

    state = {
        event_id: this.props.match.params.id,
        sponsor_name: "",
        sponsor_price: "",
        sponsor_image_url: "./images/sponsor_icon.png",
        sponsor_description: "",

    }

    componentDidMount() {
        this.props.dispatch({ type: "FETCH_SPONSORS", payload: this.state.event_id });
        //scroll to top of page on load
        window.scrollTo(0, 0);
    }

    backClick = () => {
        this.props.history.push(`/event/edit/${this.props.match.params.id}`)
    }

    forwardClick = () => {
            this.props.history.push(`/demo/edit/${this.props.match.params.id}`)
    }

    handleChange = (event, property) => {
        this.setState({
            ...this.state,
            [property]: event.target.value
        })
        console.log(this.state);

    }
    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    }

    handleClick = () => {
        this.props.dispatch({ type: 'ADD_SPONSOR', payload: this.state })
        this.setState({
            sponsor_name: "",
            sponsor_price: "",
            sponsor_image_url: "./images/sponsor_icon.png",
            sponsor_description: ""
        });

        console.log(this.state);
    }

    render() {
        // allows us to connect this.props to styles 
        const { classes } = this.props;
        return (
            <Box>
                {/* Header */}
                <Header history={this.props.history} />

                <Grid container>
                    <Grid md={2}></Grid>
                    <Grid item md={9} className={classes.margin}>
                        <Typography variant="h4">Enter Sponsorship Packages</Typography>
                    </Grid>
                </Grid>
                <Box mx={10}>
                    {/* input fields */}
                        <Grid justify="center" container className={classes.formMargin}>
                        <Grid item md={3} sm={9} xs={9}className={classes.formMargin}>
                                <TextField fullWidth label="Package Name" value={this.state.sponsor_name} placeholder="Package Name" onChange={this.handleInputChangeFor('sponsor_name')}></TextField>
                            </Grid>
                        <Grid item md={3} sm={9} xs={9} className={classes.formMargin}>
                                <TextField fullWidth label="Package Price" type="number" value={this.state.sponsor_price} placeholder="Package Name" onChange={this.handleInputChangeFor('sponsor_price')}></TextField>
                            </Grid>
                        <Grid item md={3} sm={9} xs={9} className={classes.formMargin}>
                                <TextField fullWidth label="Image URL" defaultValue={this.state.sponsor_image_url} placeholder="http://" onChange={(event) => this.handleChange(event, 'sponsor_image_url')}></TextField>
                            </Grid>
                        <Grid item md={8} sm={9} xs={9} className={classes.formMargin}>
                                <TextField fullWidth multiline variant="outlined" label="Package Description" value={this.state.sponsor_description} placeholder="Package Name" onChange={this.handleInputChangeFor('sponsor_description')}></TextField>
                            </Grid>
                        <Grid item md={1} sm={9} xs={9} className={classes.formMargin}>
                                <Button className={classes.btn_def} onClick={this.handleClick}>Submit</Button>
                            </Grid>
                        </Grid>
                </Box>
                <Box>
                    <Grid container>
                        <Grid md={2}></Grid>
                        <Grid item md={9} className={classes.margin}>
                            <Typography variant="h4">Current Packages</Typography>
                        </Grid>
                    </Grid>
                    {/* existing sponsorships display here */}
                    <Grid container >
                        {
                            this.props.sponsors.map(sponsorItem =>
                                <SponsorItem key={sponsorItem.id} sponsorItem={sponsorItem} match={this.props.match} />)}


                    </Grid>

                    <Box mx={10} className={classes.margin}>
                        <Grid justify="center" container>
                            <Grid item md={3} sm={4} xs={4} className={classes.formMargin}>
                                <Button fullWidth className={classes.btn_def} variant="outlined" onClick={this.backClick}>Back</Button>
                            </Grid>
                            <Grid item md={3} sm={2} xs={2} className={classes.formMargin}></Grid>
                            <Grid item md={3} sm={4} xs={4} className={classes.formMargin}>
                                <Button fullWidth className={classes.btn_def} variant="outlined" onClick={this.forwardClick}>Next</Button>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>

            </Box>


        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
EditSponsor.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    sponsors: state.sponsors,
    oneEvent: state.oneEvent,

});

// const putStateOnProps = reduxState => ({reduxState});
export default connect(mapStateToProps)(withStyles(styles)(EditSponsor));