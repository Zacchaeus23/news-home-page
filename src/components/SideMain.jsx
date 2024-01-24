import React from 'react'
import SideMainProp from './SideMainProp'

function SideMain() {
  return (
    <div className='main--side'>
      <h2>
        New
      </h2>
      <SideMainProp title="Hydrogen VS Electric Cars" paragraph="Will hydrogen-fueled cars ever catch up to EVs" className="side" />
      <SideMainProp title="The Downsides of AI Artistry" paragraph="What are the possible adverse effects of on-demand AI image generation?" className="side" />
      <hr />
      <SideMainProp title="Is VC Funding Drying Up?" paragraph="Private funding by VC firms is down 50% YOY. We take a look at what that means." className="side"/>
    </div>
  )
}

export default SideMain