import React, { useState, useEffect } from 'react';
import UserList from './services/Api';

const ReactWithAxios = () => {
  const [users, setUsers] = useState({
    listofUsers: []
  })

  useEffect(() => {
    UserList.getAllUsers()
      .then((response) => {
        console.log(response)
        setUsers(() => ({
          listofUsers: response.data
        }))
      })
      .catch((error) => {
        console.log(error)
      })

    return () => {
      console.log('clean-up function...')
    }
  }, [])

  return (
    <>
        <h1>React With Axios - REST API</h1>
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
                    <tr key={u.id}>
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

export default ReactWithAxios;
