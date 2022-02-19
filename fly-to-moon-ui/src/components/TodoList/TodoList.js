import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import List from './List/List';
import { nanoid } from 'nanoid';


export default function TodoList() {


    const [input, setInput] = useState([
        {id:1,name:"eat",done:true},
        {id:2,name:"sleep",done:true},
        {id:3,name:"play",done:true}
    ]);

    // const [input, setInput] = useState([
    //    "eat","sleep"
    // ]);
    const [task,setTask] = useState('');

    const passInput = (e) =>{
        setTask(e)
    };

    const handleSubmit =()=>{
        if(task.trim() === ''){
            alert('please input a value');
            return;
        }
        setInput(prevState =>[...prevState, {id:nanoid(),name:task,done:false}]);
        clearInput();
    };

    const clearInput=()=>{
        console.log('clearinput got click')

    }
    const deleteItem=(id)=>{
        console.log(id);
        setInput(input.filter(item=>item.id!==id));
    }

    return <div>
                <Header clearInput = {clearInput} passInput={passInput}/>
                <List deleteItem={deleteItem} inputValue={input}/>
                <Footer submitCase = {handleSubmit}/>
            </div>;
}
