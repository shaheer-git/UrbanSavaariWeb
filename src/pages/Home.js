import React from 'react'
import { Navbar } from "../../src/components/Navbar";
import { Ellipse } from "../../src/components/Ellipse";
import vehicles from "../assets/vehicles.png";
import './Home.css';
import { COLORS } from '../constants/theme';

export function Home() {
    return (
        <>
            <div className='p-2 h-full'>
                <Ellipse />
                <Navbar />
                <div className='absolute vehiclesImgCon hidden xl:block'>
                    <img src={vehicles} alt="compare all cab prizes" className='vehiclesImg' width="520" />
                </div>
            </div>
            <div className='flex flex-col xl:items-start items-center justify-center xl:w-1/2 w-2/2 xl:h-80vh h-96'>
                <div className='h-1/4 ml-5 flex flex-col items-center justify-center w-full'>
                    <p className='text-lg text-wrap font-semibold'>UrbanSavaari helps you compare rides from all major cab service providers and book the one that best suits your needs.</p>
                </div>
                <div className='h-2/4 ml-5 flex flex-col items-center justify-around w-full'>
                    <p className='text-4xl tracking-widest' style={{ color: COLORS.bgColor }}>COMING SOON</p>
                    <div className='flex lg:flex-row flex-col items-center xl:justify-around justify-between xl:w-3/4 lg:w-43per h-28'>
                        <input type="tel" id="mobile" name="mobile" placeholder="Enter your mobile number" pattern="[0-9]{10}" className='rounded-3xl w-2/4 border-none' style={{borderBlockColor: COLORS.bgColor}}/>
                        <button className='rounded-3xl lg:px-4 lg:py-2 p-4 lg:p4 text-white lg:text-base text-xs' style={{backgroundColor: COLORS.bgColor}}>EARLY ACCESS</button>
                    </div>
                </div>
            </div>
        </>
    )
}
