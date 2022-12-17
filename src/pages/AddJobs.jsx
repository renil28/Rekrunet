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
import UiUx from '../img/uiux.jpg'
import Software from '../img/softwaredeveloper.png'
import Analyst from '../img/dataanalyst.jpg'

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

export default function AddJobs() {
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
          <Button size="small" style={{backgroundColor: '#3f3f41'}} variant="contained" onClick={()=>signOut(auth)}>Logout</Button>
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
            component="img"
            alt="rekrunet logo"
            height="250"
            image= {Logo}
           />
            <Typography variant="h3" align="center" color="text.secondary" paragraph>
             Posted Jobs
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" href='/jobadd' style={{backgroundColor: '#3f3f41'}}>Add Job</Button>
              <Button variant="outlined"  href='/dashboard2' style={{backgroundColor: '#3f3f41'}}>Home</Button>
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
                        alt="rekrunet software developer"
                        height="250"
                        image= {Software}
                    />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Software Developer
                    </Typography>
                    <Typography>
                    The MCQ Test will be based on programming languages like C, C++
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button size="small"  
                    style={{margin: '0 auto', display: "flex", backgroundColor: '#3f3f41'}}
                     variant="contained"
                     href="/setquestions"
                    >Update Questions</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                    <CardMedia
                        component="img"
                        alt="rekrunet uiux "
                        height="250"
                        image= {UiUx}
                    />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      UI/UX Designer
                    </Typography>
                    <Typography>
                    The MCQ Test will be based on User Interface Components and CSS
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button size="small" 
                    disabled 
                    style={{margin: '0 auto', display: "flex", backgroundColor: '#3f3f41'}}
                     variant="contained"
                     onClick={()=> (window.open('/login'), window.close())}
                    >Update Questions</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                     <CardMedia
                        component="img"
                        alt="rekrunet analyst"
                        height="250"
                        image= {Analyst}
                    />
                 
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                     Data Analyst
                    </Typography>
                    <Typography>
                    The MCQ Test will be based on data information and SQL Queries
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button size="small"  
                  disabled
                    style={{margin: '0 auto', display: "flex", backgroundColor: '#3f3f41'}}
                     variant="contained"
                     onClick={()=> (window.open('/login'), window.close())}
                    >Update Questions</Button>
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