import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from "../img/logo.png";
import { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { Avatar } from '@mui/material';
import Tests from "../img/tests.png"
import Resume from "../img/resume.png"
import Notifications from "../img/notifications.png"
import Addjob from "../img/addjob.png"
import Candidates from "../img/candidates.jpg"
import Setq from "../img/setq.jpeg"
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://rekrunet.web.app">
        Rekrunet 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const theme = createTheme();

export default function AdminDashboard() {
    const {currentUser} = useContext(AuthContext)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar style ={{background:'#757779'}}position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Rekrunet
          </Typography>
          <Avatar alt="user" src={currentUser.photoURL} sx={{marginLeft:140,  width: 50, height: 50 }} />
          <span style={{marginRight:15}}>{currentUser.displayName}</span>
          <Button size="small" style={{backgroundColor: '#413F3F'}} variant="contained" onClick={()=>signOut(auth)}>Logout</Button>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
          <CardMedia
            color="#757779"
            component="img"
            alt="rekrunet logo"
            height="250"
            image= {Logo}
           />
            <Typography variant="h6" align="center" color="text.secondary" paragraph>
            Welcome to Rekrunet Admin Panel, make use of the MCQ AI tool to 
            help design tests and improve the standard of the questions. 
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="outlined"  onClick={()=> (window.open('/aitool'))}>MCQ AI Tool</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                     <CardMedia
                        component="img"
                        alt="rekrunet tests"
                        height="250"
                        image= {Addjob}
                    />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Add Job Positions
                    </Typography>
                    <Typography>
                    Mention the new job requirements opening in the company.
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button size="small"  
                    style={{margin: '0 auto', display: "flex", backgroundColor: '#413F3F'}}
                     variant="contained"
                     href="/addjobs"
                    >Add Jobs</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                    <CardMedia
                        component="img"
                        alt="rekrunet resume "
                        height="250"
                        image= {Candidates}
                    />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Show Candidates
                    </Typography>
                    <Typography>
                    Check for the candidates appearing for the tests.
                    </Typography> 
                  </CardContent>
                  <CardActions>
                  <Button size="small"  
                    style={{margin: '0 auto', display: "flex", backgroundColor: '#413F3F'}}
                     variant="contained"
                     href="/showcand"
                    >Show Candidates</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                     <CardMedia
                        component="img"
                        alt="rekrunet tests"
                        height="250"
                        image= {Setq}
                    />
                 
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                     Set Questions
                    </Typography>
                    <Typography>
                    Assign questions for the test.
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button size="small"  
                    style={{margin: '0 auto', display: "flex", backgroundColor: '#413F3F'}}
                     variant="contained"
                     href = "/setquestions"
                    >Set Questions</Button>
                  </CardActions>
                </Card>
                
              </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} style={{backgroundColor: '#757779'}} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Any questions? Please Visit our <Link color="inherit" href="/help"> FAQs</Link>{' '}
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}