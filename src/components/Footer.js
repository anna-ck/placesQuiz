import React from 'react';
import {Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        margin: '10px',
    },
})

function Footer () {
    const classes = useStyles()
    return (
        <Typography variant='body2' color='textSecondary' className={classes.root}>Copyright by ACK 2020</Typography>
    )
}

export default Footer