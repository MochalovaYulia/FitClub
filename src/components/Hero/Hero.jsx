import React from 'react'
import './Hero.css'
import { Header } from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className='left-h'>
            <Header />

            {/* the-best-ad */}
            <div className='the-best-ad'>
                <div></div>
                <span>The best fitness club in the town</span>
            </div>

            {/* hero header */}
            <div className='hero-text'>
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal body</span>
                </div>
                <div>
                    <span className='span'>
                        In here we will help you to shape snd build your ideal body and life up your life to fullest
                    </span>
                </div>
            </div>

            {/* figures */}
            <div className='figures'>
                <div>
                    <span className='figures-num'>+140</span>
                    <span className='figures-text'>exprt couchs</span>
                </div>
                <div>
                    <span className='figures-num'>+978</span>
                    <span className='figures-text'>members jouned</span>
                </div>
                <div>
                    <span className='figures-num'>+50</span>
                    <span className='figures-text'>fitness programs</span>
                </div>
            </div>

            {/* hero button */}
            <div className='hero-buttons'>
                <button className='btn'>Get Started</button>
                <button className='btn'>Learn More</button>
            </div>
        </div>
        <div className='right-h'>
            <button className='btn'>Join Now</button>

            <div className='heart-rate'>
                <img src={heart} alt=''/>
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </div>

            {/* hero img */}
            <img className='hero-img' src={hero_image} alt=''/>
            <img className='hero-img-back' src={hero_image_back} alt=''/>

            {/* calories */}
            <div className='calories'>
                <img src={calories} alt=''/>
                <div>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                </div>
            </div>
        </div>
    </div>
  )
}
