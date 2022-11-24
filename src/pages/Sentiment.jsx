import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Sentiment from 'sentiment';

const sentiment = new Sentiment();

export default function Sent() {
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
      <Typography align='center'>
        <h5>HR Round - Please answer these questions</h5>
      </Typography>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
          Can you please tell us about yourself and why do you want this job?
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
          What experience do you have that would be relevant to this role? (Mention projects, internships etc.)
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
          What are your salary expectations and what environment are you expecting from the company?
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
      <Button size="small"  
        style={{margin: '0 auto', display: "flex", backgroundColor: '#7b96ec'}}
        variant="contained"
        onClick={()=> (window.open('/login'), window.close())}
        >Submit Response</Button>
      </CardActions>
    </Card>
  );
}