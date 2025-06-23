import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-3 py-2 shadow-sm bg-white">
      {/* Logo */}
      <div className="text-orange-500 font-bold text-xl whitespace-nowrap">EventFlow</div>

      {/* Center Section */}
      <div className="flex items-center bg-gray-200 rounded-full px-4 py-1 shadow-sm gap-3 w-full max-w-xl">
        {/* 🔍 Search Input */}
        <div className="flex items-center flex-grow">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search events"
            className="bg-transparent outline-none text-gray-700 placeholder-gray-500 w-full"
          />
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-gray-300" />

        {/* 📍 Location */}
        <button
          className="flex items-center whitespace-nowrap focus:outline-none"
          onClick={() => console.log("Location clicked")}
        >
          <FaMapMarkerAlt className="text-pink-500 mr-2" />
          <span className="text-gray-700">Nova Scotia</span>
        </button>

        {/* 🔘 Round Search Button with black icon */}
        <button
          className="bg-orange-500 w-6 h-6 rounded-full flex items-center justify-center hover:bg-orange-600 transition"
          onClick={() => console.log("Search clicked")}
        >
          <FaSearch className="text-black" />
        </button>

        {/* 📅 Select Date Button */}
        <button
          className="bg-white border border-gray-300 px-2 py-1 rounded-full text-sm text-black hover:bg-gray-100 transition"
          onClick={() => console.log("Open date picker")}
        >
          Select Date
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex items-center space-x-4 text-sm text-black whitespace-nowrap ml-6">
        <a href="#">Contact Sales</a>
        <a href="#">Create Events</a>
        <button>Help Center ▾</button>
        <a href="#">Find my tickets</a>
        <a href="#">Log In</a>
        <a href="#">Sign Up</a>
      </nav>
    </header>
  );
}
