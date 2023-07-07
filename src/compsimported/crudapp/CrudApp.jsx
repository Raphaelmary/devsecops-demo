import React, {useState} from 'react';

const CrudApp = () => {
    const [todo, setTodo] = useState('');

    const handleSubmit = () => {
        document.getElementById('item').innerHTML=todo;
    }

    return(
        <>
        <div className='crud__app'>
            <h1 style={{paddingTop: '1rem'}}>Todo App</h1>
            <form>
                <div className='input'>
                    <input type='text' placeholder='enter todo...' onChange={(e) => setTodo(e.target.value)} />
                    <button type='button' onClick={handleSubmit}>Add Todo</button>
                    <p id='item'></p>
                </div>
            </form>
        </div>
        
        </>
    )
};

export default CrudApp;