import React, { useState, useEffect } from 'react';
import UserList from './api/api';

const AsyncAwait = () => {
    const [users, setUsers] = useState({
        listofUsers: []
      })

      useEffect(() => {
        let response = {};
        let fetchData = async () => {
            try {
                response = await UserList.getAllUsers();
                setUsers(() => ({
                    listofUsers: response.data
                }))
            }
            catch(err) {
                console.log(err)
            }
          }
    
        fetchData()
        
        //clean up function component will unmount
        return () => {
            response = null;
            console.log('clean-up function...')
        }
      }, [])
    
  return (
    <>
        <h1>React With Axios - ASYNC/AWAIT</h1>
        <table className='table'>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Location</th>
                <th>Phone</th>
                <th>Website</th>
            </tr>
            </thead>
        {
            users.listofUsers.length > 0 && users.listofUsers.map((u) => {
            return (
                <tbody>
                    <tr key={u}>
                    <td>{u.id}</td>
                    <td>{u.name}</td>
                    <td>{u.username}</td>
                    <td>{u.email}</td>
                    <td>{u.address.city}</td>
                    <td>{u.phone}</td>
                    <td>{u.website}</td>
                    </tr>
                </tbody>            
            )
            })  
        }
        </table>
        {/* <pre>{JSON.stringify(users.listofUsers)}</pre> */}
    </>
  )
}

export default AsyncAwait
