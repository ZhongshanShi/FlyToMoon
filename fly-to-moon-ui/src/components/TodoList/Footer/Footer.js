import React from 'react';

export default function Footer(props) {


  const handleSubmit = () =>{

    props.submitCase();

  }


  return (
            <div>
                <button onClick={handleSubmit}>submit</button>
            </div>
         )
}
