import React from 'react';
import './App';
import "../styles/App.css"
import { Routes, Route } from 'react-router-dom';
import Host from './Host';
import Plans from './Plans';
import AddOns from './AddOns';
import Finish from './Finish';
import Thankyou from './Thankyou';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Host />}/>
        <Route path='/plans' element={<Plans />}/>
        <Route path='/addons' element={<AddOns />}/>
        <Route path='/finish' element={<Finish />}/>
        <Route path='/thankyou' element={<Thankyou />}/>
      </Routes>
    </div>
  );
}

export default App;
