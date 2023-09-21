import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const SearchScreen = ({searchTerm}) => {
  const history= useHistory();
   useEffect(()=>{
    if(searchTerm==='')
    {
      history.push('/');
    }
   },[searchTerm])
  return (
    <div className="Search_screen">
      <h1>Welcome to search page</h1>
    </div>
  )
}

export default SearchScreen
