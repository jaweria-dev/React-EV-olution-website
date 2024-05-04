import React, { useEffect, useState } from 'react'
import Backgound from './Background/Backgound'
// import { Navbar } from 'react-bootstrap'
import Hero from './Hero/Hero'
// import Backgound from './Components/Background/Backgound'
import Navbar from './Navbar/Navbar'
// import Hero from './Components/Hero/Hero'
// import HomeRouter from './Components/HomeRouter'

const Home = () => {
  let heroData = [
    {text1:"Dive into", text2:"what you Love"},
    {text1:"Indulge", text2:"Your passions"},
    {text1:"Give in to", text2:"your passions"},
  ]

  const [heroCount, setHeroCount] = useState(0)
  const [playStatus, setPlayStatus] = useState(false)

  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{return count===2?0:count+1})
    },3000)
  },[])
  return (
    <div>
      <Backgound playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      {/* <HomeRouter/> */}
       <Hero 
          setPlayStatus={setPlayStatus}
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          playStatus={playStatus}
       />


    </div>
  )
}

export default Home
