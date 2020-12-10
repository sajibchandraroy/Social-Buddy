import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';
import './Post.css';


const Post = (props) => {
    const {id, title, body} = props.post;
    const useStyles = makeStyles({
        root: {
          minWidth: 345,
          borderRadius: 20,
          border: '1px solid black',                   
        },   
    });
    const classes = useStyles();

    return (              
        <Box ml={25} mr = {25} mt ={5}>
            <Card className={classes.root}>
                <CardContent >
                  <Typography variant="h5" component="h2" className="title" >
                    {title}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {body}
                  </Typography>
                </CardContent>
                {
                    props.showSeeMore &&
                    <CardActions>
                    <Link to={`/detail/${id}`} className="btn-see-more">
                        <Button variant="contained" color="primary">See More</Button>
                    </Link>        
                    </CardActions>
                }    
            </Card>
        </Box>
    );
};

export default Post;