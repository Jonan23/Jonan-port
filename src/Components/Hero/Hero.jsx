import React, { useState } from 'react'
import './Hero.css'
import me from '../../assets/Me.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu from '../../assets/icons8-menu (1).svg'

const Hero = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu open/close
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id='home' className='container'>
        <div className="nav">
        <div className="nav-logo">Jonan Utong</div>
            <ul className={`navmenu ${isMenuOpen ? 'open' : ''}`}>
                <li>
                <AnchorLink href='#home'>Home</AnchorLink>
                </li>
                <li>
                <AnchorLink href='#about'>About</AnchorLink>
                </li>
                <li>
                <AnchorLink href='#contact'>Contact</AnchorLink>
                </li>
            </ul>
            <div className="menu-icon" onClick={handleMenuToggle}>
            <img src={menu} alt="" />
            </div>
          </div> 
        <div className="hero">
        <div className="section">
        <div className="body-left">
           <img src={me} alt="" />
        </div>
        <div className="body-right">
            <h1>Hi I am Jonan Lets Built your dream Web Application</h1>
        </div>
    </div>     
   </div>
      
</div>
  )
}

export default Hero