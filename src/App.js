
import React from 'react';
import './App.css';
import Myadress from './Component/Profile/Address';
import Myphoto from './Component/Profile/ProfilePhoto';
import Myname from './Component/Profile/FullName';





function App() {
  
  return (
    <div className="App">

       <Myphoto />
       <Myname />
       <Myadress /> 

    </div>
  );
}

export default App;
