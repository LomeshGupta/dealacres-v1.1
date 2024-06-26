import React from 'react'
import Link from 'next/link';
import { SiFacebook,SiInstagram,SiTwitter,SiLinkedin } from 'react-icons/si';

const Socialicons = () => {

  const containerStyle = {
    display: 'flex',
    padding: '0 2rem 0 2rem',
    justifyContent: 'center',
    gap: '1rem',
    alignItems: 'center',
  };

  const logostyle ={
    cursor:'pointer'
  }

  return (
    <div style={containerStyle}>
      <Link href='https://www.facebook.com/teamdealacres?mibextid=LQQJ4d' style={logostyle}><SiFacebook size={25} color='white'/></Link>
      <Link href='https://www.instagram.com/dealacres?igsh=MWZlNjRrZTEzZDE4YQ==' style={logostyle}><SiInstagram size={25} color='white'/></Link>
      <Link href='https://twitter.com/DealAcres' style={logostyle}><SiTwitter size={25} color='white'/></Link>
      <Link href='https://www.linkedin.com/company/deal-acres/' style={logostyle}><SiLinkedin size={25} color='white'/></Link>
    </div>
  )
}

export default Socialicons
