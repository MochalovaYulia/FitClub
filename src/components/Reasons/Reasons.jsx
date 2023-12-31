import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

export const Reasons = () => {
  return (
    <div className='reasons' id='reasons'>
        <div className='left'>
            <img src={image1} alt='' />
            <img src={image2} alt='' />
            <img src={image3} alt='' />
            <img src={image4} alt='' />
        </div>
        <div className='right'>
            <span>Some reasons</span>
            <div className='right-text'>
                <span className='stroke-text'>Why</span>
                <span> choose us?</span>
            </div>
            <div className='details'>
                <div>
                    <img src={tick} alt=''/>
                    <span> over 140+ expert coachs</span>
                </div>
                <div>
                    <img src={tick} alt=''/>
                    <span> train smarter and faster then before</span>
                </div>
                <div>
                    <img src={tick} alt=''/>
                    <span> 1 free program for new member</span>
                </div>
                <div>
                    <img src={tick} alt=''/>
                    <span> reliable partners</span>
                </div>
            </div>
            <div className='partners'>
                <span className='figures-text'>our partners</span>
                <div className='image'>
                    <img src={nb} alt='' />
                    <img src={adidas} alt='' />
                    <img src={nike} alt='' />
                </div>
            </div>
        </div>
    </div>
  )
}
