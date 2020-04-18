import React from 'react';
import './App.css';
import MessageCloud from './components/MessageCloud/MessageCloud';
import NameCmp from './components/NameCmp/NameCmp';
import Login from './components/Login/Login';
import { Route, NavLink } from 'react-router-dom';


function App() {
  return (
    <div className="wrap">


      {/* <div className="dropdown">
        <div>choose day</div>
        <nav className="navbar">
          <a href="#"></a>
          <a href="#"></a>
        </nav>
      </div>
 */}


      <NameCmp />
      <MessageCloud />
      <Login />

    </div>
  );
}

export default App;
