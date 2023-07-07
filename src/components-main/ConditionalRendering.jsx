import React, { useState } from 'react';

const ConditionalRendering = function() {
    const [login, setLogin] = useState({
        isLoggedIn: false,
        user: ''
    })

    const log = (name) => {
        setLogin(() => ({
            isLoggedIn: !login.isLoggedIn,
            user: name
        }))
    }

    return (
        <>
            <h2>Conditional Rendering</h2>
            {
                login.isLoggedIn ? <h3>Welcome Guest!</h3> : <h3>Welcome {login.user}!</h3>
            }
            {
                login.isLoggedIn ? <button onClick={() => log('Mary')}>Login</button> : <button onClick={() => log('Mary')}>Log-out</button>
            }
        </>
    )
};

export default ConditionalRendering;