import React, { useState, useEffect } from 'react';

const DigitalClockUseEffect = function() {
    const [timer, setTimer] = useState({
        currentTime: new Date().toLocaleTimeString()
    });

    useEffect(() => {
        let time = setInterval(() => {
            setTimer(() => ({
                currentTime: new Date().toLocaleTimeString()
            }))
        }, 1000)

        //clean up function
        return () => {
            clearInterval(time)
        }
    }, [])

    return (
        <>
            <h1 style={{color: 'green'}}>{timer.currentTime}</h1>
        </>
    )
};

export default DigitalClockUseEffect;