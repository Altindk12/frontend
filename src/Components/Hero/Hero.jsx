import React from 'react'
import './Hero.css'
import hand_icon  from '../Assets/hand_icon.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='here-left'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div className='hand-hand-icon'>
        <p>New</p>
        <img src={hand_icon} />
        </div>
        <p>Collections</p>
        <p>For Everyone</p>
        
        </div>

        <div className='hero-right'>

        </div>

    </div>
  )
}

//https://www.youtube.com/watch?v=jbfuzcrfjqQ  MINUTA 36.22


export default Hero