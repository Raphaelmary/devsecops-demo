import React, {useRef} from 'react';

class CrudformApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userinfo: [],
            act: 0,
            index: '',
            title: 'User Data Form'
        }

        // this.handleSubmit = this.handleSubmit.bind(this);
    };

    

    handleSubmit = (e) => {
        let userdata = this.state.userinfo;
        let name = useRef('');
        let emailaddress = useRef('');

        let username = name.value;
        let address = emailaddress.value;

        let fullInfo = {
            'username': username,
            'email': address
        }
        
        // let username = this.refs.username.value;
        // let email = this.refs.email.value;

        // let fullInfo = {
        //     'username': username,
        //     'email': email
        // }

        userdata.push(fullInfo);

        this.setState({
            userinfo: userdata
        })

        console.log(this.state.userinfo)

    }

    render(){
        let customersname = this.state.userinfo;
        return(            
            <>
                <div className='form'>
                    <h2>{this.state.title}</h2>
                    <form>
                        <input type='text' placeholder='username...' ref='username' />
                        <br />
                        <input type='email' placeholder='email...' ref='email' />
                        <br />
                        <button type='text' onClick={(e) => this.handleSubmit(e)}>Save</button>
                    </form>
                    <div className='table'>
                        <center>
                        <table border='1'>
                            <tr>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        {
                            customersname.map((data) => {
                                return (
                                <tr>
                                    <td>{data.username}</td>
                                    <td>{data.email}</td>
                                    <td><button className='tb__btn tb'>Delete</button></td>
                                    <td><button className='tb__btn'>Edit</button></td>
                                </tr>
                                )
                            })
                        }
                        </table>
                        </center>
                    </div>
                </div>
            </>
        )
    }
};

export default CrudformApp;