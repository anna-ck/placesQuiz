import React, {useState} from 'react';
import {Grid, CssBaseline} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {shuffledQuestions} from '../utilities/questions';

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
  const [nextIndex, setNextIndex] = useState(0)
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
    setNextIndex((index) => index + 1)
    setCurrentQuestion(shuffledQuestions[0])
    setStartButtonVisible(false)
    setQuizVisible(true)
    setResultVisible(false)
    setCurrentPoints(0)
  }

  const goToNextQuestion = (answerInfo) => {
    if (answerInfo) {
      setCurrentPoints((prevPoints) => prevPoints + 10)
    }
    if (shuffledQuestions[nextIndex]) {
      setCurrentQuestion(shuffledQuestions[nextIndex])
      setNextIndex((index) => index + 1)
    }
    else {
      setQuizVisible(false)
      setResultVisible(true)
      setNextIndex(0)
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
          {isQuizVisible ? <Grid item ><Quiz currentQuestion={currentQuestion} nextIndex={nextIndex} onQuestionChange={goToNextQuestion} /></Grid> : null }
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
