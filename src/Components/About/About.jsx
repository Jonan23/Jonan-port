import React from 'react'
import './About.css'
import me from '../../assets/Me 2.jpg'
import css from '../../assets/icons8-css.svg'
import html from '../../assets/icons8-html-5.svg'
import java from '../../assets/icons8-javascript.svg'
import react from '../../assets/icons8-react.svg'

const About = () => {
  return (
    <div id="about" className='about'>
        <div className="about-t">
        <h1>About me</h1>
        </div>  
        <div className="about-section">
        <div className="about-left">
            <img src={me} alt="" />
        </div>
        <div className="about-right">
        <p>I am a freelance front-end developer a self-taught professional who specializes in creating the visual and interactive elements of websites and web applications.
                I specialize in technologies like HTML, CSS, and JavaScript. 
                I often work with library such as React to build responsive, user-friendly interfaces.
                </p>
            <div className="about-skill">
               <div className="about-skills"><p>HTML & CSS</p><hr style={{width:"50%"}}/>
               <img src={html} alt="" />
               <img src={css} alt="" /></div> 
               <div className="about-skills"><p>JAVASCRIPT</p><hr style={{width:"40%"}}/>
               <img src={java} alt="" /></div>
               <div className="about-skills"><p>REACT.JS</p><hr style={{width:"60%"}}/>
               <img src={react} alt="" /></div>
            </div>

        </div>
     </div>
     
 </div>
  )
}

export default About