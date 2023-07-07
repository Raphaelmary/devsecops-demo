import React from 'react';
import ContactList from './ccontactapi/contactapi';

const SearchApp = function(){
    const [search, setSearch] = React.useState({
        searches: []
    })

    const handleSearch = (e) => {
        setSearch(() => ({
            ...search,
            // [e.target.name]:e.target.value
            searches: e.target.value
        }))
    }

    const searchFilter = ContactList.contacts.filter((list) => {
        return () => list.includes(search.searches)
   });

   const clear = () => {
        setSearch(() => ({
            searches: []
        }))
   }

    const showClear = search.searches.length > 0;
    const searching = search.searches.length > 0;

    return(
        <>
            <h1>Search Bar</h1>
            {showClear && <button onClick={clear}>Clear</button>}
            <input type='text' value={search.searches} name='searchitems' placeholder='search...' onChange={handleSearch}/>
            {
                searching && searchFilter.map((contact) => {
                    return(
                        <ul key={contact.login.uuid}>
                            <li>{(contact.name.first.concat(` ${contact.name.last}`))}</li>
                        </ul>
                    )
                })
            }
        </>
    )
}

export default SearchApp;