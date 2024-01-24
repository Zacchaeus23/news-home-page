import React from 'react'
import MainHero from './MainHero'
import SideMain from './SideMain'
import MainFooter from './MainFooter'

function Main() {
  return (
    <div className='main'>
      <MainHero />
      <SideMain />
      <MainFooter />
      
    </div>
  )
}

export default Main