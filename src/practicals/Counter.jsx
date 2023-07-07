import React, {useState, useEffect} from 'react';

const Counter = function(){
    const [count, setCounter] = useState({
        counter: 0
    })

    const [timer, setTimer] = useState({
        time: new Date().toLocaleTimeString()
    })

    const increase = () => {
        setCounter(() => ({
            counter: count.counter + 1
        }))
    }

    const decrease = function(){
        setCounter(() => ({
            counter: count.counter - 1 > 0 ? count.counter - 1 : 0
        }))
    }

    useEffect(() => {
        let time = setInterval(() => {
            setTimer(() => ({
                time: new Date().toLocaleTimeString()
            }))
        }, 1000)

        return () => {
            clearInterval(time)
        }
    },[])

    return(
        <>
            <h1>{timer.time}</h1>
            <h2>{count.counter}</h2>
            <button onClick={increase}>Add +</button>
            <button onClick={decrease}>Subtract -</button>
        </>
    )
};

export default Counter;