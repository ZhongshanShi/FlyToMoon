import React from 'react';
import { useState } from 'react';


export default function Header(props) {

    // const [childValue, setChildValue] = useState('childValue');
    // const [inputValue, setInputValue] = useState('ff');

    const saveInput = (e) =>{
        props.passInput(e.target.value);
        // setInputValue(e.target.value);
        
    }

    // const handleClick=()=>{
    //     props.getChildValue(childValue);
    //     // setInputValue('');
    // }

    return <div>
                <input value={props.task} onChange={saveInput} type="text" placeholder="please put in tasks"/>
                {/* <button onClick={handleClick}>click button from Header</button> */}
            </div>;
}
