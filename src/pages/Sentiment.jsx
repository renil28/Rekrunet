import React, { useState, useEffect } from 'react';
import Sentiment from 'sentiment';

const sentiment = new Sentiment();

function Sent() {

  const [phrase, setPhrase] = useState('');
  const [sentimentScore, setSentimentScore] = useState(null);

  useEffect(() => {
    setSentimentScore(sentiment.analyze(phrase));
  }, [phrase]);

  return (
    <div className=''>
      <div>
        <h3>Can you please tell about yourself and why do you want this job?</h3>

        <input value={phrase} onChange={e => setPhrase(e.target.value)}
          style={{ padding: '20px', fontSize: '20px', width: '90%' }}
        />

        {
          sentimentScore !== null ?
            <p>Sentiment Score: {sentimentScore.score}</p>
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

      </div>
    </div>
  );
}

export default Sent;
