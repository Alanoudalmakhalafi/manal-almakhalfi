import React from 'react'
import './Experience.css'
import jahez from './Prepare to Market.pdf'
import OSMS from './Organic Social Media Strategy Templat.pdf'
import MDT from './Marketing Data and Technology.pdf'
import ME from './Market with Email.pdf'
import cofique from './cofique.pdf'


// import js from '../images/js.png';
// import react from '../images/react.png';
// import express from '../images/express.png';
// import mongodb from '../images/mongodb.png';
// import html from '../images/html.png';
// import {motion} from 'framer-motion';
// import {Link} from 'react-scroll'

function Experience() {

  return (
    <div className='works' id='Experience'>
        <div className='e-left'>
            <span>Digital Marketing Campaigns</span>
            {/* <span>Digital Marketing Campaigns</span> */}
            {/* <span>Digital Marketing Campaigns</span> */}
            
          
            
        </div>
        <div className='blur' style={{background:" rgb(244, 246, 178)" , top:"100rem" , left:"-10rem" }}></div>
        <div className='blur' style={{background:" pink" , top:"120rem" ,left:"-30vh" }}></div>

        <div className='e-right'>
        <div class="container h-100">
  <div class="row align-middle">
    <div class="lo">
    <div class="col-md-6 col-lg-4 column">
      <div class="card gr-1">
        <div class="txt">
          <h1>Jahez Campaign</h1>
          {/* <p>Jahez company</p> */}
        </div>
        <a onClick={() => window.open(jahez)}>more</a>
        <div class="ico-card">
        <i class="fa fa-rebel"></i>
      </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4 column">
      <div class="card gr-2">
        <div class="txt">
          <h1>PYUR Campaign</h1>
          {/* <p>Build your organic social media strategy</p> */}
        </div>
        <a onClick={() => window.open(OSMS)}>more</a>
      <div class="ico-card">
        <i class="fa fa-codepen"></i>
      </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4 column">
      <div class="card gr-3">
        <div class="txt">
          <h1>Google Analytics</h1>
          {/* <p>Draw Insights from Marketing Data</p> */}
         <a onClick={() => window.open(MDT)}>more</a>
       </div>
      <div class="ico-card">
        <i class="fa fa-empire"></i>
      </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4 column">
      <div class="card gr-4">
        <div class="txt">
          <h1>Email Marketing<br></br>Campaign</h1>
          {/* <p>Draw Insights from Marketing Data</p> */}
         <a onClick={() => window.open(ME)}>more</a>
       </div>
      <div class="ico-card">
        <i class="fa fa-empire"></i>
      </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4 column">
      <div class="card gr-5">
        <div class="txt">
          <h1>cofique</h1>
          {/* <p>Draw Insights from Marketing Data</p> */}
         <a onClick={() => window.open(cofique)}>more</a>
       </div>
      <div class="ico-card">
        <i class="fa fa-empire"></i>
      </div>
      </div>
    </div>
  </div>
  </div></div>

        </div>
           
        






    </div>
  )
}

export default Experience