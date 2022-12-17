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


function Candidates() {
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

  const [newName, setNewName] = useState("");
  const [newAns, setNewAns] = useState(0);
  const [newAns2, setNewAns2] = useState(0);
  const [newAns3, setNewAns3] = useState(0);
  const [newAns4, setNewAns4] = useState(0);
  const [rightAns, setrightAns] = useState(0);


  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "resume");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, ans1: newAns, ans2: newAns2, ans3: newAns3, ans4: newAns4, rtAns: rightAns});
  };

  const updateUser = async (id) => {
    const userDoc = doc(db, "resume", id);
    await updateDoc(userDoc, {
        name: newName,
        ans1:newAns,
        ans2:newAns2,
        ans3:newAns3,
        ans4:newAns4,
        rtAns: rightAns
      }
    );
  };



  const deleteUser = async (id) => {
    const userDoc = doc(db, "resume", id);
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
        <Grid item xs={8}>
        {users.map((user) => {
        return (
         <div>   
            <br></br>
            <br></br>
            <Card sx={{ maxWidth: 750}}>
            <CardContent>
            <Typography>
            Question: {user.name}   
            </Typography>
            <Typography>
            Answer 1: {user.ans1}
            </Typography>
            <Typography>
            Answer 2: {user.ans2}
            </Typography>
            <Typography>
            Answer 3: {user.ans3}
            </Typography>
            <Typography>
            Answer 4: {user.ans4}
            </Typography>
            <Typography>
            Correct Answer : {user.rtAns}
            </Typography>
      </CardContent>
      <CardActions>
      <div>
      <Button size="small"  
        style={{margin: '0 auto', display: "flex", backgroundColor: '#7b96ec'}}
        variant="contained"onClick={handleClickOpen}>
        Update Candidate
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
                        id="outlined-required"
                        label="Question"
                        onChange={(event) => {
                            setNewName(event.target.value);
                        }}
                        />
                        <br></br>
                        <br></br>
                        <TextField
                        required
                        id="outlined-required"
                        label="Answer 1"
                        onChange={(event) => {
                            setNewAns(event.target.value);
                        }}
                        />
                        <br></br>
                        <br></br>
                        <TextField
                        required
                        id="outlined-required"
                        label="Answer 2"
                        onChange={(event) => {
                            setNewAns2(event.target.value);
                        }}
                        />
                        <br></br>
                        <br></br>
                        <TextField
                        required
                        id="outlined-required"
                        label="Answer 3"
                        onChange={(event) => {
                            setNewAns3(event.target.value);
                        }}
                        />
                        <br></br>
                        <br></br>
                        <TextField
                        required
                        id="outlined-required"
                        label="Answer 4"
                        onChange={(event) => {
                            setNewAns4(event.target.value);
                        }}
                        />
                        <br></br>
                        <br></br>
                        <TextField
                        required
                        id="outlined-required"
                        label="Correct Answer"
                        onChange={(event) => {
                            setrightAns(event.target.value);
                        }}
                        />
                        <br></br>
                        <br></br>
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
        >Delete Candidate</Button>
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

export default Candidates;
