import React from 'react';
import {Typography, Button} from '@material-ui/core';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        margin: '10px',
        textTransform: 'none'
    },
    icon: {
        color: '#FFFFFF'
    },
})

function Header({onHomeClick}) {
    const classes = useStyles()
    return (
    <>
            <Button className={classes.root} onClick={onHomeClick}>
                <FingerprintIcon className={classes.icon} fontSize='large'/>
                <Typography variant='h5' color='textPrimary'>Quiz Heroes</Typography>
            </Button>
    </>
    )
}

export default Header