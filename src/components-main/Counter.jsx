import React, {useState} from 'react';

let Counter = function(){
    const [counter, setCounter] = useState({
        count: 0
    })

    const incr = () => {
        setCounter((val) => ({
            count: val.count + 1
        }))
    };

    const dec = () => {
        setCounter(() => ({
            count: counter.count - 1 > 0 ? counter.count - 1 : 0
        }))
    }

    //GREET UPDATE
    const [register, setRegister] = useState({
        message: 'Sign Up'
    })

    const morning = () => {
        setRegister(() => ({
            message: 'Subscribed. Thanks!!!'
        }))
    }
    
    const login = () => {
        setRegister(() => ({
            message: 'Login'
        }))
    }

    //passing function parameters
    const logout = (logout) => {
        setRegister(() => ({
            message: logout
        }))
    }
    return(
        <>
            <h1>{counter.count}</h1>
            <button onClick={incr}>Add +</button>
            <button onClick={dec}>Reset</button>
            <h1>{register.message}</h1>
            <button onClick={morning}>Sign Up</button>
            <button onClick={login}>Login</button>
            <button onClick={() => logout('Logged out')}>LogOut</button>
        </>
    )
};

export default Counter;