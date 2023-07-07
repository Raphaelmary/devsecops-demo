import React from 'react';
import './App.css';
import ClassComponent from './devops/ClassComponent';
import Devops from './devops/Devops';
// import SearchBar from './compsimported/searchbar/SearchBar';
// import SearchApp from './practicals/SearchApp';
// import Fetch from './compsimported/fetch/Fetch';
// import AxiosApi from './practicals/AxiosApi';
// import Cart from './practicals/Cart';
// import Parent from './practicals/compinteract/Parent';
// import Counter from './practicals/Counter';
// import FetchApi from './practicals/FetchApi';
// import FormHandling from './practicals/FormHandling';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <h1 style={{color: '#333', fontFamily: 'Poppins'}}>React</h1>
          <Devops />
          <ClassComponent />
      </div>
    </div>
  );
}

export default App;