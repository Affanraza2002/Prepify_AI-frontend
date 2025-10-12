import React from 'react'
import ProfileInfoCard from '../Cards/ProfileInfoCard';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className='h-16 bg-white border border-b border-gray-200/50 background-blur-[2px] py-2.5 px-4 md:px-0 sticky top-0 z-30'>
        <div className='container mx-auto flex items-center justify-between gap-5'>
            <Link to="/dashboard">
            <div className="flex items-center gap-5 text-2xl ml-6 text-black font-bold">
             <img src="https://meaffan.vercel.app/favicon.ico" ></img>
            <div className=" text-2xl mt-2 text-black font-bold">
             Prepify AI
            </div>  </div> 
            </Link>
            <ProfileInfoCard />
        </div>
    </div>
  )
}

export default Navbar