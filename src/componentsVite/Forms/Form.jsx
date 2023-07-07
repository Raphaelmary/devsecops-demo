import React, { useState } from 'react';

const Form = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Your details are: ${username.toLocaleUpperCase()} as username and ${password} as Password`)
        setPassword('');
        setUsername('');
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username' style={{fontSize: '1.2rem', fontWeight: '700'}}>Username</label> &nbsp;
                    <input type='text' placeholder='username...' value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='password' style={{fontSize: '1.2rem', fontWeight: '700'}}>Password</label> &nbsp;
                    <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <input type='submit' value='submit' style={{padding: '5px 25px', fontSize: '1.1rem', margin: '5px 0'}}/>
            </form>
        </>
    )
};

export default Form;