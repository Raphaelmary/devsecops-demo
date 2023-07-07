import React, {useState} from 'react';

function StateFunction() {
    const [ name ] = useState({
        students: [
            {
                studentName: 'mary',
                age: 4
            },
            {
                studentName: 'fudrat',
                age: 10
            }
        ]
    })
  return (
    <>
        <h2>Function State</h2>
        <span>{JSON.stringify(name)}</span>
        <h3>Name: {name.students[0].studentName}</h3>
        <h3>Name: {name.students[1].age}</h3>
    </>
  )
}

export default StateFunction
