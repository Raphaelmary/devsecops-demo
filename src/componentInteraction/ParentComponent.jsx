import React, {useState} from 'react';
import ChildComponent from './ChildComponent';

const Parentcomponent = () => {
    const [channel, setChannel] = useState({
        name: 'UI Intellisence',
        twitter: ''
    })

    const receiveData = (data) => {
        setChannel(() => ({
            ...channel,
            twitter: data
        }))
    }

    return(
        <>
            <div style={{color:'greenyellow', width: '80%', height: '70vh', backgroundColor: 'purple', padding: '1rem'}}>
                <h2 style={{fontSize: '2.4rem'}}>Parent Component</h2>  
                <h2>{channel.name}</h2> 
                <p>Data From Child: {channel.twitter}</p>    
                <ChildComponent channel={channel.name} sendData={receiveData} />
            </div>
        </>
    )
};

export default Parentcomponent;