import React from 'react'
import '../index.css';
import { COLORS } from "../constants/theme";
import "./Navbar.css";
export function Navbar() {
    return (
        <div>
            <nav className=''>
                <div className='flex items-center justify-between h-24 mr-8 ml-8'>
                    <div>
                        <p style={{ color: COLORS.bgColor }} className='font-bold text-2xl'>Urban</p>
                        <p style={{ color: COLORS.bgColor }} className='text-lg'>Savaari</p>
                    </div>
                    <h1></h1>
                    <div>
                        <ul className='lg:flex items-center justify-around hidden'>
                            <li className='m-2 cursor-pointer active' style={{ color: '#707070' }}>Home</li>
                            <li className='m-2 cursor-pointer' style={{ color: '#707070' }}>About</li>
                            <li className='m-2 cursor-pointer' style={{ color: '#707070' }}>Vision</li>
                            <li className='m-2 cursor-pointer' style={{ color: '#707070' }}>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}