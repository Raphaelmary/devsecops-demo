import React from 'react';

const Child = (props) => {
    const [author] = React.useState({
        authorname: 'Sister Mary'
    })

    const senddata = () => {
        props.sending(author.authorname)
    }

    return(
        <>
            <button onClick={senddata}>Send Data</button>
        </>
    )
};

export default Child;