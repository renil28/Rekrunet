import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/material';

const Proceed = () => {  
  return (
    <Card  sx={{ marginLeft:59, maxWidth: 550} } >
      <CardContent>
        <Typography gutterBottom variant="h9" component="div">
          Hey Candidate, Please go through the rules before proceeding to the test.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          1. Make sure that all your tabs are closed, and you have a proper internet connection.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          2. The test will commence in a new window. Closing the window might result in "No Result" status.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          3. There will be 10 questions containing various programming MCQs to answer. The time duration for the test is 2 minutes.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          4. There will an HR Round afterwards which will ask your opinion related to job, personality etc. This round has no time limit.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          5. After completion of test, you'll be redirected to the dashboard. The results will appear in the notifications section.
        </Typography>
        <Typography variant="body2" color="text.secondary">
        ----------------------------------------------------------------------------------------------------------
        </Typography>
        <Typography variant="body2" color="text.bold">
          By agreeing to these rules, you herby accept that the consequences that may occur will be based on your action and not from the portal. 
          Malpractice can lead your account to be terminated. In case of any problems, contact us in the help section. All the best. Do well, candidate!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"  
        style={{margin: '0 auto', display: "flex", backgroundColor: '#7b96ec'}}
        variant="contained"
        onClick={()=> window.open('/testpage/test', 'TestPage', 'width=1920,height=1080,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no')}
        >Proceed</Button>
      </CardActions>
    </Card>
  );
};

export default Proceed;