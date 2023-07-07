import React from 'react';

const ChildComponent = (props) => {
    return(
        <>
            <button onClick={() =>props.clickHandle('Powered by: Mary')}>Hello</button>
        </>
    )
};

export default ChildComponent;