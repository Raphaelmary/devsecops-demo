import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/style.scss';

const API = () => {
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);

   const data = () => axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
        setPost(res.data)
        })
    .catch((err)=>{
            setError(err.message)
        })

    useEffect(()=>{
      data()
    },[])

    const title = {
        color: '#101aaa',
        fontSize: '2.5rem',
    }

    return(
        <>
            <h1 style={title}>API Calls: </h1>
            <h1>{ post && <p>{JSON.stringify(post, null, 2)}</p>}</h1>
            <h1>{ error && <p>Error: {error}</p>}</h1>
        </>
    )
};

export default API;