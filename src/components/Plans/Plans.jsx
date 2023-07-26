import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

export const Plans = () => {
  return (
    <div className='plans-container'>
        <div className='blur plans-blur-1'></div>
        <div className='blur plans-blur-2'></div>
        <div className='programs-header'>
            <span className='stroke-text'>ready to start</span>
            <span>your journey</span>
            <span className='stroke-text'>now withus</span>
        </div>
        <div className='plans'>
            {plansData.map((plan) => (
                <div key={plan.name} className='plan'>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span> $ {plan.price}</span>

                    <div className='features'>
                        {plan.features.map((feature) => (
                            <div key={feature} className='feature'>
                                <img src={whiteTick} alt=''/>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div>
                        <span>See more benefits -</span>
                    </div>
                    <button className='btn'>Join now</button>
                    
                </div>
            ))}
        </div>
    </div>
  )
}
