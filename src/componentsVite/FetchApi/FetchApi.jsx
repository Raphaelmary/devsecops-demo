import React, { useState, useEffect } from 'react';

function FetchApi(){
    const [ getUsers, setUsers ] = useState([]);
    const [error, setError] = useState('')

    const data  = async () => {
         await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {res.json()})
        .then((result) => { setUsers(result)})
        .catch((err) => {setError(err.message)})
    }

    useEffect(() => {
        data()
    },[])


    return(
        <>
           <h1>Error: {error}</h1>
           <ul>
                {getUsers.map((user) => {
                    return(
                        <li key={user.id}>{user.id}</li>
                    )
                })}
           </ul>
        </>
    )
};

export default FetchApi;