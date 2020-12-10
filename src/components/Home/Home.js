import React, { useState } from 'react';
import { useEffect } from 'react';
import Post from '../Post/Post';

const Home = () => {
    
    const [allPost, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    return (
        <div>
            <h1>Posts:</h1>
            {        
                allPost.map(item => <Post post = {item} showSeeMore={true}></Post>)
            }            
        </div>
    );
};

export default Home;