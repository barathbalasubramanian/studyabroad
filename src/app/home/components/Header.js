import React from 'react'
import Styles from './header.module.css'
import Image from 'next/image';

function Header() {
  return (
    <div className={Styles.header}> 
      <div className={Styles.header1}>
        <div>
          {/* <img src="/assets/logo.svg" alt="Logo" /> */}
          <Image src="/assets/logo.svg" alt="Logo" width={300} height={300} />
        </div>
        <div style={{color:"#678ACC",fontSize:"10px"}}> The fastest way to study abroad</div>
      </div>
      <div className={Styles.header2}>
        <div>About Us</div>
        <div>University</div>
        <div>Housing</div>
        <div>Blog</div>
      </div>
      <div className={Styles.header3}> 
        <div className={Styles.reqbtn}>Request a call back →</div>
        <div>Log In</div>
      </div>
    </div>
  )
}

export default Header
