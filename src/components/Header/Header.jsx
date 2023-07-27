import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll'


export const Header = () => {

  const mobule = window.innerWidth <= 786 ? true : false
  const [mobuleOpened, setMobuleOpened] = useState(false)
  return (
    <div className='header'>

      <img className='logo' src={Logo} alt='' />

      {
        (mobuleOpened === false && mobule === true) ? (
          <div style={{ backgroundColor: 'var(--appColor)', padding: '0.5rem', borderRadius: '5px' }}>
            <img src={Bars} alt=''
              style={{ width: '1.5rem', height: '1.5rem', cursor: 'pointer' }}
              onClick={() => setMobuleOpened(true)}
            />
          </div>
        ) :
          <ul className='header-menu'>
            <li>
              <Link
                onClick={() => setMobuleOpened(false)}
                to='home'
                span={true}
                smooth={true}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMobuleOpened(false)}
                to='programs'
                span={true}
                smooth={true}
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMobuleOpened(false)}
                to='reasons'
                span={true}
                smooth={true}
              >
                Why us
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMobuleOpened(false)}
                to='plans'
                span={true}
                smooth={true}
              >
                Plans
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMobuleOpened(false)} to='testimonials'
                span={true}
                smooth={true}
              >
                Testimonials
              </Link>
            </li>
          </ul>
      }

    </div>
  )
}
