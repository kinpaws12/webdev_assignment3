import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-2 shadow-sm bg-white">
      {/* Logo */}
      <div className="text-orange-500  font-bold text-2xl mr-2">eventflow</div>

      {/* Center Search Section */}
      <div className="flex items-center bg-gray-200 rounded-full px-3 py-1 shadow-sm gap-3 flex-grow max-w-2xl">
        {/* 🔍 Search Input */}
        <div className="flex items-center flex-grow">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search events"
            className="bg-transparent outline-none text-gray-700 placeholder-gray-500 w-full text-sm"
          />
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-gray-300" />

        {/* 📍 Location */}
        <button
          className="flex items-center whitespace-nowrap focus:outline-none hover:text-pink-600 transition text-sm"
          onClick={() => console.log("Location clicked")}
        >
          <FaMapMarkerAlt className="text-pink-500 mr-1" />
          <span className="text-gray-700">Nova Scotia</span>
        </button>

        {/* 🔘 Round Search Button */}
        <button
          className="bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange-600 transition"
          onClick={() => console.log("Search clicked")}
        >
          <FaSearch className="text-black text-base" />
        </button>
      </div>

      {/* Navigation Buttons */}
      <nav className="flex items-center space-x-3 text-sm text-black ml-4">
        <button className="hover:bg-gray-100 px-2 py-1 rounded transition">Help Center ▾</button>
        <button className="hover:bg-gray-100 px-2 py-1 rounded transition">Log In</button>
        <button className="hover:bg-gray-100 px-2 py-1 rounded transition">Sign Up</button>
      </nav>
    </header>
  );
}
