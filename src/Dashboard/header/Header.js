import React, { useState } from 'react'
import './header.css'


export default function Header() {

  return (
    <div className='header'>
       <div className='container'>
           <div className="logo">
                <img src="../../../image/Logo_11.png" className='lgo1' />
           </div>
           <div className="nav">
                <ul className='list'>
                    <li>HESMAN STUDIO</li>
                    <li>HESMEN LEGEND</li>
                    <li>PARTNERS</li>
                    <li>CONTACT</li>
                </ul>
           </div>
           <div className="cloud">
               <img src="../../../image/JoinNow.png" className='lgo2' />
           </div>
       </div>
    </div>
  )
}
