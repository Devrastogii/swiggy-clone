import React, { useEffect, useState } from 'react'
import download from "../images/download.jpg";

const Footer = () => {

    const [date, setDate] = useState("");

    useEffect(() => {
        const presentDate = new Date().getFullYear();
        setDate(presentDate);
    },[])

  return (
    <>
        <div className='w-full h-96 bg-black'>
            <div className='flex flex-row justify-evenly pt-10'>
                <div>
                    <h3 className='text-gray-600 text-xl pt-2 pb-1'>Company</h3>
                    <div>
                        <a href="/" className='text-gray-300 block p-1 hover:underline hover:text-white'>About Us</a>
                        <a href="/" className='text-gray-300 block p-1 hover:underline hover:text-white'>Team</a>
                        <a href="/" className='text-gray-300 block p-1 hover:underline hover:text-white'>Careers</a>
                        <a href="/" className='text-gray-300 block p-1 hover:underline hover:text-white'>Swiggy Blog</a>
                        <a href="/" className='text-gray-300 block p-1 hover:underline hover:text-white'>Bug Bounty</a>
                        <a href="/" className='text-gray-300 block p-1 hover:underline hover:text-white'>Swiggy One</a>
                        <a href="/" className='text-gray-300 block p-1 hover:underline hover:text-white'>Swiggy Instamart</a>
                    </div>
                </div>
                <div>
                <h3 className='text-gray-600 text-xl pt-2 pb-1'>Contact</h3>
                    <div>
                        <a href="/" className='text-gray-300 block p-1 hover:underline hover:text-white'>Help & Support</a>
                        <a href="/" className='text-gray-300 block p-1 hover:underline hover:text-white'>Partner With Us</a>
                        <a href="/" className='text-gray-300 block p-1 hover:underline hover:text-white'>Ride with us</a>                        
                    </div>
                </div>
                <div>
                <h3 className='text-gray-600 text-xl pt-2 pb-1'>Legal</h3>
                    <div>
                        <a href="/" className='text-gray-300 block p-1 hover:underline hover:text-white'>Terms & Conditions</a>
                        <a href="/" className='text-gray-300 block p-1 hover:underline hover:text-white'>Refund & Cancellation</a>
                        <a href="/" className='text-gray-300 block p-1 hover:underline hover:text-white'>Privacy Policy</a>
                        <a href="/" className='text-gray-300 block p-1 hover:underline hover:text-white'>Cookie Policy</a>
                        <a href="/" className='text-gray-300 block p-1 hover:underline hover:text-white'>Offer Terms</a>                       
                    </div>
                </div>
                <div className='mt-12'>
                    <a href="/" className='w-20'><img src={download} alt="" className='w-60'/></a>
                </div>
            </div>
            <div className='px-16 mt-2 opacity-40 p-4'>
                <hr />
            </div>
            <div className='flex justify-center text-white'>
                &copy; Dev Rastogi {date}
            </div>
        </div>
    </>
  )
}

export default Footer
