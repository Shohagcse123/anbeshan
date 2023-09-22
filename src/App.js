import React, { useState } from 'react';
import { Switch, Route,useHistory } from 'react-router-dom';
import './App.css';
import Home from './Components/HomeScreen';
import SearchScreen from './Components/SearchScreen';



function App() {
  const [searchTerm,setSearchTerm]=useState('');
  const history= useHistory();
  const setSearch=(term)=>{
   setSearchTerm (term);
   history.push('/search');
  
  };
  return (
    
   
      
      <div className="App">
        <Switch>
          <Route exact path={"/"} component={()=><Home setSearch={setSearch}/>} />
          <Route exact path={"/search"} component={()=> <SearchScreen searchTerm={searchTerm}/>}/>
        </Switch>
      </div>
  
    
  );
}

export default App;
