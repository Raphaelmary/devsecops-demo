import React from 'react';

export class MountOne extends React.Component {
    render(){
        return(
            <h1>Component One</h1>
        )
    }
}

export class MountTwo extends React.Component {
    render(){
        return(
            <h1>Component Two</h1>
        )
    }
}

export default class ClassComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            register: true
        }

        this.increase = this.increase.bind(this);
        this.toggle = this.toggle.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    increase(){
        this.setState({
            count: this.state.count + 1
        })
    }

    toggle(){
        this.setState({
            register: !this.state.register,
        })
    }

    decrease(){
        this.setState({
            count: this.state.count - 1 > 0 ? this.state.count - 1 : 0
        })
    }

    render(){
        return(
            <>
                <h2>{this.state.count}</h2>
                <h2>{(this.state.register).toString()}</h2>
                {this.state.register ? <MountOne /> : <MountTwo />}
                <button onClick={this.increase}>Add +</button>
                <button onClick={this.decrease}>Decrease -</button>
                <button onClick={this.toggle}>Toggle</button>
            </>
        )
    }
};

