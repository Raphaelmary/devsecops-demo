import React from 'react';

class ChildComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: 'omra'
        }

        this.submitUsername = this.submitUsername.bind(this);
    }

    submitUsername() {

    }

    render(){
        return(
            <>
                <p>Register: {this.state.username}</p>
                <button type='button' onClick={() => {
                    this.props.handleAlert(this.state.username);
                }}>Sign In</button>
                <button type='button' onClick={() => {
                    localStorage.clear()
                }}>Sign Out</button>
            </>
        )
    }
};

export default ChildComponent;