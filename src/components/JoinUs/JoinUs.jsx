import React from 'react'
import './JoinUs.css'

export const JoinUs = () => {
  return (
    <div className='Join' id='Join-Us'>
      <div className='left-j'>
        <hr />
        <div>
          <span className='stroke-text'>ready to</span>
          <span> level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className='stroke-text'> with us?</span>
        </div>
      </div>
      <div className='right-j'>
        <form className='email_container'>
          <input type='email' name='user_email' placeholder='Enter your Email address' />
          <button className='btn btn-j'>Joun Now</button>
        </form>
      </div>
    </div>
  )
}
