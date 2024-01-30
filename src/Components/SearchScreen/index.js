import React,{useEffect} from 'react'
import { useHistory } from 'react-router-dom';


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
    <div className="Search_screen">
      <h1>Welcome to search page:{searchTerm}</h1>
    </div>
  );
};

export default SearchScreen;
