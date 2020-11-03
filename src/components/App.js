import React, {useState} from 'react';
import {Grid, CssBaseline} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import questions from '../utilities/questions';

import Start from './Start';
import Quiz from './Quiz';
import Result from './Result';
import Footer from './Footer';
import Header from './Header';


const useStyles = makeStyles({
    rootStart: {
        minHeight: '100vh',
        background: 'linear-gradient( -24.5deg, rgb(254, 220, 61) 0%, rgb(254, 220, 61) 48%, rgb(38, 34, 40) 48%, rgb(38, 34, 40) 100%)'
    },
    rootQuiz: {
        minHeight: '100vh',
        background: 'linear-gradient( -25.5deg, rgb(254, 220, 61, 0.7) 0%, rgb(254, 220, 61, 0.7) 48%, rgb(38, 34, 40, 0.7) 48%, rgb(38, 34, 40, 0.7) 100%)',
    }
  });

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isStartButtonVisible, setStartButtonVisible] = useState(true);
  const [isQuizVisible, setQuizVisible] = useState(false);
  const [isResultVisible, setResultVisible] = useState(false);
  const [currentPoints, setCurrentPoints] = useState(0);
  const classes = useStyles({isQuizVisible})

  const openStartPage = () => {
    setCurrentQuestion(null);
    setStartButtonVisible(true);
    setQuizVisible(false);
    setResultVisible(false);
    setCurrentPoints(0)
  }

  const handleQuizStart = () => {
    setCurrentQuestion(questions[0])
    setStartButtonVisible(false)
    setQuizVisible(true)
    setResultVisible(false)
    setCurrentPoints(0)
  }

  const goToNextQuestion = (answerInfo) => {
    const currentIndex = currentQuestion.id -1;
    if (answerInfo) {
      setCurrentPoints((prevPoints) => prevPoints + 10)
    }
    if (questions[currentIndex + 1]) {
      setCurrentQuestion(questions[currentIndex + 1])
    }
    else {
      setQuizVisible(false)
      setResultVisible(true)
    }
  }

  return (
    <>
    <CssBaseline/>
    <Grid item container direction='column' justify='space-between' className={isQuizVisible ? classes.rootQuiz : classes.rootStart}>
      <Grid item container>
        <Header onHomeClick={openStartPage}/>
      </Grid>
      <Grid item container alignItems='center' justify='center' direction='row'>
          {isStartButtonVisible ? <Grid item container alignItems='center'><Start onQuizStart={handleQuizStart} /></Grid> : null }
          {isQuizVisible ? <Grid item ><Quiz currentQuestion={currentQuestion} onQuestionChange={goToNextQuestion} /></Grid> : null }
          {isResultVisible ? <Grid item><Result finalResult={currentPoints} onTryAgain={handleQuizStart} onHomeClick={openStartPage}/></Grid> : null}
      </Grid>
      <Grid item container justify='flex-start'>
        <Footer />
      </Grid>
    </Grid>
    </>
  );
}

export default App;
