import React, { Component } from 'react';
import { connect } from 'react-redux';


//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Box, Button } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';
import Swal from 'sweetalert2/src/sweetalert2.js';
import '../Style/Swal.scss';
import Header from '../Header/Header';


class CreateDemo extends Component {

    //state is used to initially populate the demographic fields and to store values for the PUT routes.
    state = {
        event_id: this.props.match.params.id,
        //the id needs to come over from the origin page to identify the event
        female: 0,
        male: 0,
        other: 0,
        Income0_24999: 0,
        Income25000_49999: 0,
        Income50000_74999: 0,
        Income75000_99999: 0,
        Income100000_149999: 0,
        Income150000_199999: 0,
        Income200000: 0,
        Age0_17: 0,
        Age18_24: 0,
        Age25_34: 0,
        Age35_44: 0,
        Age45_54: 0,
        Age55_64: 0,
        Age65: 0,
        in_state: 0,
        out_of_state: 0,
    }


    componentDidMount(){
        // console.log('CREATE DEMO MOUNTED');
        window.scrollTo(0, 0);
    };//end componentDidMount

    //this uses params navigate back to event specific sponsor page
    backClick = () => {
        this.props.history.push(`/create-sponsor/${this.props.match.params.id}`)
    }

    //this handler changes the value of th state corresponding to any field that is being changed
    handleChange = (event, property) => {
        this.setState({
            ...this.state,
            [property]: Number(event.target.value),
        });
    }
   
    //The submit checks to make sure entries are 0 or 100 and then sends a put request, upon completion the put request moves the user to the event page where they can see their updated entries
    handleSubmit = () => {
            let genderTotal = this.state.female + this.state.male + this.state.other;
            let incomeTotal = this.state.Income0_24999 + this.state.Income25000_49999 + this.state.Income50000_74999 + this.state.Income75000_99999 + this.state.Income100000_149999 + this.state.Income150000_199999 + this.state.Income200000;
            let ageTotal = this.state.Age0_17 + this.state.Age18_24 + this.state.Age25_34 + this.state.Age35_44 + this.state.Age45_54 + this.state.Age55_64 + this.state.Age65;
            let residentTotal = this.state.in_state + this.state.out_of_state;
            if ((genderTotal === 100 || genderTotal === 0) &&
                (incomeTotal === 100 || incomeTotal === 0) &&
                (ageTotal === 100 || ageTotal === 0) &&
                (residentTotal === 100 || residentTotal === 0)
            ){
            console.log("ALL 100");
                this.props.dispatch({ type: "UPDATE_DEMO", payload: this.state, history: this.props.history })
                // this is an Update because zero value placeholders were already Posted from CreateEvent
        } else {
            console.log('not ALL 100');
            Swal.fire({
                icon: 'error',
                title: 'Cannot Submit Incomplete Data',
                text: 'All categories must total 100% or 0% to be submitted',
                timer: 5000
            });
        }
    }


    render() {
        let genderPercent = this.state.female + this.state.male + this.state.other;
        let incomePercent = this.state.Income0_24999 + this.state.Income25000_49999 + this.state.Income50000_74999 + this.state.Income75000_99999 + this.state.Income100000_149999 + this.state.Income150000_199999 + this.state.Income200000;
        let agePercent = this.state.Age0_17 + this.state.Age18_24 + this.state.Age25_34 + this.state.Age35_44 + this.state.Age45_54 + this.state.Age55_64 + this.state.Age65;
        let residentPercent = this.state.in_state + this.state.out_of_state;

        // allows us to connect this.props to styles 
        const { classes } = this.props;
        return (

            <Box>
                {/* Header */}
                <Header history={this.props.history} />
                <Grid container>
                    <Grid md={1}></Grid>
                    <Grid item md={9} className={classes.margin}>
                        <Typography variant="h4">Enter Demographics</Typography>
                    </Grid>
                </Grid>
                {/* Begin Gender Demographic Inputs */}
                <Box className={classes.box_grey}>
                    <Grid container justify="center" className={classes.margin}>
                        <Grid md={9} sm={5} xs={11} className={classes.formMargin}>
                            <Typography variant="h5">Gender</Typography>
                        </Grid>
                        <Grid align="center" item container md={8}>
                            <Grid item md={3} sm={5} xs={11} className={classes.formMargin}>
                                <TextField label="Female %" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'female')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={5} xs={11} className={classes.formMargin}>
                                <TextField label="Male %" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'male')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={5} xs={11} className={classes.formMargin}>
                                <TextField label="Other %" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'other')}></TextField>
                            </Grid>
                            <Grid item md={2} sm={5} xs={11} className={classes.formMargin}>
                                <Typography className={genderPercent === 100 ? classes.goodPercent : classes.badPercent}>Total: {genderPercent}%</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                {/* End Gender Demographic Inputs */}
                {/* Begin Household Income Inputs */}
                <Box>
                    <Grid container justify="center" className={classes.margin}>
                        <Grid item md={9} sm={5} xs={11} className={classes.formMargin}>
                            <Typography variant="h5">Household Income</Typography>
                        </Grid>
                        <Grid align="center" item container md={8}>
                            <Grid item md={3} sm={5} xs={11} className={classes.formMargin}>
                                <TextField label="Less than $25,000" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'Income0_24999')}></TextField>
                            </Grid>
                            <Grid tem md={3} sm={5} xs={11} className={classes.formMargin}>
                                <TextField label="$25,000-49,000" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'Income25000_49999')}></TextField>
                            </Grid>
                            <Grid tem md={3} sm={5} xs={11} className={classes.formMargin}>
                                <TextField label="$50,000-75,999" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'Income50000_74999')}></TextField>
                            </Grid>
                            <Grid tem md={3} sm={5} xs={11} className={classes.formMargin}>
                                <TextField label="$76,000-99,999" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'Income75000_99999')}></TextField>
                            </Grid>
                            <Grid tem md={3} sm={5} xs={11} className={classes.formMargin}>
                                <TextField label="$100,000-149,999" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'Income100000_149999')}></TextField>
                            </Grid>
                            <Grid tem md={3} sm={5} xs={11} className={classes.formMargin}>
                                <TextField label="$150,000-200,000" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'Income150000_199999')}></TextField>
                            </Grid>
                            <Grid tem md={3} sm={5} xs={11} className={classes.formMargin}>
                                <TextField label="$200,001 or Greater" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'Income200000')}></TextField>
                            </Grid>
                            <Grid md={6} sm={0} xs={0}></Grid>
                            <Grid item md={2} sm={5} xs={11} className={classes.formMargin}>
                                <Typography className={incomePercent === 100 ? classes.goodPercent : classes.badPercent}>Total: {incomePercent}%</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                {/* End Household Income Inputs*/}
                {/* Begin Age Inputs */}
                <Box className={classes.box_grey}>
                    <Grid container justify="center" >
                        <Grid item md={9} sm={5} xs={11} className={classes.formMargin}>
                            <Typography variant="h5">Age Range</Typography>
                        </Grid>
                        <Grid align="center" item container md={8}>
                            <Grid item md={3} sm={5} xs={11} className={classes.formMargin}>
                                <TextField label="17 and Under" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'Age0_17')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={5} xs={11} className={classes.formMargin}>
                                <TextField label="18-24" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'Age18_24')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={5} xs={11} className={classes.formMargin}>
                                <TextField label="25-34" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'Age25_34')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={5} xs={11} className={classes.formMargin}>
                                <TextField label="35-44" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'Age35_44')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={5} xs={11} className={classes.formMargin}>
                                <TextField label="45-54" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'Age45_54')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={5} xs={11} className={classes.formMargin}>
                                <TextField label="55-64" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'Age55_64')}></TextField>
                            </Grid>
                            <Grid item md={3} sm={5} xs={11} className={classes.formMargin}>
                                <TextField label="65 or Greater" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'Age65')}></TextField>
                            </Grid>
                            <Grid md={6} sm={0} xs={0}></Grid>
                            <Grid item md={2} sm={5} xs={11} className={classes.formMargin}>
                                <Typography className={agePercent === 100 ? classes.goodPercent : classes.badPercent}>Total: {agePercent}%</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                {/* End Age Inputs */}
                {/* Begin Residency Inputs */}
                <Box>
                    <Grid container justify="center" className={classes.margin}>
                        <Grid item md={9} sm={12} className={classes.formMargin}>
                            <Typography variant="h5">Residency</Typography>
                        </Grid>
                        <Grid align="center" item container md={8}>
                            <Grid item md={1} sm={1} xs={0} className={classes.formMargin}></Grid>
                            <Grid item md={3} sm={3} xs={11} className={classes.formMargin}>
                                <TextField label="Resident" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'in_state')}></TextField>
                            </Grid>
                            <Grid tem md={1} sm={0} xs={0} className={classes.formMargin}></Grid>
                            <Grid item md={3} sm={3} xs={11} className={classes.formMargin}>
                                <TextField label="Non-Resident" type="number" placeholder="%" onChange={(event) => this.handleChange(event, 'out_of_state')}></TextField>
                            </Grid>
                            <Grid item md={0} sm={0} xs={8} className={classes.formMargin}></Grid>
                            <Grid item md={3} sm={2} xs={11} className={classes.formMargin}>
                                <Typography className={residentPercent === 100 ? classes.goodPercent : classes.badPercent}>Total: {residentPercent}%</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                {/* End Residency Inputs*/}
                {/* Buttons to navigate backward or to finish event creation */}
                <Box mx={10} className={classes.margin}>
                    <Grid justify="center" container>
                        <Grid item md={3} sm={4} xs={4} className={classes.formMargin}>
                            <Button fullWidth className={classes.btn_def} variant="outlined" onClick={this.backClick}>Back</Button>
                        </Grid>
                        <Grid item md={3} sm={2} xs={2} className={classes.formMargin}></Grid>
                        <Grid iitem md={3} sm={4} xs={4} className={classes.formMargin}>
                            <Button fullWidth className={classes.btn_def} variant="outlined" onClick={this.handleSubmit}>Submit</Button>
                        </Grid>
                    </Grid>

                </Box>
            </Box>

        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
CreateDemo.propTypes = { classes: PropTypes.object.isRequired };

const mapStateToProps = state => ({
    oneEvent: state.oneEvent,

});

// const putStateOnProps = reduxState => ({reduxState});
export default connect(mapStateToProps)(withStyles(styles)(CreateDemo));