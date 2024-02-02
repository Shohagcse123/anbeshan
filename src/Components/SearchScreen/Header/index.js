import React from 'react';
import SearchHeader from './SearchHeader';
import SearchSubHeader from './SearchSubHeader';

const index = ({searchTerm}) => {
    return (
        <>
           <SearchHeader searchTerm={searchTerm}/>
           <SearchSubHeader/>
        </>
    );
};

export default index;