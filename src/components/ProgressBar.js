import React from 'react';

import { Typography, Box, LinearProgress } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    bar: {
        height: '20px',
    },
  });

const ProgressBar = ({remainingTime}) => {
    const classes = useStyles();
    return (
        <Box display="flex" alignItems="center" margin='10px'>
            <Box width="100%" mr={1}>
                <CustomizedLinearProgress variant="determinate" value={remainingTime} className={classes.bar} />
            </Box>
            <Box minWidth={15}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(remainingTime/5)}s`}</Typography>
            </Box>
        </Box>
    )
}

export default ProgressBar

const CustomizedLinearProgress = withStyles(() => ({
    colorPrimary: {
        backgroundColor: '#D3D3D3',
    },
    bar: {
        backgroundColor: '#E52A6F',
    },
}))(LinearProgress)