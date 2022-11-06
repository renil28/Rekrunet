import * as React from 'react';
import Card from '@mui/material/Card';
import {useRef, useEffect, useState} from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import * as tf from "@tensorflow/tfjs";
import * as qna from "@tensorflow-models/qna";
import * as Loader from "react-loader-spinner";
import { Fragment } from 'react';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  // 3. Setup references and state hooks
  const passageRef = useRef(null); 
  const questionRef = useRef(null);
  const [answer, setAnswer] = useState(); 
  const [model, setModel] = useState(null); 

  // 4. Load Tensorflow Model
  const loadModel = async ()=>{
    const loadedModel = await qna.load()
    setModel(loadedModel); 
    console.log('Model loaded.')
  } 

  // 5. Handle Questions
  const answerQuestion = async (e) =>{
    if (e.which === 13 && model !== null ){
      console.log('Question submitted.')
      const passage = passageRef.current.value
      const question = questionRef.current.value

      const answers = await model.findAnswers(question, passage)
      setAnswer(answers); 
      console.log(answers)

    }  
  }

  useEffect(()=>{loadModel()}, [])

  return (
    <Card sx={{ maxWidth: 1200 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <input ref={questionRef} onKeyPress={answerQuestion} size="50"></input>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <textarea ref={passageRef} rows="10" cols="80"></textarea>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {answer ? answer.map((ans, idx) =><div><b>Answer {idx+1} - </b> {ans.text} ({Math.floor(ans.score*100)/100})</div>) : ""}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}