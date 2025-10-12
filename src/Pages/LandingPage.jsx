import React, { useContext, useState } from "react";

import HERO_IMG from "../assets/hero-img.png";
import { APP_FEATURES } from "../utils/data"
import { useNavigate } from 'react-router-dom';
import {LuSparkles} from "react-icons/lu"
import Modal from "../components/Modal";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/SignUp";
import { UserContext } from "../context/userContext";
import ProfileInfoCard from "../components/Cards/ProfileInfoCard";
import FooterInfo from "../components/Cards/Footer";

function LandingPage() {
  const {user} = useContext(UserContext)
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if(!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <div className="w-full  bg-gradient-to-r from-teal-300 to-teal-100">
        <div className="w-[500px]  bg-teal-300/20 blur-[65px] absolute top-0 left-0" />
        <div className="container mx-auto px-4 pt-6 pb-[200px] relative z-10">
          {/* Header */}
          <header className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-5 text-2xl  text-black font-bold">
             <img src="https://meaffan.vercel.app/favicon.ico" ></img>
            <div className=" text-2xl mt-2 text-black font-bold">
             Prepify AI
            </div>
            </div>
            { user ? (<ProfileInfoCard />) : ( <button
              className="bg-linear-to-r from-[#00b1a0] to-[#29adc8] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white border border-whiite transition-colors cursor-pointer"
              onClick={() => setOpenAuthModal(true)}
            >
              Login / Sign Up
            </button> )}
          </header>

          {/* Hero Content */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
              <div className="flex items-center justify-left mb-2">
                <div className="flex items-center gap-2 text-[13px] text-blue-500 font-semibold bg-blue-100 px-3 py-1 rounded-full border border-blue-300">
                  AI Powered
                </div>
              </div>
              <h1 className="text-5xl text-black font-medium mb-6 landing-tight">
                Ace Interviews with <br />                                                  
                <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#00b1a0_0%,_#29adc8_100%)] bg-[length:200%_200%] animate-text-shine font-semibold">
                  <LuSparkles /> AI-Powered
                </span>{" "}
                Learning 
              </h1>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-[18px] text-gray-900 mr-0 md:mr-20 mb-6">
               Prepare smarter with AI-driven learning 
               — get role-specific questions, detailed insights, and organized progress to move from preparation to mastery.  
              </p>
              <button
                className="bg-teal-600 text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-teal-100 hover:text-teal-500 border border-teal-50 hover:border-teal-400 transition-colors cursor-pointer"
                onClick={handleCTA}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-full relative z-10">
        <div>
          <section className="flex items-center justify-center -mt-36">
            <img
              src=""
              alt="Intro image Image"
              className="w-[80vw] rounded-lg border-1 border-teal-300 box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);  "
            />
          </section>
        </div>
      </div>

      <div className="w-full min-h-full bg-[#d6f7f565] mt-10">
        <div className="container mx-auto px-4 pt-10 pb-20">
          <section className="mt-5">
            <h2 className="text-2xl font-medium text-center mb-12">
              Features that makes you shine
            </h2>
            <div className="flex flex-col items-center gap-8">
              {/* First 3 cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {APP_FEATURES.slice(0, 3).map((feature) => (
                  <div
                    key={feature.id}
                    className="bg-[#D3F7F4] p-6 rounded-xl shadow-xs hover:shadow-md shadow-[#1DFAF9] hover:scale-105 ease-in transition border-teal-100"
                  >
                    <h3 className="text-base font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* Remaining 2 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {APP_FEATURES.slice(3).map((feature) => (
                  <div
                    key={feature.id}
                    className="bg-[#D3F7F4] p-6 rounded-xl shadow-xs hover:shadow-md hover:scale-105 shadow-[#1DFAF9] ease-in  transition border border-teal-100"
                  >
                    <h3 className="text-base font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>


        </div>
      </div>
               <FooterInfo />

      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && <SignUp setCurrentPage={setCurrentPage} />}
        </div>
      </Modal>
    </div>
  );
}

export default LandingPage
