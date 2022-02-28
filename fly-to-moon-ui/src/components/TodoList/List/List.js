import React from 'react';
import Item from './Item';
import { useState } from 'react'; 

export default function List(props) {
 
  const {inputValue}= props;

  const deleteItem=(id)=>{
    props.deleteItem(id);
  }

  return (
            <div>
              <ul>
                {inputValue.map((item)=>
                  <Item key={item.id} item={item} deleteItem={deleteItem}/>
                )}
              </ul>
            </div>
          )
}
