import { Link } from "react-router-dom";
import { FaPlusCircle, FaList, FaPalette } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 shadow-xl"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">

        {/* Logo */}
        <h1 className="flex items-center gap-2 text-lg sm:text-xl font-bold text-white">
          <FaPalette className="text-yellow-300 text-xl sm:text-2xl" />
          <span className="tracking-wide">RAJ MOHAN TEX</span>
        </h1>

        {/* Navigation */}
        <div className="flex items-center gap-2 sm:gap-5 text-sm sm:text-base">

          <Link
            to="/"
            className="flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-md 
            hover:bg-white hover:text-indigo-700 text-white px-3 sm:px-4 py-1.5 
            rounded-lg transition-all duration-300 shadow-sm"
          >
            <FaPlusCircle />
            <span className="hidden sm:inline">Add</span>
          </Link>

          <Link
            to="/list"
            className="flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-md 
            hover:bg-white hover:text-indigo-700 text-white px-3 sm:px-4 py-1.5 
            rounded-lg transition-all duration-300 shadow-sm"
          >
            <FaList />
            <span className="hidden sm:inline">Designs</span>
          </Link>

        </div>
      </div>
    </motion.nav>
  );
}