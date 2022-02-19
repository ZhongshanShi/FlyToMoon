import React from 'react';
import { useState } from 'react';


export default function Header(props) {

    const saveInput = (e) =>{
        props.passInput(e.target.value);
        props.clearInput();
    }

    return <div>
                <input onChange={saveInput} type="text" placeholder="please put in tasks"/>
            </div>;
}
