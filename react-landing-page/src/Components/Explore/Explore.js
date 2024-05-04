import React from 'react'
import './Explore.css'
import Navbar from '../Navbar/Navbar'

const Explore = () => {
  return (
    <>
    <Navbar pageName='abput-pa'/>
    <div className="explore-container">
    <h2>Explore Ev-Olution</h2>
    <p>Discover the latest innovations from Ev-Olution:</p>
    <ul>
      <li>Product A</li>
      <li>Product B</li>
      <li>Product C</li>
      {/* Add more products as needed */}
    </ul>
  </div>

  </>
  )
}

export default Explore