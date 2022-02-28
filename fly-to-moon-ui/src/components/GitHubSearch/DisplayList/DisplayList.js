import React from 'react'

export default function DisplayList(props) {

  const {linkReturnValueList} = props;

  return (
    <div>
         <ul>
            {linkReturnValueList.map((item)=>
                <li key={item.id}>
                  {item.login}
                  <img src={item.avatar_url}/>
                  {item.type}
                </li>
            )}
        </ul>
    </div>
  )
}
