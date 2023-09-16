import React from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/HomeScreen';
import SearchScreen from './Components/SearchScreen';


function App() {
  return (
    
    <Router>
      
      <div className="App">
        <Switch>
          <Route exact path={"/"} component={()=><Home/>} />
          <Route exact path={"/search"} component={()=> <SearchScreen/>}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
