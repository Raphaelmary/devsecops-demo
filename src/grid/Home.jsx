import React from 'react';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.name = 'Goodwill';
        this.movies = ['GOT', 'Batman', 'SpiderMan', 'The Rock', 'Firefighters'];
        this.state = {
            stars: '@',
            shows: '',
            count: 0,
            date: new Date()
        }

        this.Shuffle = this.Shuffle.bind(this);
    };

    

    Shuffle(){
        const i = Math.floor(Math.random() * this.movies.length);
        this.setState({shows: this.movies[i]})
    }

    Count = () => {
        this.setState({count: this.state.count + 1})
    }

    componentDidMount(){
        this.timeId = setInterval(() => {
            this.setState({date: new Date()})
        }, 1000);
    }

    tick = () => this.setState({date: new Date()})

    componentWillUnmount(){
        clearInterval(this.timeId)
    }
    
  

    render(){

        const {propName, age} = this.props;

        return(
            <>
                <h1>{this.state.date.toLocaleString()}</h1>
                <h1>Welcome! {this.name}</h1>
                <h2>Select Movies: {this.state.shows} </h2>
                <button onClick={this.Shuffle}>Shuffle</button>
                <h1>{this.state.count}</h1>
                <button onClick={this.Count}>Increase +</button>
                <button onClick={()=>this.setState({count: this.state.count - this.state.count})}>Decrease </button>
                <h2>{this.state.stars.repeat(3)}</h2>
                <h2>{this.props.name}</h2>
                <h1>{'&'.repeat(this.props.amps || 1)}</h1>
                <h1>{propName}</h1>
                <h1>{age}</h1>
            </>
        )
    }
};

export default Home;