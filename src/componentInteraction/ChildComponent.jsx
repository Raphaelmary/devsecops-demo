import React, { useState } from 'react';

const ChildComponent = function({channel, sendData}) {
    const [author] = useState({
        authorname: 'Sister Mary'
    })

    const click = () => {
        sendData(author.authorname)
    }

    return(
        < div style={{backgroundColor: '#333', width: '100%', height: '40vh', padding: '1rem', marginTop: '1rem'}}>
            <h2 style={{color: 'chocolate'}}>Child Component</h2>
            <p style={{color: 'white'}}>Data from Parent Component: <i>{channel.toUpperCase()}</i></p>
            <span>{author.authorname}</span><br />
            <button onClick={click}>Send</button>
        </div>
    )
};

export default ChildComponent;