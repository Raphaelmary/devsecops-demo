import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {

    const HandleAlert = (funcParam) => {
        alert('Parent Component ' + funcParam)
    }

    const btn = (event, count = 1) => {
        console.log((`This function takes returns event ${event} ${count + 1}`))
    }

    return(
        <>
            <ChildComponent clickHandle={HandleAlert} /> <br />
            <button onClick={btn}>Click Me</button>
        </>
    )
};

export default ParentComponent;