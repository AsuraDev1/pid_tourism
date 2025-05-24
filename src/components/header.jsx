import React from 'react';

function Header() {
  return (
    <header className="bg-[#6b5b51] text-white p-4 border-b border-[#8b7b71] shadow-lg">
      <div className="w-4/5 mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wider hover:text-[#f0e6d6] transition-all duration-300 cursor-pointer">
          CubaTravel
        </div>
        <nav>
          <ul className="flex items-center space-x-8">
            <li>
              <a href="#" className="text-white hover:text-[#f0e6d6] transition-all duration-300 relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f0e6d6] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li className="flex items-center group">
              <a href="#" className="text-white hover:text-[#f0e6d6] transition-all duration-300 relative">
                Language
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f0e6d6] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <span className="ml-1 text-xs transform group-hover:rotate-180 transition-transform duration-300">▼</span>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#f0e6d6] transition-all duration-300 relative group">
                Destiny
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f0e6d6] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#f0e6d6] transition-all duration-300 relative group">
                Book Flight
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f0e6d6] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <button className="btn-primary">
                Sign Up
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header; 