import React from 'react';
import Child from './Child';

function Parent(){
    const [compdata, setCompdata] = React.useState({
        newName: ''
    })

    const receive = (data) => {
        setCompdata(() =>({
            newName: data
        }))
    }
    return(
        <>
            <h1>Receive Data From Child</h1>
            <h2>{compdata.newName}</h2>
            <Child sending={receive} />
        </>
    )
};

export default Parent;