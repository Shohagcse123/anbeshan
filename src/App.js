import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
import Home from './Components/HomeScreen';
import SearchScreen from './Components/SearchScreen';
import { searchData } from './api/GoogleSearch';







const App = () => {
  const history = useHistory();
  // const { voiceClick, checkClick } = useContext(speakerContext);

  const [searchTerm, setSearchTerm] = useState();
  const [googleData, setGoogleData] = useState([]);
  // const [voiceSearch, setVoiceSearch] = useState(false);
  const setSearch = async (term) => {
    setSearchTerm(term);

    const data = await searchData(term);
    setGoogleData(data);
    history.push('/search');
    console.log(data);


  }
  useEffect(() => {
    const handleTest = async () => {
      const searchKey = localStorage.getItem('searchKey')
      if (searchKey) {
        const data = await searchData(searchKey);
        setGoogleData(data);
      }
    }
    handleTest();
  }, [])
  console.log('from gooogle data', googleData);



  return (


    <div className="App">




      <Switch>
        <Route exact path={'/'} component={() => <Home setSearch={setSearch} />} />
        <Route exact path={'/search'} component={() => <SearchScreen setSearch={setSearch} searchTerm={searchTerm} googleData={googleData} />} />

      </Switch>


    </div>



  );
}


export default App;
