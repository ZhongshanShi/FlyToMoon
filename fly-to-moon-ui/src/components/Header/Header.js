import React from 'react';
import './Header.css';

export default function Header() {
  return <div className="container">
            <div className="dropdown">dropdown</div>
            {/* the order the classes appear in the html element has no effect, the only thing that matters is the specificity of the selector and the order in which the selectors appear in the style sheet. */}
            <button className="btn btn-1">button1</button>
            <button className="btn btn-2">button2</button>
            <button className="btn btn-3">button3</button>
         </div>;
}
