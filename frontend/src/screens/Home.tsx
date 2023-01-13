import React from 'react'
import Banner from '../components/Banner'
import Features from '../components/Features'

/**
 * * Home Page 
 * @returns {JSX.Element}
 */
const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <Banner />
      <Features />
    </>
  )
}

export default Home
