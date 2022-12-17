import { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { Avatar } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

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


function JobAdd() {
  const {currentUser} = useContext(AuthContext)

  const theme = createTheme();


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  const [jobName, setjobName] = useState("");
  const [jobCode, setjobCode] = useState(0);
  const [jobctc, setjobctc] = useState(0);
  const [jobopen, setjobopen] = useState(0);


  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "jobs");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: jobName, code: jobCode, ctc: jobctc, openings: jobopen});
  };

  const updateUser = async (id) => {
    const userDoc = doc(db, "jobs", id);
    await updateDoc(userDoc, {
        name: jobName, 
        code: jobCode,
        ctc: jobctc,
        openings: jobopen
      }
    );
  };



  const deleteUser = async (id) => {
    const userDoc = doc(db, "jobs", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  
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
    <div className="">
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
            <Card sx={{ maxWidth: 550 , marginTop: 5, marginLeft:10}}>
                <TextField
                required
                sx={{ m: 1, width: '30ch' }}
                id="outlined-required"
                label="Job Name"
                onChange={(event) => {
                    setjobName(event.target.value);
                }}
                />
                <br></br>
                <br></br>
                <TextField
                required
                sx={{ m: 1, width: '30ch' }}
                id="outlined-required"
                label="Job Code"
                onChange={(event) => {
                    setjobCode(event.target.value);
                }}
                />
                <br></br>
                <br></br>
                <TextField
                required
                sx={{ m: 1, width: '30ch' }}
                id="outlined-required"
                label="Job CTC"
                onChange={(event) => {
                    setjobctc(event.target.value);
                }}
                />
                <br></br>
                <br></br>
                <TextField
                required
                sx={{ m: 1, width: '30ch' }}
                id="outlined-required"
                label="Job Openings"
                onChange={(event) => {
                    setjobopen(event.target.value);
                }}
                />
                <br></br>
                <br></br>
                <CardActions>
                <Button size="small"  
                style={{margin: '0 auto', display: "flex", backgroundColor: '#7b96ec'}}
                variant="contained"
                onClick={()=> createUser()}
                >Add Job</Button>
                </CardActions>
             </Card>
        </Grid>
        <Grid item xs={8}>
        {users.map((user) => {
        return (
         <div>   
            <br></br>
            <br></br>
            <Card sx={{ maxWidth: 750}}>
            <CardContent>
            <Typography>
            Job Name: {user.name}   
            </Typography>
            <Typography>
            Job Code: {user.code}
            </Typography>
            <Typography>
            CTC: {user.ctc}
            </Typography>
            <Typography>
            Openings: {user.openings}
            </Typography>
      </CardContent>
      <CardActions>
      <div>
      <Button size="small"  
        style={{margin: '0 auto', display: "flex", backgroundColor: '#7b96ec'}}
        variant="contained"onClick={handleClickOpen}>
        Update Job
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
            <DialogTitle id="alert-dialog-title">
            {"Update the Question"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                <div>
                    <Card sx={{ maxWidth: 550}}>
                    <br></br>
                    <TextField
                required
                sx={{ m: 1, width: '30ch' }}
                id="outlined-required"
                label="Job Name"
                onChange={(event) => {
                    setjobName(event.target.value);
                }}
                />
                <br></br>
                <br></br>
                <TextField
                required
                sx={{ m: 1, width: '30ch' }}
                id="outlined-required"
                label="Job Code"
                onChange={(event) => {
                    setjobCode(event.target.value);
                }}
                />
                <br></br>
                <br></br>
                <TextField
                required
                sx={{ m: 1, width: '30ch' }}
                id="outlined-required"
                label="Job CTC"
                onChange={(event) => {
                    setjobctc(event.target.value);
                }}
                />
                <br></br>
                <br></br>
                <TextField
                required
                sx={{ m: 1, width: '30ch' }}
                id="outlined-required"
                label="Job Openings"
                onChange={(event) => {
                    setjobopen(event.target.value);
                }}
                />
                    </Card>
                 </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=> {updateUser(user.id);}}>Update Values</Button>
          <Button onClick={handleClose} autoFocus>
            Exit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
        <Button size="small"  
        style={{ margin: '0 auto', marginRight:'400px'  ,backgroundColor: '#FF0000'}}
        variant="contained"
        onClick={()=> {deleteUser(user.id);} }
        >Delete Job</Button>
      </CardActions>
    </Card>
    <br></br>
    </div>
        );
      })}
        </Grid>
      </Grid>
    </Box>
    </div>
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

export default JobAdd;
