import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const handleAlert = (username) => {
        alert(`Welcome...${username}`)
        localStorage.setItem('username', username)
    }
    return(
        <>
            <h2>Parent Component</h2>
            <ChildComponent handleAlert={handleAlert}/>
        </>
    )
};

export default ParentComponent;