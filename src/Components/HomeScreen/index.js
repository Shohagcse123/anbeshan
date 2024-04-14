import React from 'react'
import Navbar from './Navbar'
import HomeScreen from './HomeScreen'

const Home = ({ setSearch, openSearch }) => {
  return (
    <>
      <Navbar />
      <HomeScreen setSearch={setSearch} openSearch={openSearch} />


    </>
  )
}

export default Home
