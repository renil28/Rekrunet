import * as React from 'react';
import Card from '@mui/material/Card';
import {useRef, useEffect, useState} from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { DialogTitle } from '@mui/material';
import * as tf from "@tensorflow/tfjs";
import * as qna from "@tensorflow-models/qna";
import * as Loader from "react-loader-spinner";
import { Fragment } from 'react';
import Logo from "../img/logo.png";
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { faker } from '@faker-js/faker';
import fetch from "node-fetch";


//Generation of Questions
async function query(data) {
  const response = await fetch(
      "https://api-inference.huggingface.co/models/mrm8488/t5-base-finetuned-question-generation-ap",
      {
          headers: { Authorization: `Bearer ${'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'}` },
          method: "POST",
          body: JSON.stringify(data),
      }
  );
  const result = await response.json();
  return result;
}



export default function MultiActionAreaCard() {
  // Setup references and state hooks
  const passageRef = useRef(null); 
  const questionRef = useRef(null);
  const [answer, setAnswer] = useState(); 
  const [model, setModel] = useState(null); 

  const [textValue, setTextValue] = useState('');
  

    //single random incorrect answers generator
    function randomProfile() {
    return {
        names: faker.hacker.noun() , // Random Technical names
        fullnames: faker.name.fullName(), //Random Full names, useful for questions related to founders etc.
        phrase: faker.hacker.verb(), // Random Technical phrases
        terms: faker.helpers.arrayElement(['React', 'Java', 'Firebase','SQL','MySQL','Python','Colab','C','C#','Ruby','JavaScript','NodeJS']),//Programming Languages
        nterms: faker.helpers.arrayElement(['0','1','2','3','4','5','6', '7','8','9','10','404-Error','403-Error','402-Error','401-Error']),// Numerical Terms
        bterms: faker.helpers.arrayElement(['00','01','10','11','000','001','010','011','100','101','110','111','1000','11100000','11100011']),// Binary Terms
        simans: faker.helpers.arrayElement(['All of the Above','None of the Above','Either Option 1 or 2 is true','Either Option 2 or 3 is true','Incorrect','Correct','True','False','Maybe True','Maybe False','Either Option 3 or 4 is true'])
       }
    }

    //define a method to generate incorrect answers up to 'max_size' amount
    const profile = function (max_size) {
    const  incans = [];
    for (let index = 0; index < max_size; index++) {
        incans.push(randomProfile());
    }
    return incans;
    };
  
  const users_group = profile(100);
  
  // Load Tensorflow Model
  const loadModel = async ()=>{
    const loadedModel = await qna.load()
    setModel(loadedModel); 
    console.log('Model loaded.')
  } 

  // Handle Questions
  const answerQuestion = async (e) =>{
    if (e.which === 13 && model !== null ){
      console.log('Question submitted.')
      const passage = passageRef.current.value
      const question = questionRef.current.value

      const answers = await model.findAnswers(question, passage)
      setAnswer(answers); 
      console.log(answers)

      //Generate Questions Based on the Passage
      query(`answer: ${passage}`).then((response) => {
        console.log(JSON.stringify(response));
        let x = JSON.stringify(response);
        document.getElementById('myId11').innerHTML = x.slice(34);
        document.getElementById('myId').innerHTML = JSON.stringify(response);
      });
      query(`answer: ${passage.slice(20)}`).then((response) => {
        console.log(JSON.stringify(response));
        let x = JSON.stringify(response);
        document.getElementById('myId12').innerHTML = x.slice(34);
        document.getElementById('myId2').innerHTML = JSON.stringify(response);
      });
      query(`answer: ${passage.slice(40)}`).then((response) => {
        console.log(JSON.stringify(response));
        let x = JSON.stringify(response);
        document.getElementById('myId13').innerHTML = x.slice(34);
        document.getElementById('myId3').innerHTML = JSON.stringify(response);
      });
      query(`answer: ${passage.slice(60)}`).then((response) => {
        console.log(JSON.stringify(response));
        let x = JSON.stringify(response);
        document.getElementById('myId14').innerHTML = x.slice(34);
        document.getElementById('myId4').innerHTML = JSON.stringify(response);
      });
      query(`answer: ${passage.slice(80)}`).then((response) => {
        console.log(JSON.stringify(response));
        let x = JSON.stringify(response);
        document.getElementById('myId15').innerHTML = x.slice(34);
        document.getElementById('myId5').innerHTML = JSON.stringify(response);
      });

    }  
  }

  useEffect(()=>{loadModel()}, [])
  
  return (
    <Card sx={{ maxWidth: 1200 }}>
      <CardActionArea>
        <CardContent>
        <CardMedia
        component="img"
        alt="rekrunet logo"
        height="250"
        image= {Logo}
           />
           <Typography gutterBottom variant='h5' align='center'> Artificial Intelligence Assisted Q/A Tool</Typography>
          <Typography gutterBottom variant="h5" component="div">
           <h6>Type your Question Here and Enter to Generate Answers/Questions</h6>
          <input ref={questionRef} onKeyPress={answerQuestion} size="80"></input>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <h4>Type your passage here</h4>
          <textarea ref={passageRef}  rows="10" cols="80"></textarea>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <h4>Generated Answers:</h4>
          {answer ? answer.map((ans, idx) =><div><b>Answer {idx+1} - </b> {ans.text} ({Math.floor(ans.score*100)/100})</div>) : ""}
          </Typography>
          <br></br>
          <Typography variant="body2" color="text.secondary">
            <h4>Generated Questions:</h4>
            <div id="myId"></div>
            <div id="myId2"></div>
            <div id="myId3"></div>
            <div id="myId4"></div>
            <div id="myId5"></div><br></br>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <h4>Generated Incorrect Answers:</h4>
            <b>Incorrect Answer 1 (Technical Terms) -</b> {users_group[Math.floor(Math.random()*users_group.length)].names}<br></br>
            <b>Incorrect Answer 2 (Names) -</b> {users_group[Math.floor(Math.random()*users_group.length)].fullnames}<br></br>
            <b>Incorrect Answer 3 (Numerical Terms) -</b> {users_group[Math.floor(Math.random()*users_group.length)].nterms}<br></br>
            <b>Incorrect Answer 4 (Programming Languages) -</b> {users_group[Math.floor(Math.random()*users_group.length)].terms} <br></br>
            <b>Incorrect Answer 5 (Binary Terms) -</b> {users_group[Math.floor(Math.random()*users_group.length)].bterms}<br></br>
            <b>Other Answers -</b> {users_group[Math.floor(Math.random()*users_group.length)].simans}<br></br>
          </Typography>
          <br></br>
          <Typography variant="body2" color="text.secondary">
            <h4>Generated Incorrect Phrases:</h4>
            <b>Incorrect Answer 1 -</b> {users_group[Math.floor(Math.random()*users_group.length)].terms} <div id="myId11" style={{display: 'inline-block'}} ></div><br></br>
            <b>Incorrect Answer 2 -</b> {users_group[Math.floor(Math.random()*users_group.length)].terms} <div id="myId12" style={{display: 'inline-block'}}></div><br></br>
            <b>Incorrect Answer 3 -</b> {users_group[Math.floor(Math.random()*users_group.length)].terms} <div id="myId13" style={{display: 'inline-block'}}></div><br></br>
            <b>Incorrect Answer 4 -</b> {users_group[Math.floor(Math.random()*users_group.length)].terms} <div id="myId14" style={{display: 'inline-block'}}></div><br></br>
            <b>Incorrect Answer 5 -</b> {users_group[Math.floor(Math.random()*users_group.length)].terms} <div id="myId15" style={{display: 'inline-block'}}></div><br></br>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}