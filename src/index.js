import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoApp from './App';
import { Router } from './component/router';

ReactDOM.render(
  <Router>
    <ToDoApp />
  </Router>,
  document.getElementById('root')
);
