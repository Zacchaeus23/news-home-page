import React from 'react'
import Hero from "../assets/images/image-web-3-desktop.jpg"

function MainHero() {
  return (
    <div className='main--hero'>
      <div className="hero--image">
        <img src={Hero} alt="Hero Image" />
      </div>
      <div className="hero--description">
        <div className="hero--header">
          <h1>The Bright Future of Web 3.0?</h1>
        </div>
        <div className="hero--info">
          <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
          But is it really fulfilling its promise?</p>
          <button>READ MORE</button>
        </div>
      </div>
    </div>
  )
}

export default MainHero