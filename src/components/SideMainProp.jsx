import React from 'react'

function SideMainProp(props) {
  return (
    <div className='side--prop'>
      <h3><a href="#">{props.title}</a></h3>
      <p>{props.paragraph}</p>
    </div>
  )
}

export default SideMainProp