import React from 'react'
import { Link } from 'react-router-dom';

// Logo Image
import OOKLogo from '../images/OOK-Logo.png'

// Css
import '../Css/Navbar.css'

export default function Navbar() {
    return (
        <>
            <nav className='ME-navbar'>
                <img className="MeNavlogo" src={OOKLogo} alt=''></img>
            </nav>
            <div className='Background-Black'></div>
            <div className='ME-navbar-links'>
                <ul className='ME-navbar-links-ul'>
                    <li className='ME-navbar-links-li'>
                        <Link to='/PadEye'>
                            Pad eye
                        </Link>
                    </li>
                    <li className='ME-navbar-links-li'>
                        <Link to='/BeamProperties'>
                            Beam Properties
                        </Link>
                    </li>
                    <li className='ME-navbar-links-li'>
                        <Link to='/BeamDeflection'>
                            Beam Deflection
                        </Link>
                    </li>
                    <li className='ME-navbar-links-li'>
                        <Link to='/AboutUs'>
                            About US
                        </Link>
                    </li>
                </ul>
            </div></>
    )
}
