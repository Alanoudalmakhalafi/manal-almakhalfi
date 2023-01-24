import React from 'react'
import './Header.css'
import Toggle from '../Toggle/Toggle'
import {Link} from 'react-scroll';
import services from '../Services/Services'
import Experience from '../Experience/Experience';
import Portfolio from '../Portfolio/Portfolio';




const Header = () => {
  return (
    
    <div className='NavBar' id='Header'>
    <div className='left-n'>
   
    {/* <Toggle/> */}

    </div>
    <div className='right'>
    <div className='list'>
    <ul>
    {/* <li>
    <Link to='Header' spy={true} smooth={true}  activeClass='active'>
    ABOUT
        </Link>
        </li> */}

        <li>
        <Link to='services' spy={true}   smooth={true} >
        Education
        </Link>
        </li>

        <li>
        <Link  to='Experience' spy={true}  dusmooth={true}>
        Campaigns 
        </Link>
        </li>

        <li class="Ad">
        <Link spy={true} to='Portfolio'  offset={50} duration={500} smooth={true}>
          Designs
        </Link>
        </li>

       
    </ul>
        </div>
        {/* <Link spy={true} to='Contact'  offset={50} duration={500} smooth={true}>
        <button className='button n-button'>
            Contact
        </button>
        </Link> */}
    </div>






    </div>
  )
}

export default Header