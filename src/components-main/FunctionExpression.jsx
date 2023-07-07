import React, {Fragment} from 'react';

const FunctionExpress = function(props) {
    return (
        <Fragment>
            <h1>This is a function Expression</h1>
            <h3>Name: {props.name} <i className='fa fa-user-circle fa-2x' /></h3>
            <h3>Age: {props.age}</h3>
            <p>{JSON.stringify(props)}</p> {/* this converts the object into string for printing because you cannot print out objects without converting it to string*/}
            <br />
        </Fragment>
    )
};

export default FunctionExpress;