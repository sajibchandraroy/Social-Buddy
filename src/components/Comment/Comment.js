import React from 'react';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import { Avatar, Box } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import './Comment.css';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      borderRadius: 20, 
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 30,
    },
    avatar: {
        backgroundColor: red[500],
    },
});

const Comment = (props) => {
    const [photos, setPhoto] = useState([]);
    const {name, body, email} = props.comment;

    useEffect( () => {
        fetch(`https://randomuser.me/api/`)
        .then(res => res.json())
        .then(data => setPhoto(data.results[0].picture))
    }, [])

    const classes = useStyles();
    

    return (
        <Box ml={35} mr = {35} mb ={3} mt ={3} >
          <Card className={classes.root} variant="outlined">
            <CardContent className="list-item">
              <Avatar aria-label="recipe" className={classes.avatar}>
              <img src={photos.medium} alt=""/>
              </Avatar>
              <Typography variant="h5" component="h2">{name}</Typography>
              <Typography variant="body2" component="p">{body}</Typography>
              <br/>
              <Typography variant="body2" component="p">email: {email}</Typography>
            </CardContent>      
          </Card>
        </Box>
        
    );
};

export default Comment;