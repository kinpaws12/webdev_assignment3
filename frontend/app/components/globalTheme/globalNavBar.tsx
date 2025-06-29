
import { useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  {/* TO DO */}
  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const mockLocations = ["Nova Scotia", "Toronto", "New York", "Vancouver"];
const [locationIndex, setLocationIndex] = useState(0);

const handleLocationClick = () => {
  setLocationIndex((prevIndex) => (prevIndex + 1) % mockLocations.length);
};


  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-2 shadow-sm bg-white">
      {/* Left: Logo */}
      <div className="text-orange-500 font-bold text-xl sm:text-2xl whitespace-nowrap mr-2">
        eventflow
      </div>

      {/* Center: Search Box */}
      <div className="flex items-center bg-gray-200 rounded-full px-3 py-1 shadow-sm gap-2 flex-grow mx-2 max-w-[60%] sm:max-w-xl">
        {/* Search Icon & Input */}
        <div className="flex items-center flex-grow">
          <FaSearch className="text-gray-500 mr-1 sm:mr-2 text-sm sm:text-base" />
          <input
            type="text"
            placeholder="Search events"
            className="bg-transparent outline-none text-gray-700 placeholder-gray-500 w-full text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px h-5 bg-gray-300" />

        {/* Interactive Location */}
<button
  className="hidden sm:flex items-center text-sm text-gray-700 hover:text-pink-600 transition whitespace-nowrap"
  onClick={handleLocationClick}
>
  <FaMapMarkerAlt className="text-pink-500 mr-1" />
  <span className="whitespace-nowrap">{mockLocations[locationIndex]}</span>
</button>


        {/* Search Button */}
        <button
          className="bg-orange-500 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center hover:bg-orange-600 transition shrink-0"
          onClick={handleSearch}
        >
          <FaSearch className="text-black text-xs sm:text-base" />
        </button>
      </div>

      {/* Right: Hamburger Menu */}
      <div className="sm:hidden">
        <button onClick={() => setMenuOpen((prev) => !prev)}>
          <FaBars className="text-gray-800 text-xl" />
        </button>
      </div>

      {/* Right: Desktop Nav */}
      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } sm:flex items-center space-x-3 text-sm text-black ml-4 w-full sm:w-auto`}
      >
        <button className="hover:bg-gray-100 px-2 py-1 rounded transition">
          Help Center ▾
        </button>
        <button className="hover:bg-gray-100 px-2 py-1 rounded transition">
          Log In
        </button>
        <button className="hover:bg-gray-100 px-2 py-1 rounded transition">
          Sign Up
        </button>
      </nav>
    </header>
  );
}






