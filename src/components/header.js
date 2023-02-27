import React from 'react';
import LogoutButton from './LogoutButton';
import { FaCloud } from 'react-icons/fa';

function Header() {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-zinc-500">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center">
          <FaCloud className="text-gray-800 mr-3" size={40} />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Weather Forecast
          </span>
        </div>
        <LogoutButton />
      </div>
    </nav>
  );
}

export default Header;
