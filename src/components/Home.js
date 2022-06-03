import React, { useState } from 'react'
import { Link } from "react-router-dom"
// import SignIn from './SignIn';
import TopImg from './TopImg';
// import {FaUser} from "react-icons/fa"



const Home = () => {
  
  return (
    <div>
        <h1 style={{backgroundColor: '#003300', fontSize: '20px' ,color: 'white', marginTop: '0', padding: '10px', textAlign: 'center'}}>Taofeeqah <br></br> Restaurant & Bar</h1>
      <TopImg/>
      <div className='home'>
          <h2 style={{textAlign: 'center', color:'#003300'}}>MENU</h2>
          <div className='menuList'>
            <Link style={{ backgroundColor:'#003300', textAlign: 'center', width: '120px', padding:'10px', textDecoration: 'none', margin: '10px', color: 'aqua'}} to='beer'>BEER</Link>
            <Link style={{backgroundColor:'#003300', textAlign: 'center', width: '120px', padding:'10px',textDecoration: 'none', margin: '10px', color: 'aqua'}} to='spirit'>SPIRIT</Link>
          </div>
          <div className='menuList'>
            <Link style={{backgroundColor:'#003300', textAlign: 'center', width: '120px', padding:'10px',textDecoration: 'none', margin: '10px', color: 'aqua'}} to='noalcohol'>NON-ALCOHOL</Link>
            <Link style={{backgroundColor:'#003300', textAlign: 'center', width: '120px', padding:'10px',textDecoration: 'none', margin: '10px', color: 'aqua'}} to='kitchen'>KITCHEN</Link>
          </div>
      </div>
      <div className='contact'>
        <h1 style={{color: 'aqua', marginBottom: '40px'}}>CONTACT</h1>
        <div className='contactDisplay'>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <a href='https://www.instagram.com/eesuolaayotunde/' style={{textDecoration: 'none', color: 'white', fontSize: '20px'}}>INSTAGRAM</a>
            <a href='https://www.instagram.com/eesuolaayotunde/' style={{textDecoration: 'none', color: 'white', marginTop: '15px', fontSize: '20px'}}>TWITTER</a>
            <a href='https://wa.me/message/XNL2WYNHVTZKN1' style={{textDecoration: 'none', color: 'white', marginTop: '15px', fontSize: '20px'}}>WHATSAPP</a>
          </div>
          
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Copyright &copy; 2022</div>
    </div>
  )
}

export default Home