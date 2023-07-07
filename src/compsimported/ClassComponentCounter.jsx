import React from 'react';
import { MountOne } from './MountOne';
import { MountTwo } from './MountTwo';

class ClassComponentCounter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            InitCount: 0,
            bool: true,
            toggle: false,
            mountComponent: true
        }

        this.handleCount = this.handleCount.bind(this);
        this.handleClear = this.handleClear.bind(this);
    };

    handleCount(){
        this.setState({InitCount: this.state.InitCount + 1});
        this.setState({bool: !this.state.bool});
    }

    handleClear(){
        this.setState({InitCount: this.state.InitCount - this.state.InitCount});
    }

    toggleRender = () => {
        this.setState({toggleRender: !this.state.toggleRender})
    }

    mountHandle = () => {
        this.setState({mountComponent: !this.state.mountComponent})
    }

    render(){

        const reactel = 'Conditional Rendering';

        if(this.state.toggleRender){
            return (
                <>
                    <h1>{reactel}</h1>
                    <h2 style={{color: '#030'}}>Count Start: {this.state.InitCount}</h2>
                    {this.state.mountComponent ? <MountOne /> : <MountTwo componentName='Mount Component Two' />}
                    <button onClick={this.mountHandle}>Toggle Component</button>
                    <button onClick={this.toggleRender}>Toggle Render</button><br /><br />
                </>
            )
        }
        
        
        return(
            <>
                <h1>ClassComponentCounter</h1>
                <h2 className={this.state.bool ? 'color' : 'color-two'}>Count Start: {this.state.InitCount}</h2>
                <button onClick={this.handleCount}>Add +</button>
                <button onClick={this.handleClear}>Reset</button><br />
                <button onClick={this.toggleRender}>Toggle Render</button><br />
            </>
        )
    }
};

export default ClassComponentCounter;