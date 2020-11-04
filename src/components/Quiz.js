import React, {useState} from 'react';
import { Paper, Card, CardHeader, CardMedia, CardContent, CardActions, ListItemIcon, IconButton, Typography, List, ListItem, ListItemText, Box } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core/styles';
import ProgressBar from './ProgressBar';

const useStyles = makeStyles(theme => ({
    paper: {
        margin: 'auto',
        backgroundColor: 'transparent',
        boxShadow: 'none'
    },
    message: {
        color: '#ffffff',
        backgroundColor: '#ff0000'
    },
    card: {
        width: '400px',
        border: '10px solid #01ABAA',
        [theme.breakpoints.down("sm")] : {
            width: '360px'
        },
        [theme.breakpoints.down("xs")] : {
            width: '320px'
        }
    },
    media: {
        height: '250px',
        [theme.breakpoints.down("sm")] : {
            height: '180px'
        },
        [theme.breakpoints.down("xs")] : {
            height: '160px'
        }
    },
    correct: {
        backgroundColor: '#00CC00',
        '&:hover': {
            backgroundColor: '#00CC00',
        },
        '&:selected' : {
            backgroundColor: '#00CC00'
        }
    },
    uncorrect: {
        backgroundColor: '#FF3333',
        '&:hover': {
                backgroundColor: '#FF3333',
        },
        '&:selected': {
            backgroundColor: '#FF3333',
        },
        '&:disabled': {}
    },
    action: {
        marginLeft: 'auto',
    },
  }));

function Quiz ({currentQuestion, nextIndex, onQuestionChange}) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
    const [remainingTime, setRemainingTime] = useState(100);
    const [message, setMessage] = useState('Time is up!');
    const classes = useStyles();
    const answers = currentQuestion.answers;


    React.useEffect(() => {
        const timer = setInterval(() => {
          setRemainingTime((prevProgress) => (prevProgress <= 0 ? null : prevProgress - 0.5));
        }, 100);
        return () => {
          clearInterval(timer);
        };
      }, []);


    const handleAnswerCheck = (e, key) => {
        setRemainingTime(0)
        setMessage('')
        if (!selectedAnswer) {
            e.preventDefault();
            setSelectedAnswer(key)
            if (key === currentQuestion.correct) {
                setIsAnswerCorrect(true)
            }
            else {
                setIsAnswerCorrect(false)
            }
        }
    }

    const handleQuestionChange = () => {
        setRemainingTime(100)
        setSelectedAnswer(null)
        setIsAnswerCorrect(null)
        setMessage('Time is up!')
        onQuestionChange(isAnswerCorrect)
    }

    return (
        <Paper className={classes.paper}>
            <Card className={classes.card}>
                <CardHeader subheader={`${nextIndex}/12`}/>
                {remainingTime <= 0 ? 
                    <Box height='40px'>
                        <Typography variant='body1' className={classes.message} align='center'>{message}</Typography>
                    </Box> : 
                    <ProgressBar remainingTime={remainingTime}/>}
                <CardMedia className={classes.media} image={require(`../images/${currentQuestion.img}.jpg`)} />
                <CardContent>
                    <List>
                    {answers.map((answer) => (
                        <ListItem className={selectedAnswer && answer.key === currentQuestion.correct ? classes.correct : selectedAnswer === answer.key ? classes.uncorrect : ''} key={answer.key} button disabled={remainingTime <= 0 && answer.key !== selectedAnswer} onClick={e => handleAnswerCheck(e, answer.key)}>
                            <ListItemIcon>
                                {(!remainingTime || selectedAnswer) && answer.key === currentQuestion.correct ? <DoneIcon/>: selectedAnswer === answer.key ? <CloseIcon /> : null}
                            </ListItemIcon>
                            <ListItemText 
                                disableTypography
                                primary={<Typography variant="body1" color='textSecondary'>{answer.text}</Typography>}></ListItemText>
                        </ListItem>
                        ))}
                    </List>
                </CardContent>
                <CardActions>
                    <IconButton disabled={remainingTime > 0} className={classes.action} onClick={handleQuestionChange}>
                        <ArrowForwardIcon fontSize='large' color={remainingTime > 0 ? 'disabled' : 'secondary'}/>
                    </IconButton>
                </CardActions>
            </Card>
        </Paper>
    )
}

export default Quiz

