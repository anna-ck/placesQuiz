import React from 'react';
import {Paper, Typography, Button, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { shuffledQuestions } from '../utilities/questions';

const useStyles = makeStyles({
    root: {
        background: '#FFFFFF',
        padding: '60px',
        margin: '20px',
        border: '5px solid #01ABAA',
        textAlign: 'center'
    },
})

function Result ({finalResult, onTryAgain, onHomeClick}) {
    const classes = useStyles()
    return (
        <Paper className={classes.root}>
            <Typography variant='h5' color='textSecondary'>Your final result is {finalResult}/{shuffledQuestions.length * 10}</Typography>
            <Box m={3}>
                <Button variant="contained" color="secondary" onClick={onTryAgain}>Try again</Button>
            </Box>
            <Button color="primary" onClick={onHomeClick}>Go back to home page</Button>
        </Paper>
    )
}

export default Result