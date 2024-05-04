import React from 'react';
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom';


const Data = ({ dataParams }) => {
    console.log('params value', dataParams)

    // const handleBack = () => {
    //     <NavLink to="/search"></NavLink>

    // }


    return (
        <div className=''>
            <a href={dataParams.formattedUrl}>{dataParams.displayLink}</a>   {"  "} <i className='fa fa-angle-down'></i>

            <a href={dataParams.formattedUrl}>
                {/* <button onClick={handleBack} className='btn btn-accent'>Back</button> */}
                <h3>{dataParams.title}</h3>
            </a>

            <p>{dataParams.snippet}</p>
        </div>
    );
};

export default Data;