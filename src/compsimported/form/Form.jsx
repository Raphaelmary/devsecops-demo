import React, {useState} from 'react';

const Form = () => {
    const [username, setUsername] = useState('');
    const [aboutme, setAboutme] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleAboutme = (e) => {
        setAboutme(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        localStorage.setItem('Username', username);
        localStorage.setItem('Password', password);
        localStorage.setItem('About Me', aboutme);
    }

    function handleClear(e) {
        localStorage.clear()
    }

    return(
        <>
            <h2>Form Registration</h2>
            <form onSubmit={(e) => {
                e.preventDefault()
                setAboutme('');
                setPassword('');
                setUsername('');
            }}>
                <input type='text' autoFocus value={username} onChange={handleUsername} placeholder='username...' /><br />
                <textarea rows='5' cols='40' value={aboutme} onChange={handleAboutme} placeholder='about me...'></textarea><br />
                <input type='password' value={password} onChange={handlePassword} placeholder='password...' /><br />
                <button type='submit' onClick={handleSubmit}>Submit</button>
                <button type='submit' onClick={handleClear}>Clear Data</button>
            </form>
        </>
    )
};

export default Form;