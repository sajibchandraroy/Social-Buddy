import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Post from '../Post/Post';
import Comment from '../Comment/Comment';
import { Box, Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './PostDetail.css';

const PostDetail = () => {
    const {postId} = useParams();
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [postId])     

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [postId])  
    
    return (
    
        <Container>
            <Box>
                <h1>Post Id : {postId}</h1>
                <Post post={post} showSeeMore={false}></Post>
            </Box>
            <h1>Comments:</h1>
            <Box>
                {
                    comments.map(item => <Comment comment = {item}></Comment>)
                }                
            </Box>
            <Link to={`/home`} className="btn">
                <Button variant="contained" color="primary">
                    Back to Home
                </Button>
            </Link>
        </Container>
    
    
    );
};

export default PostDetail;
