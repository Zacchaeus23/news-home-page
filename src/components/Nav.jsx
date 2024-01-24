import React, {useState} from 'react'
import Logo from "../assets/images/logo.svg"
import Menu from "../assets/images/bars-solid.svg"
import Close from "../assets/images/close.svg"
import { NavLink } from 'react-router-dom'

function Nav() {
  
  const [toggle, setToggle] = useState(true)
  let src = toggle ? Menu : Close;
  let burgerClass = toggle ? "burger-display" : "display-burger"
  function handleClick() {
     
    setToggle(prevState => !prevState)
    console.log(toggle);
    
    
    
  }
  return (
    <nav className='main--nav'>
      <div className="main--logo" >
        <img src={Logo} alt="Logo" />
      </div>
      <div className="menu">
        <img src={src} alt="" onClick={handleClick} />
      </div>
      <div className="main--sidebars">
        <ul className={burgerClass}>
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/news">News</NavLink></li>
          <li><NavLink to="/popular">Popular</NavLink></li>
          <li><NavLink to="/trending">Trending</NavLink></li>
          <li><NavLink to="/categories">Categories</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav