import React from 'react';
import UserList from './axiosapi/axios';

const AxiosApi = function(){
    const [users, setUsers] = React.useState({
        listOfUsers: []
    })

    // React.useEffect(() => {
    //     let res = {};
    //     let fetchData = async () => {
    //         try{
    //             res = await UserList.getAllUsersList()
    //             console.log(res.data);
    //             setUsers(() => ({
    //                 listOfUsers: res.data
    //             }))
    //         }
    //         catch(err){
    //             console.log(err)
    //         }
    //     }

    //     fetchData()

    //     return () => {
    //         res = null;
    //     }
    // }, [])

    React.useEffect(() => {
        UserList.getAllUsersList()
        .then((res) => {
            console.log(res.data);
            setUsers(() => ({
                listOfUsers: res.data
            }))
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return(
        <>
            <h2>Axios AsyncAwait</h2>
            {
               users.listOfUsers.length > 0 && users.listOfUsers.map((user) => (
                    <ul key={user.id}>
                        <li>{user.id}</li>
                        <li>{user.name}</li>
                        <li>{user.username}</li>
                        <li>{user.email}</li>
                        <li>{user.address.street}</li>
                    </ul>
                ))
            }
            <h1>Using Then</h1>
            {

            }
        </>
    )
};

export default AxiosApi;