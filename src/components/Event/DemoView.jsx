import React, { Component } from 'react';
import { connect } from 'react-redux';

//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Box } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';

import {PieChart, Pie, Cell, Label} from 'recharts';

import '../App/App.css';

class DemoView extends Component {

    state = {
        age: [],
        gender: [],
        income: [],
        residency: [],
        COLORS: ['#F6CBCC', '#EFA1A2', '#F17A7C', '#f45255', '#D9373A', '#A01B1E', '#760E10'],
        COLORS2: ['#C5DFFF', '#A7CEFF', '#6EA7F1', '#3F7FD2', '#296EC8', '#20549A', '#0D366C'],
        COLORS3: ['#FFD3A1', '#FFAC4E', '#FF8700'],
        COLORS4: ['#31D268', '#41F575'],
        RADIAN: Math.PI / 180,
        HOVER1: false
    }

    componentDidUpdate(prevProps){
        if(prevProps.oneEvent.age != this.props.oneEvent.age){
            this.setState({
                age: this.props.oneEvent.age,
                gender: this.props.oneEvent.gender,
                income: this.props.oneEvent.income,
                residency: this.props.oneEvent.residency
            })
        }
        //scroll to top of page on load
        window.scrollTo(0, 0);
    }

    render() {        
        // allows us to connect this.props to styles 
        const { classes } = this.props;

        return (
            <Box className={classes.box_grey} my={2}>
                <Box className={classes.margin}>
                    <Grid container justify="space-evenly">
                        <Grid item md={10}>
                            <Box textAlign="flex-start" my={3}>
                                <Typography variant="h4">Attendee Demographics</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <Grid item md={10}>
                            <Grid container justify="space-around"> 
                                <Grid item md={6} sm={8} xs={8}>
                    {/* ----------------- AGE ------------------- */}
                                    <Typography variant="h6">Age Ranges</Typography>
                                    <PieChart width={365} height={310}>
                                        <Pie data={this.state.age}
                                            cx={180}
                                            cy={150}
                                            labelLine={false}
                                            label={({
                                                cx,
                                                cy,
                                                midAngle,
                                                innerRadius,
                                                outerRadius,
                                                value,
                                                index
                                            }) => {
                                                const RADIAN = Math.PI / 180;
                                                // eslint-disable-next-line
                                                const radius = 25 + innerRadius + (outerRadius - innerRadius);
                                                // eslint-disable-next-line
                                                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                                                // eslint-disable-next-line
                                                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                                                return (
                                                    <text
                                                        x={x}
                                                        y={y}
                                                        fill="#000000"
                                                        textAnchor={x > cx ? "start" : "end"}
                                                        dominantBaseline="central"
                                                    >

                                                        {value > 4 && this.state.age[index].age_range}
                                                        {value > 4 && ' (' + value + '%)'}

                                                        {/* {this.state.age[index].age_range} ({value}%)*/}
                                                    </text> 
                                                );
                                            }}
                                            outerRadius={80}
                                            fill="#8884d8"
                                            dataKey='age_percentage'
                                            nameKey={this.state.age.age_range}>
                                            
                                            {this.state.age.map((entry, i) => 
                                                <Cell onClick={() => alert(entry.age_percentage + '%' + ' attendees are age: ' + entry.age_range)} key={i} fill={this.state.COLORS[i % this.state.COLORS.length]} />
                                            )}
                                        </Pie>
                                    </PieChart>
                                   
                                </Grid>
                                
                                <Grid item md={6} sm={8} xs={8}>
                   {/* ----------------- INCOME ------------------- */}
                                    <Typography variant="h6">Household Income</Typography>
                                    <PieChart width={455} height={310}>
                                        <Pie data={this.state.income}
                                            cx={220}
                                            cy={150}
                                            labelLine={false}
                                            outerRadius={100}
                                            label={({
                                                cx,
                                                cy,
                                                midAngle,
                                                innerRadius,
                                                outerRadius,
                                                value,
                                                index
                                            }) => {
                                                const RADIAN = Math.PI / 180;
                                                // eslint-disable-next-line
                                                const radius = 25 + innerRadius + (outerRadius - innerRadius);
                                                // eslint-disable-next-line
                                                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                                                // eslint-disable-next-line
                                                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                                                return (
                                                    
                                                    <text
                                                        x={x}
                                                        y={y}
                                                        fill="#000000"
                                                        textAnchor={x > cx ? "start" : "end"}
                                                        
                                                        dominantBaseline="central"
                                                    >                                                        
                                                        {value > 4 && this.state.income[index].income_range}
                                                        {value > 4 && ' (' + value + '%)'}
                                                        
                                                        {/* {this.state.income[index].income_range} ({value}%)
                                                        </text> */}
                                                    </text>
                                                );
                                            }}
                                            outerRadius={80}
                                            fill="#000000"
                                            dataKey='income_percentage'>

                                            {this.state.income.map((entry, i) =>
                                                <Cell 
                                                    onClick={() => alert(entry.income_percentage+'%'+' households make: '+entry.income_range)}
                                                key={i} fill={this.state.COLORS2[i % this.state.COLORS2.length]} />
                                            )}
                                        </Pie>
                                    </PieChart>
                                </Grid>
                                <Grid item md={6} sm={8} xs={8}>
                    {/* ----------------- GENDER ------------------- */}
                                    <Typography variant="h6">Gender</Typography>
                                    <PieChart width={360} height={350}>
                                        <Pie data={this.state.gender}
                                            cx={170}
                                            cy={130}
                                            labelLine={false}
                                            label={({
                                                cx,
                                                cy,
                                                midAngle,
                                                innerRadius,
                                                outerRadius,
                                                value,
                                                index
                                            }) => {
                                                const RADIAN = Math.PI / 180;
                                                // eslint-disable-next-line
                                                const radius = 25 + innerRadius + (outerRadius - innerRadius);
                                                // eslint-disable-next-line
                                                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                                                // eslint-disable-next-line
                                                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                                                return (
                                                    <text
                                                        x={x}
                                                        y={y}
                                                        fill="#000000"
                                                        textAnchor={x > cx ? "start" : "end"}
                                                        dominantBaseline="central"
                                                    >
                                                        {this.state.gender[index].gender} ({value}%)
                                                    </text>
                                                );
                                            }}
                                            outerRadius={80}
                                            fill="#000000"
                                            dataKey='gender_percentage'>

                                            {this.state.gender.map((entry, i) =>
                                                <Cell key={i} onClick={() => alert(entry.gender_percentage + '%' + ' attendees are ' + entry.gender)} fill={this.state.COLORS3[i % this.state.COLORS3.length]} />
                                            )}
                                        </Pie>
                                    </PieChart>
                                </Grid>
                                <Grid item md={6} sm={8} xs={8}>
                   {/* ----------------- RESIDENCY ------------------- */}
                                    <Typography variant="h6">Attendees Location</Typography>
                                    <PieChart width={450} height={350}>
                                        <Pie data={this.state.residency}
                                            cx={220}
                                            cy={120}
                                            labelLine={false}
                                            label={({
                                                cx,
                                                cy,
                                                midAngle,
                                                innerRadius,
                                                outerRadius,
                                                value,
                                                index
                                            }) => {
                                                const RADIAN = Math.PI / 180;
                                                // eslint-disable-next-line
                                                const radius = 25 + innerRadius + (outerRadius - innerRadius);
                                                // eslint-disable-next-line
                                                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                                                // eslint-disable-next-line
                                                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                                                return (
                                                    <text
                                                        x={x}
                                                        y={y}
                                                        fill="#000000"
                                                        textAnchor={x > cx ? "start" : "end"}
                                                        dominantBaseline="central"
                                                    >
                                                        {this.state.residency[index].residency} ({value}%)
                                                    </text>
                                                );
                                            }}
                                            outerRadius={80}
                                            fill="#000000"
                                            dataKey='residency_percentage'>

                                            {this.state.residency.map((entry, i) =>
                                                <Cell onClick={() => alert(entry.residency_percentage + '%' + ' attendees are from ' + entry.residency)} key={i} fill={this.state.COLORS4[i % this.state.COLORS4.length]} />
                                            )}
                                            <Label value={this.state.residency.residency} position="outside" />
                                        </Pie>
                                    </PieChart>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
DemoView.propTypes = { classes: PropTypes.object.isRequired };

const putStateOnProps = reduxState => ({
    oneEvent: reduxState.oneEvent
});

export default connect(putStateOnProps)(withStyles(styles)(DemoView));