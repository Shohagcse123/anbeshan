import React from 'react';
import { CiSearch } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import { PiImageSquareFill } from "react-icons/pi";
import { PiVideoFill } from "react-icons/pi";
import { GiNewspaper } from "react-icons/gi";
import { CgDetailsMore } from "react-icons/cg";
import { Link } from 'react-router-dom';
const SearchSubHeader = () => {
    return (
        <div className='container'>
         <div className=" ">
            <div className="">
                <ul className='nav flex items-center gap-4'>
                    <li className='' >
                        <Link to={'/'} className='flex items-center justify-center no-underline '>
                        
                        <CiSearch className=''></CiSearch>
                       
                       <p className=''>All</p>
                       
                        
                        </Link>
                        </li>

                        <li className='' >
                        <Link to={'/'} className='flex items-center justify-center no-underline '>
                        
                       <FaMapMarkerAlt></FaMapMarkerAlt>
                       
                       <p className=''>Map</p>
                        </Link>
                        </li>
                      
                        <li className='' >
                        <Link to={'/'} className='flex items-center justify-center no-underline '>
                        
                        <PiVideoFill></PiVideoFill>
                       
                       <p className=''>Videos</p>
                       
                        
                        </Link>
                        </li>


                        <li className='' >
                        <Link to={'/'} className='flex items-center justify-center no-underline '>
                        
                        <GiNewspaper></GiNewspaper>
                       
                       <p className=''>News</p>
                       
                        
                        </Link>
                        </li>

                        <li className='' >
                        <Link to={'/'} className='flex items-center justify-center no-underline '>
                        
                        <PiImageSquareFill></PiImageSquareFill>
                       
                       <p className=''>Images</p>
                        </Link>
                        </li>
                       
                        <li className='' >
                        <Link to={'/'} className='flex items-center justify-center no-underline '>
                        <CgDetailsMore></CgDetailsMore>
                       
                       <p className=''>More</p>
                        </Link>
                        </li>
                       


                </ul>
            </div>
         </div>
           
        </div>
    );
};

export default SearchSubHeader;