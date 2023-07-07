import axios from 'axios'

class UserList {
    static getAllUsers() {
        let url = 'https://jsonplaceholder.typicode.com/users'
        return axios.get(url)
    }
}

export default UserList;