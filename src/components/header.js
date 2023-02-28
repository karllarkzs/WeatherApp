import React from 'react';
import LogoutButton from './LogoutButton';
import { FaCloud } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import { useAuth0 } from '@auth0/auth0-react';

function Header() {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const { isAuthenticated } = useAuth0();

  return (
    <nav className="bg-white border-4 border-black border-l-0 border-r-0 px-2 sm:px-4 py-2.5 dark:bg-white-500">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center">
          <FaCloud className="text-gray-800 mr-3" size={40} />
          {(!isMobile || !isAuthenticated) && (
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black">
              Weather Forecast
            </span>
          )}
        </div>
        <LogoutButton />
      </div>
    </nav>
  );
}

export default Header;
