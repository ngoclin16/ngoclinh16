import React, { useState } from 'react'
import './header.css'
import {HiMenuAlt4} from 'react-icons/hi'

export default function Header() {

  return (
    <div className='header'> 
       <div className='container'>
           <div className="logo">
                <img src="../../../image/Logo_11.png" className='lgo1' />
           </div>
           <div className="nav">
           <i class="fa fa-align-justify" aria-hidden="true"></i>
                <ul className='list'>
                    <li><a href="#">HESMAN STUDIO</a></li>
                    <li><a href="#">HESMEN LEGEND</a></li>
                    <li><a href="#">PARTNERS</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
           </div>
           
           <div className="cloud">
               <img src="../../../image/JoinNow.png" className='lgo2' />
           </div>

           <div className='btn-mobile'>
             <HiMenuAlt4/>
           </div>
           
       </div>
    </div>
  ) 
}
