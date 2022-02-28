import React, {useState, useRef} from 'react'

export default function LearnRedux() {

  const [countValue, setCountValue] = useState(0);
  // const [selectedNumber, useSelectNumber] = useState();

  const inputRef = useRef();

  const handleIncrement = () => { 
    setCountValue(preState=>preState+1);
  }
  
  const handleSelect =(e)=>{
    setCountValue(e.target.value)

  }
  

  return (
    <div>
      <h1>sum is {countValue}</h1>
      {/* <h2>{inputRef.current}</h2> */}
      <select ref={inputRef} onChange={handleSelect}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>&nbsp;
      <button onClick={handleIncrement}>+</button>&nbsp;
      <button>-</button>&nbsp;
      <button>incrementIfOdd</button>&nbsp;
      <button>incrementAsync</button>
    </div>
  )
}
