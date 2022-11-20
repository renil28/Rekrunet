import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Test() {
    window.addEventListener('beforeunload', function (e) {
        e.preventDefault();
        e.returnValue = '';
      });
    
      const navigate = useNavigate();
      const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/testpage/hr");
      };
    
      const questions = [
        {
            questionText: 'What is the capital of France?',
            answerOptions: [
                { answerText: 'New York', isCorrect: false },
                { answerText: 'London', isCorrect: false },
                { answerText: 'Paris', isCorrect: true },
                { answerText: 'Dublin', isCorrect: false },
            ],
        },
        {
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                { answerText: 'Jeff Bezos', isCorrect: false },
                { answerText: 'Elon Musk', isCorrect: true },
                { answerText: 'Bill Gates', isCorrect: false },
                { answerText: 'Tony Stark', isCorrect: false },
            ],
        },
        {
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                { answerText: 'Apple', isCorrect: true },
                { answerText: 'Intel', isCorrect: false },
                { answerText: 'Amazon', isCorrect: false },
                { answerText: 'Microsoft', isCorrect: false },
            ],
        },
        {
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '1', isCorrect: false },
                { answerText: '4', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '7', isCorrect: true },
            ],
        },
    ];
    
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    
    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
    
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
  
  
    return (
    <Card sx={{ maxWidth: 750 , marginLeft:59}}>
      <CardContent>
      {showScore ? (
        <Typography gutterBottom variant="h5" component="div">
            You scored {score} out of {questions.length}
        </Typography>
        ) : (
        <Typography>
        <Typography gutterBottom variant="h9" component="div">
        <span>Question {currentQuestion + 1}</span>/{questions.length}
        </Typography>
        <Typography variant="h7" color="text.secondary">
        {questions[currentQuestion].questionText}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {questions[currentQuestion].answerOptions.map((answerOption) => (
							<Button variant= 'outlined' style={{marginLeft:'5px', marginTop:'5px'}} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</Button>
						))} 
                     
        </Typography>
        </Typography>
        )}
      </CardContent>
      <CardActions>
      <button style={{
        border:'none',
        padding:'15px 15px',
        textAlign:'center',
        marginLeft:'250px',
        color:'white',
        backgroundColor: '#7b96ec'}} onClick={handleSubmit}>Complete Test</button>
      </CardActions>
    </Card>
  );
}