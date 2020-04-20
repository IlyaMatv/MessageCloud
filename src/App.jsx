import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import Monday from './components/Monday/Monday'
import Tuesday from './components/Tuesday/Tuesday';



function App() {
  return (
    <div className="wrap">


      <div className="navbar_wrap">
        <Navbar />
      </div>

      <div className="content_wrap">
        <Route path='/Monday' render={() => <Monday />} />
        <Route path='/Tuesday' render={() => <Tuesday />} />
      </div>


    </div>
  );
}

export default App;
