import React, { Component } from 'react';
import style from './Style.module.css';

export class MountTwo extends Component {
    constructor(props){
        super();
        this.state = {
            componentName: 'Another Component',
            timeMounted: '',
        }
    };

    displayDate = () => {
        const date = new Date();
        const fullDate = date.toLocaleString();
        this.setState({timeMounted: fullDate})
    }

    componentDidMount() {
        setInterval(() => {
            this.displayDate()
        }, 1000);

        console.log(this.displayDate())
    }

    render(){
        return(
            <>
                <h1>{this.props.componentName} mounted at&nbsp;<span className={style.timeColor}>{this.state.timeMounted}</span></h1>
                <p>Component Name from State : {this.state.componentName}</p>
            </>
        )
    }
}