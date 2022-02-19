import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom'

export default function Nagivation() {

  return <nav>
            <Link to="/home">
                 <h3>Fly to Moon</h3>
            </Link>
            <ul className="nav-links">
                <Link to="/calculator">
                    <li>Calculator</li>
                </Link>
                <Link to="/todolist">
                    <li>TodoList</li>
                </Link>
            </ul>
         </nav>
}
