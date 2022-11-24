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
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function EditQuestions() {

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


  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "questions");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, ans1: newAns, ans2: newAns2, ans3: newAns3, ans4: newAns4 });
  };

  const updateUser = async (id) => {
    const userDoc = doc(db, "questions", id);
    await updateDoc(userDoc, {
        name: newName,
        ans1:newAns,
        ans2:newAns2,
        ans3:newAns3,
        ans4:newAns4
      }
    );
  };



  const deleteUser = async (id) => {
    const userDoc = doc(db, "questions", id);
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
    <div className="">
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
            <Card sx={{ maxWidth: 550 , marginTop: 5, marginLeft:10}}>
                <TextField
                required
                sx={{ m: 1, width: '30ch' }}
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
                sx={{ m: 1, width: '30ch' }}
                id="outlined-required"
                label="Answer1"
                onChange={(event) => {
                    setNewAns(event.target.value);
                }}
                />
                <br></br>
                <br></br>
                <TextField
                required
                sx={{ m: 1, width: '30ch' }}
                id="outlined-required"
                label="Answer2"
                onChange={(event) => {
                    setNewAns2(event.target.value);
                }}
                />
                <br></br>
                <br></br>
                <TextField
                required
                sx={{ m: 1, width: '30ch' }}
                id="outlined-required"
                label="Answer3"
                onChange={(event) => {
                    setNewAns3(event.target.value);
                }}
                />
                <br></br>
                <br></br>
                <TextField
                required
                sx={{ m: 1, width: '30ch' }}
                id="outlined-required"
                label="Answer4"
                onChange={(event) => {
                    setNewAns4(event.target.value);
                }}
                />
                <br></br>
                <br></br>
                <CardActions>
                <Button size="small"  
                style={{margin: '0 auto', display: "flex", backgroundColor: '#7b96ec'}}
                variant="contained"
                onClick={()=> createUser()}
                >Add Question</Button>
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
      </CardContent>
      <CardActions>
      <div>
      <Button size="small"  
        style={{margin: '0 auto', display: "flex", backgroundColor: '#7b96ec'}}
        variant="contained"onClick={handleClickOpen}>
        Update Question
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
                        label="Answer1"
                        onChange={(event) => {
                            setNewAns(event.target.value);
                        }}
                        />
                        <br></br>
                        <br></br>
                        <TextField
                        required
                        id="outlined-required"
                        label="Answer2"
                        onChange={(event) => {
                            setNewAns2(event.target.value);
                        }}
                        />
                        <br></br>
                        <br></br>
                        <TextField
                        required
                        id="outlined-required"
                        label="Answer3"
                        onChange={(event) => {
                            setNewAns3(event.target.value);
                        }}
                        />
                        <br></br>
                        <br></br>
                        <TextField
                        required
                        id="outlined-required"
                        label="Answer4"
                        onChange={(event) => {
                            setNewAns4(event.target.value);
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
        >Delete Question</Button>
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
  );
}

export default EditQuestions;
