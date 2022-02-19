import './App.css';
import Navigation from './components/Navigation';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calcualtor from './components/Calculator';
import TodoList from './components/TodoList';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navigation />
        <Routes>
          <Route exact path="/calculator" element = {<Calcualtor />} />
          <Route path="/todolist" element = {<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
