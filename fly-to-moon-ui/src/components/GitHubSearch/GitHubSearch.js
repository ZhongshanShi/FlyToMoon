import React, {useState} from 'react';
import DisplayList from './DisplayList';
import SearchBox from './SearchBox';


export default function GitHubSearch() {

  const [linkReturnValueList, setLinkReturnValueList] = useState([]);
  const [human,setHuman] = useState({
      isHot:'jay', wind:31
  })
  const [items, setItems] = useState([{name:'table',number:3},{name:'car',number:4}]);
  // const [displayList, setDisplayList] = useState('');

  const handleSearch =(users)=>{
    setLinkReturnValueList(users);
  }

  const deleteLastItem=()=>{
    
    const newlist = linkReturnValueList.filter((item)=>item.login === 'ZhongshanShi');
    console.log(newlist);
    console.log(linkReturnValueList);
    setLinkReturnValueList(newlist);
    setTimeout(() => {
      console.log('SECONDE',linkReturnValueList);
    }, 5000);
    
  }

  // in react useHook, setState is overwriting
  const handleHuman=()=>{
    setHuman((preState)=>{
      return {...preState, isHot:'ling'}});
    const newItem=[{name:'house',number:5},{name:'shoes',number:90}];
    setItems(preState=>[...preState,...newItem]);
  }
  return (
    <>
      <div><SearchBox handleSearch={handleSearch} deleteLastItem={deleteLastItem}/></div> 
      <div><DisplayList linkReturnValueList={linkReturnValueList}/></div>
      <button onClick={()=>{
        console.log(linkReturnValueList)
      }}>showvalue</button>
      <p>{human.isHot} is {human.wind}</p>
      <button onClick={handleHuman}>changeHuman</button>
      <ul>
        {items.map((item)=>
          <li>{item.name} has {item.number}</li>
        )}
      </ul>
    </>
  )
}
