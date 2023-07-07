import React, {useState, useEffect} from 'react';

const FetchApi = function(){
    const [users, setUsers] = useState({
        usersList: []
    })

    const [error, setError] = useState({
        err: ''
    })

    const [isLoading, setIsLoading] = useState(true)

    const fetchurl = async () => {
        try{
            const api = await fetch('htts://jsonplaceholder.typicode.com/users')
            if(!api.ok) throw Error('...throw error')
            const result = await api.json();
            setUsers(() => ({
                usersList: result
            }))
        }
        catch(err){
            setError(() => ({
                err: err.message
            }))
        }
        finally{
            setIsLoading(false)
        }
    }

    // console.log(users.usersList)

    useEffect(() => {
        setInterval(() => {
            (async () => await fetchurl())()
        }, 2000)
    }, [])

    return(
        <>
            <h1>fetch api</h1>
            <span>{error.err}</span>
            {isLoading && <h3>....loading data</h3>}
            <ul>
                {
                    users.usersList.map((user) => {
                        return(
                            <>
                                <li>{user.id}</li>
                                <li>{user.name}</li>
                            </>
                        )
                    })
                }
            </ul>
        </>
    )
};

export default FetchApi;