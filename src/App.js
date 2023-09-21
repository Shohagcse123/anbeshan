import React, { useState } from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/HomeScreen';
import SearchScreen from './Components/SearchScreen';


function App() {
  const [searchTerm,setSearchTerm]=useState('');
  return (
    
    <Router>
      
      <div className="App">
        <Switch>
          <Route exact path={"/"} component={()=><Home/>} />
          <Route exact path={"/search"} component={()=> <SearchScreen searchTerm={searchTerm}/>}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
