import React,{useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import Header from './Header'

const SearchScreen = ({searchTerm,googleData}) => {
  const history= useHistory();
  console.log(googleData);
  
   useEffect(()=>{
    if(searchTerm === '')
    {
      history.push('/');
    }
   },[searchTerm]);

    
  
  // console.log(history);
  
  return (
    <>
     <Header searchTerm={searchTerm} />
      <div className="container mx-auto">
        <div className="grid grid-rows-1"></div>
        <div className="">
        <h1>Welcome to search page:{searchTerm}</h1>
        </div>
      
    </div>
    </>
  );
};

export default SearchScreen;
