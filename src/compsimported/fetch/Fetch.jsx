import React, {useState, useEffect} from 'react';

const Fetch = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // const fetchUsers = async () =>{
    //     await fetch('https://jsonplaceholder.typicode.com/users')
    //     .then((res) => res.json())
    //     .then((data) => setUsers(data))
    //     .catch((err) => {
    //         console.log(err.message)
    //     });

    //     console.log(users.name)
    // }

    const fetchUsers = async () => {
        try {
            const api = await fetch('https://jsonplaceholder.typicode.com/users');
            if(!api.ok) throw Error('did not get response data...')
            const result = await api.json();
            setUsers(result)
            // console.log(users)
        }
        catch(err) {
            setError(err.message)
            console.log(error)
            console.log(err.message)
        }finally{
            setIsLoading(false);
        }
    };

    useEffect(() => {
        // fetchUsers()
        // (async() => await fetchUsers())()
        setTimeout(() => {
            (async () => await fetchUsers())()
        }, 2000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <>
            <h2>Fetch API: <span style={{color: 'red', fontSize: '1rem', fontStyle: 'italic'}}>{error}</span></h2>
            {isLoading && <p>Loading Items...</p>}
            <ul>
                {users.map((user) => {
                    return(
                        <li key={user.id}>Name: <b>{user.name}</b>: &nbsp; email: &nbsp;{user.email} ---- Address: {user.address.street}</li>
                    )
                })}
            </ul>
        </>
    )
};

export default Fetch;