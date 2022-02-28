import React from 'react';
import {useState} from 'react';

export default function Item(props) {


  const [mouse,setMouse] = useState(false);

  const deleteItem =()=>{
    props.deleteItem(props.item.id);
  }

  const handleMouseChange=(e)=>{
    return ()=>{
      setMouse(e);
    }

  }
  return <li style={{backgroundColor:mouse?"#ddd":'white'}} onMouseEnter={handleMouseChange(true)} onMouseLeave={handleMouseChange(false)}>
            <label>
              <input type="checkbox" />
              <span>{props.item.name}</span>
            </label>
            <button style={{display:mouse?'block':'none',backgroundColor:"blue"}} onClick={deleteItem}>delete</button>
         </li>;
}
