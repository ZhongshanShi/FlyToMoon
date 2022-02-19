import React from 'react';

export default function Item(props) {


  const deleteItem =()=>{
    props.deleteItem(props.item.id);
  }

  return <div>
      <input type="checkbox" />
      {props.item.name}
      {/* {props.item.id} */}
      <button onClick={deleteItem}>delete</button>
      </div>;
}
