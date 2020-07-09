// THIS IS THE ACCESS LEVEL DROP DOWN Component

import React, { Component } from 'react';
import { connect } from 'react-redux';

//MATERIAL UI
import { withStyles } from '@material-ui/core/styles';
import { TableCell, Select, MenuItem } from '@material-ui/core';
// PropTypes allows us to import style.jsx for use
import PropTypes from 'prop-types';
import styles from '../Style/Style';

import Swal from 'sweetalert2/src/sweetalert2.js';
import '../Style/Swal.scss';

class UserList extends Component {

    state = {
        select: false
    }

    accessLevelOpen = () => {
        this.setState({
            selectOpen: !this.state.selectOpen
        })
    }

    handleLevelChange = (event) =>{
        let level;
        let levelNumber = event.target.value;
        if(levelNumber === 0){
            level = 'Unapproved'
        }else if(levelNumber === 1){
            level = 'Brand';
        }else if(levelNumber === 2){
            level = 'Researcher';
        }else if(levelNumber === 3){
            level = 'Admin';
        }

        let payload = {
            user_id: this.props.user.id,
            newLevel: levelNumber
        }

        Swal.fire({
            title: 'Are you sure?',
            text: `You want to change ${this.props.user.name} to access level ${level}`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#296EC8',
            cancelButtonColor: '#F45255',
            confirmButtonText: 'CONFIRM',
            cancelButtonText: 'CANCEL',
            reverseButtons: true,
        }).then(result => {
            if(result.value){
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
                this.props.dispatch({ type:'CHANGE_ACCESS_LEVEL', payload: payload});
                Toast.fire({
                    icon: 'success',
                    title: `${this.props.user.name} changed to ${level}`
                });
            }
        })
    }

    render() {
        return (
                <TableCell>
                    <Select
                        open={this.state.selectOpen}
                        onClose={this.accessLevelOpen}
                        onOpen={this.accessLevelOpen}
                        fullWidth
                        defaultValue={this.props.user.access_level}
                        onChange={(event) => this.handleLevelChange(event)}
                        >
                        <MenuItem value={0}>Unapproved</MenuItem>
                        <MenuItem value={1}>Brand</MenuItem>
                        <MenuItem value={2}>Researcher</MenuItem>
                        <MenuItem value={3}>Admin</MenuItem>
                    </Select>
                </TableCell>
        )//end return
    };//end render
};//end class

// PropTypes allows us to import style.jsx for use
UserList.propTypes = { classes: PropTypes.object.isRequired };

// const putStateOnProps = reduxState => ({reduxState});
export default connect()(withStyles(styles)(UserList));