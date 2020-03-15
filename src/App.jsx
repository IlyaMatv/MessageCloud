import React from 'react';
import './App.css';
import MessageCloud from './components/MessageCloud/MessageCloud';
import NameCmp from './components/NameCmp/NameCmp';


function App() {
  return (
    <div className="wrap">

      <NameCmp />
      <MessageCloud />

    </div>
  );
}

export default App;
