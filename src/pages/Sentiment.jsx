import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Sentiment from 'sentiment';
import Timer2 from '../components/AptTimer';
import { useNavigate } from 'react-router-dom';

const sentiment = new Sentiment();

export default function Sent() {

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/testpage/hr");
  };
  
    const [phrase, setPhrase] = useState('');
    const [phrase2, setPhrase2] = useState('');
    const [phrase3, setPhrase3] = useState('');
    const [sentimentScore, setSentimentScore] = useState(null);
  
    useEffect(() => {
      setSentimentScore(sentiment.analyze(phrase));
    }, [phrase]);

    useEffect(() => {
      setSentimentScore(sentiment.analyze(phrase3));
    }, [phrase3]);

    useEffect(() => {
      setSentimentScore(sentiment.analyze(phrase2));
    }, [phrase2]);

  return (
    <Card sx={{ maxWidth: 550,  marginLeft:59}}>
      <Timer2></Timer2>
      <Typography align='center'>
        <h5>Managerial Round - Please answer these questions in 5 minutes</h5>
      </Typography>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
          <i>(Problem) I had to work with another programmer who complained a lot about our projects. 
            The programmer hates me so much and doesn't contribute much to the project. 
          </i>
          <br></br>
           How will you, as a coworker, will deal in such situations?
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <textarea value={phrase} onChange={e => setPhrase(e.target.value)}
          style={{ padding: '5px ', width: '150px', height: '300px', fontSize: '12px', width: '90%' }}
          />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
          <i>(Problem) There are situations where the manager of your team constantly belittles you
            and makes you feel insecure of your work. The manager shows partiality and prefers other co-workers for 
            exciting projects. You never get a chance to showcase your skills, even though you work hard and complete projects on time.
          </i>
          <br></br>
           How will you, as a coworker, will draft a complaint to the HR or the higher authorities of the organisation?
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <textarea value={phrase2} onChange={e => setPhrase2(e.target.value)}
          style={{ padding: '5px',  width: '150px', height: '300px', fontSize: '12px', width: '90%' }}
          />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
           Describe a situation where you performed something unethical at college/workplace, even though it seemed as the right
           thing to do. 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <textarea value={phrase3} onChange={e => setPhrase3(e.target.value)}
          style={{ padding: '5px', width: '150px', height: '300px', fontSize: '12px', width: '90%' }}
          />
          </Typography>
          <Typography>
          {
          sentimentScore !== null ?
            <h9>Sentiment Score: {sentimentScore.score}</h9>
            : ''
          }

          {
          sentimentScore ?
            sentimentScore.score === 0 ?
              <h6>The candidate has a neutral stand on things. Preferred if required.</h6>
              :
              sentimentScore.score > 0 ?
              <h6>The candidate has a positive stand on things and is preferred for the job.</h6>
                :
                <h6>The candidate has a negative stand on things and is not preferred for the job</h6>
            : ''
          }

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <button id='tbutton' style={{
        border:'none',
        transition: 'all 0.3s ease 0s',
        cursor: 'pointer',
        outline: 'none',
        padding:'15px 15px',
        textAlign:'center',
        marginLeft:'250px',
        color:'white',
        backgroundColor: '#7b96ec'}} onClick={handleSubmit}>Complete Test</button>
      </CardActions>
    </Card>
  );
}