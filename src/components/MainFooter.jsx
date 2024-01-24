import React from 'react'
import FooterProps from './FooterProps'
import Retro from "../assets/images/image-retro-pcs.jpg"
import Laptop from "../assets/images/image-top-laptops.jpg"
import Gaming from "../assets/images/image-gaming-growth.jpg"

function MainFooter() {
  return (
    <div className='footer--main'>
      <FooterProps image={Retro} number="01" title="Reviving Retro PCs"  paragraph="What happens when old PCs are given modern upgrades?" />

      <FooterProps image={Laptop} number="02" title="Top 10 Laptops of 2022"  paragraph="Our best picks for various needs and budgets." />

      <FooterProps image={Gaming} number="03" title="The Growth of Gaming" paragraph="How the pandemic has sparked fresh opportunities." />
    </div>
  )
}

export default MainFooter