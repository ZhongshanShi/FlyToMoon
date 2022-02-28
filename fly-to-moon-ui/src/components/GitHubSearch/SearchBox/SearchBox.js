import React, { useState } from 'react';
import axios from 'axios';

export default function SearchBox(props) {

    const [input, setInput] = useState();
    //state variable, default to an empty array

    const handleSearch=()=>{
  
        axios.get(`https://api.github.com/search/users?q=${input}`)
            .then( (response) => {
                // handle success
                const {data:{items}} = response;
                console.log(items);
                props.handleSearch(items)
                // setDisplayList(JSON.stringify(response.data, null, 2) || 'no user data')
            })
            .catch( (error) => {
                // handle error
                console.log(error);
            });
    }
  
  
    const deleteLastItem =()=>{
        props.deleteLastItem();
    }

  return (
    <div>
        <h1>Search GitHub User</h1>
        {/* <pre>{displayList}</pre> */}
        <input onChange={e=>setInput(e.target.value)} type="text" placeholder='please type keyword to search'/>&nbsp;
        <button onClick={handleSearch}>search</button>&nbsp;
        <button onClick={deleteLastItem}>delete last item</button>
    </div>
  )
}
