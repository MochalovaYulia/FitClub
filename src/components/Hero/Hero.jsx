import React from 'react'
import './Hero.css'
import { Header } from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'

export const Hero = () => {
    const transition = { type: 'string', duration: 3 }
    return (
        <div className='hero' id='home'>
            <div className='left-h'>

                <div className='blur hero-blur'></div>
                <Header />

                {/* the-best-ad */}
                <div className='the-best-ad'>
                    <motion.div
                        initial={{left:'238px'}}
                        whileInView={{left:'8px'}}
                        transition={transition}
                    ></motion.div>
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
                    <div className='div'>
                        <span className='span'>
                            In here we will help you to shape snd build your ideal body and life up your life to fullest
                        </span>
                    </div>
                </div>

                {/* figures */}
                <div className='figures'>
                    <div>
                        <span className='figures-num'>
                            <NumberCounter end={140} start={100} delay='4' preFix="+" />
                        </span>
                        <span className='figures-text'>exprt couchs</span>
                    </div>
                    <div>
                        <span className='figures-num'>
                        <NumberCounter end={978} start={930} delay='4' preFix="+" />
                        </span>
                        <span className='figures-text'>members jouned</span>
                    </div>
                    <div>
                        <span className='figures-num'>
                        <NumberCounter end={50} start={10} delay='4' preFix="+" />
                        </span>
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

                <motion.div 
                    className='heart-rate'
                    initial={{right:'-1rem'}}
                    whileInView={{right:'4rem'}}
                    transition={transition}
                >
                    <img src={heart} alt='' />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                {/* hero img */}
                <img className='hero-img' src={hero_image} alt='' />
                <motion.img
                    initial={{right:'11rem'}}
                    whileInView={{right:'20rem'}}
                    transition={transition} 
                    className='hero-img-back' 
                    src={hero_image_back} alt='' 
                />

                {/* calories */}
                <motion.div 
                    className='calories'
                    initial={{right:'37rem'}}
                    whileInView={{right:'28rem'}}
                    transition={transition}
                >
                    <img src={calories} alt='' />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
