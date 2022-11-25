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

const cards = [1, 2, 3];

const theme = createTheme();

export default function Notifications() {
    const {currentUser} = useContext(AuthContext)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Rekrunet
          </Typography>
          <Avatar alt="user" src={currentUser.photoURL} sx={{marginLeft:140,  width: 50, height: 50 }} />
          <span style={{marginRight:15}}>{currentUser.displayName}</span>
          <Button size="small" style={{backgroundColor: '#7b96ec'}} variant="contained" onClick={()=>signOut(auth)}>Logout</Button>
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
            Check Notifications
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="outlined"  href='/'>Home</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={0}>
              <Grid xs={12} sm={1} md={15}>
                <Card
                  sx={{ height: '100%', backgroundColor: '#7ba7d4', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Software Developer
                      <Button size="small"  
                        disabled
                        style={{ marginLeft:'12px', backgroundColor: '#FFA500', color:'#000000'}}
                        variant="outlined"
                    >In Progress</Button>
                    </Typography>
                    <Typography>
                     The results are yet to be compiled, please wait.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid> 
              <br></br>
              <Grid xs={12} sm={1} md={15}>
                <Card
                  sx={{ height: '100%', backgroundColor: '#7ba7d4', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      UI/UX Developer
                      <Button size="small"  
                        disabled
                        style={{ marginLeft:'12px', backgroundColor: '#FF0000', color:'#000000'}}
                        variant="outlined"
                    >Not Selected</Button>
                    </Typography>
                    <Typography>
                     The Candidate is not selected due to test performance.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>     
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} style={{backgroundColor: '#7ba7d4'}} component="footer">
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