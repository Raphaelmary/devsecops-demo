import React, {useState, useEffect } from 'react';
import Products from './data';

const SearchBar = (props) => {
    const {buttonColor, buttonBorder} = props;
    // const {buttonColor, buttonBorder,countItem} = props;
    const [SearchItem, setSearchItem] = useState([]);
    // const [count, setCount] = useState(countItem);

    const handleSearch = (e) => {
        setSearchItem(e.target.value);
        localStorage.setItem('product', searchFilter)
    };

    const handleClear = () => {
        setSearchItem('');
        localStorage.clear();
    };

    useEffect(() => {
        console.log(`this item was searched...${SearchItem}`)
    }, [SearchItem])

    const style = {
        fontSize: '2rem',
        color: '#11a0a0',
        fontFamily: 'Poppins',
        display: 'inline',
        paddingRight: '10px'
    };

   const searchFilter = Products.filter((list) => {
        return (
            list.includes(SearchItem)
        )
   });

    const showClearButton = SearchItem.length > 0;
    const hideList = SearchItem.length > 0;

    return (
        <>
            <input type='text' value={SearchItem} placeholder='search...' onChange={handleSearch} />
            { showClearButton && <button type='button' onClick={handleClear} style={{color: buttonColor, border: buttonBorder}}>Clears</button >}
            <ul>
               {hideList && searchFilter.map((product, index) => {
                return(
                    <li key={index} style={style}>{product}</li>
                )
               })}
            </ul>
            {/* <button onClick={() => {
                setCount(count + 1);
                localStorage.setItem('Number', count)
            }} onMouseOut={() => {
                setCount(count - count);
                localStorage.clear();
            }}>{count}</button> */}
        
        </>
    );
};

export default SearchBar;