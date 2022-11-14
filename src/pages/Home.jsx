import React from 'react'
import Content from '../components/Content'
import Sidebar from '../components/Sidebar'


const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Content/>
      </div>
    </div>
  )
}

export default Home