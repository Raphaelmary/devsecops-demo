import React from 'react';

class ClassComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: [
                {
                    name: 'Mary',
                    age: 24
                },
                {
                    name: 'Fudrat',
                    age: 10
                }
            ]
        }
    }

    render(){
        return (
            <>
                <h2>First Employee</h2>
                <span>{this.state.employees[0].name}</span><br />
                <span>{this.state.employees[0].age}</span><br />
                <h2>Second Employee</h2>
                <span>{this.state.employees[1].name}</span><br />
                <span>{this.state.employees[1].age}</span>
            </>
        )
    }
};

export default ClassComponent;