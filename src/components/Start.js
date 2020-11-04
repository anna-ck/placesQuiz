import React from 'react';
import {Grid, Typography, Button, Paper, Card, CardMedia} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from "@material-ui/styles";
import Box from '@material-ui/core/Box';
import { FullscreenExit } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: '20px',
        margin: 'auto',
        backgroundColor: 'transparent',
        boxShadow: 'none',
    },
    header: {
        width: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding:'2rem'
    },
    card: {
        width: '380px',
        [theme.breakpoints.down("sm")] : {
            width: '300px'
        },
        [theme.breakpoints.down("xs")] : {
            width: '240px'
        }
    },
    media: {
        height: '350px',
        [theme.breakpoints.down("sm")] : {
            height: '330px'
        },
        [theme.breakpoints.down("xs")] : {
            height: '300px'
        }
    },
    button: {
        margin: '40px 0px 0px 0px'
    }
  }));

function Start({onQuizStart}) {
    const classes = useStyles()
    const theme = useTheme();
    return (
    <Paper className={classes.paper}>
        <Grid container direction='row' alignItems='flex-start' justify='center' spacing={4}>
            <Grid item class={classes.header}>
                <Typography variant='h1' color='textPrimary' align='center'>PLACES</Typography>
                <Typography variant='subtitle1' color='textPrimary' align='center'>Match the photo to the corresponding European city</Typography>
                <Box mt={3}>
                    <Button className='button' variant="contained" color="secondary" pt={2} fullWidth={true} size='large' onClick={onQuizStart}>Start quiz</Button>
                </Box>
            </Grid>
            <Grid item>
                <Card className={classes.card}>
                    <CardMedia className={classes.media} image={require("../images/tourist.jpg")} />
                </Card>
            </Grid>
        </Grid>
    </Paper>
    )
}

export default Start