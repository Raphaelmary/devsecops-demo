import axios from "axios";

class UserList {

    static getAllUsers() {
        let serverUrl = 'https://jsonplaceholder.typicode.com/users';
        return axios.get(serverUrl)
    }

}

export default UserList;

//axios is a promised based http request library. so always use the .then and .catch methods