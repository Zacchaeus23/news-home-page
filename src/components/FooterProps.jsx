import React from 'react'

function FooterProps(props) {
  return (
    <div className='footer'>
      <div className="footer--image">
        <img src={props.image} alt="Image" />
      </div>
      <div className="footer--desc">
        <h3>{props.number}</h3>
        <h4>{props.title}</h4>
        <p>{props.paragraph}</p>
      </div>
    </div>
  )
}

export default FooterProps