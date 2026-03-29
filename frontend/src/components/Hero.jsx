import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Title from '../components/Title'

export default function Hero() {
    const navigate = useNavigate();
  return (
    <div
      className="relative h-82 text-white flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 overflow-hidden"
      style={{
        backgroundImage: `url(${assets.HeroBg})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative h-max w-full grid md:grid-cols-2 gap-6 md:gap-10 items-center pt-15 pb-9 md:p-0">
        
        {/* Left Content */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          >
            <p className="italic">Elevate Your Style</p>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-3 md:mt-6 text-gray-300 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-none"
          >
            Discover trends, build your wardrobe, and express yourself with
            confidence. StyleMe helps you look your best every day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-5 md:mt-8 flex gap-3 sm:gap-4"
          >
            <button onClick={() => navigate('/collection')} className="bg-white text-black px-5 py-2.5 md:px-6 md:py-3 rounded-2xl font-semibold hover:scale-105 transition text-sm sm:text-base">
              Get Started
            </button>
            
          </motion.div>
        </div>

        {/* Right Logo */}
        <img
          src={assets.styleMe_logo}
          alt="StyleMe Logo"
          className="h-28 sm:h-36 md:h-[82%] w-full object-contain md:pl-20 opacity-90 invert transition-transform duration-300 hover:scale-110 md:hover:scale-125 mt-4 md:mt-0"
        />
      </div>
    </div>
  );
}