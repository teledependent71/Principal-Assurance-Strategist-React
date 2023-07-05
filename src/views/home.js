import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Principal Assurance Strategist</title>
        <meta property="og:title" content="Principal Assurance Strategist" />
      </Helmet>
    </div>
  )
}

export default Home
