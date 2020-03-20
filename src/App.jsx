import React from 'react';
import './App.css';
import MessageCloud from './components/MessageCloud/MessageCloud';
import NameCmp from './components/NameCmp/NameCmp';
import Login from './components/Login/Login';


function App() {
  return (
    <div className="wrap">

      <NameCmp />
      <MessageCloud />
      <Login />

    </div>
  );
}

export default App;
