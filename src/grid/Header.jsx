import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            vals: []
        }
    }

   

    componentDidMount(){
        this.fetchData();
    };

    fetchData = async () => {
        try{
            const data = await fetch('https://jsonplaceholder.typicode.com/todos');
            const val = data.json();
            this.setState({vals: val})
            console.log(val)
        }
        catch{
            console.log('err')
        }
    }


  

    render(){
        return(
            <>
                <h1>Fetch API</h1>
                {/* {console.log(this.state.vals.userId)} */}
            </>
        )
    }
};

export default Header;