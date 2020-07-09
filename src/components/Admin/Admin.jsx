import React, { Component } from 'react';
import { connect } from 'react-redux';

//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Box, Table, TableContainer, TableHead, TableRow, TableCell, Paper, TableBody } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';
import UserList from './UserList';
import Header from '../Header/Header';
import DeleteIcon from '@material-ui/icons/Delete';
import Swal from 'sweetalert2/src/sweetalert2.js';
import '../Style/Swal.scss';

class Admin extends Component {

    state = {
        users: [],
        selectOpen: false
    }

    componentDidMount(){
        this.props.dispatch({type: 'FETCH_USER_LIST'});
        document.title = `Sponsorship Hub - Admin`; // Sets browser's title
        if (this.props.user.access_level !== 3) { this.props.history.push(`/error`) }
    }
    
    componentDidUpdate(prevProps){
        if (prevProps.userList !== this.props.userList){
            this.setState({
                users: this.props.userList
            })
        }
    }

    handleDelete = (event, user) => {
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
        Swal.fire({
            title: `Are you sure?`,
            text: `Remove ${user.name} from ${user.company} permanently?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#296EC8',
            cancelButtonColor: '#F45255',
            confirmButtonText: 'DELETE',
            cancelButtonText: 'CANCEL',
            reverseButtons: true,
        }).then(result => {
            if (result.value) {
                this.props.dispatch({ type: 'DELETE_USER', payload: user.id });
                Toast.fire({
                    icon: 'success',
                    title: `${user.name} has been deleted`
                });
            }
        })

        console.log('Deleting user:', user)
    }

    accessLevelOpen = () => {
        this.setState({
            selectOpen: !this.state.selectOpen
        })
    }

    render() {        
        // allows us to connect this.props to styles 
        const { classes } = this.props;
        return (
            <Box>
                {/* Header */}
                <Header history={this.props.history} />

                <Grid container justify="space-evenly">
                    <Grid item md={8} xs={11}>

                <Typography variant="h1">User List</Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                                <TableRow className="DemoBackground">
                                    <TableCell>User</TableCell>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Company</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Phone</TableCell>
                                    <TableCell>Access Level</TableCell>
                                    <TableCell>Remove</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.users.map(user => 
                                <TableRow key={user.id}>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.title}</TableCell>
                                    <TableCell>{user.company}</TableCell>
                                    <TableCell><a rel="noopener noreferrer" href={'mailto:' + user.username} target="_blank" style={{ color: '#000000', textDecoration: 'None'}}>{user.username}</a></TableCell>
                                    <TableCell>{user.phone}</TableCell>
                                    <UserList user={user}/>
                                    <TableCell onClick={(event)=>this.handleDelete(event, user)} hover={{color: 'red'}}><DeleteIcon className={classes.coralOnHover}/></TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                    </Grid>
                </Grid>
            </Box>
        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
Admin.propTypes = { classes: PropTypes.object.isRequired };

const putStateOnProps = reduxState => ({
    userList: reduxState.admin,
    user: reduxState.user
});

export default connect(putStateOnProps)(withStyles(styles)(Admin));