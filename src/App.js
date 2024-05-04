import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
import Home from './Components/HomeScreen';
import SearchScreen from './Components/SearchScreen';
import { searchData } from './api/GoogleSearch';
import VoiceSearch from './Components/VoiceSearch';
import { recognition } from "./api/voiceRecognition";






const App = () => {
  const history = useHistory();
  // const { voiceClick, checkClick } = useContext(speakerContext);

  const [searchTerm, setSearchTerm] = useState();
  const [googleData, setGoogleData] = useState([]);
  const [voiceSearch, setVoiceSearch] = useState(false);
  const setSearch = async (term) => {
    setSearchTerm(term);

    const data = await searchData(term);
    setGoogleData(data);
    history.push('/search');
    console.log(data);


  };
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
  // voice search function
  const openVoiceSearch = () => {
    setVoiceSearch(true);
    recognition.start();
    recognition.onresult = (event) => {
      const { transcript } = event.results[0][0];

      if (transcript !== null || transcript !== "" || transcript !== " ") {
        setVoiceSearch(false);
        console.log('transcript', transcript);
        localStorage.setItem('searchKey', transcript);
        setSearch(transcript);



      }
      else {
        setVoiceSearch(false);
        alert("Please try again for voice search");
      }
    }
  }

  const closeVoiceSearch = () => {
    setVoiceSearch(false);
    recognition.stop();
  }


  return (


    <div className="App">

      {
        voiceSearch ? (<VoiceSearch closeVoiceSearch={closeVoiceSearch} />) : null
      }

      <Switch>
        <Route exact path={'/'} component={() => <Home setSearch={setSearch} openVoiceSearch={openVoiceSearch} />} />
        <Route exact path={'/search'} component={() => <SearchScreen setSearch={setSearch} searchTerm={searchTerm} googleData={googleData} openVoiceSearch={openVoiceSearch} />} />

      </Switch>


    </div>



  );
}


export default App;
