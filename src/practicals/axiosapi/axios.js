import axios from 'axios';

class UserList {
    static getAllUsersList(){
        let url = 'https://jsonplaceholder.typicode.com/users';
        return axios.get(url)
    }
};

export default UserList;