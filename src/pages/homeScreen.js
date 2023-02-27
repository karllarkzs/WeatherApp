import React, { useState } from 'react';
import Header from '../components/header';
import Profile from '../components/Profile';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useMediaQuery } from 'react-responsive';

function HomeScreen() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth0();
  const [city, setCity] = useState();
  const isMobile = useMediaQuery({ maxWidth: 640 });

  if (!isAuthenticated) {
    navigate('/');
  }

  const onCityChange = (event) => {
    setCity(event.target.value);
  };

  const onSearch = () => {
    navigate(`/weather?city=${city}`);
  };
  return (
    <>
      <Header />
      <div className="flex items-start justify-center mx-auto max-w-screen-md h-screen">
        <div>
          <div className="py-8">
            {!isMobile && (
              <div>
                <div className="py-8">
                  <Profile />
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-2">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
                  <svg
                    className="h-4 w-4 fill-current text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M18.98 17.7l-4.83-4.83c1.15-1.43 1.83-3.21 1.83-5.17 0-4.42-3.58-8-8-8s-8 3.58-8 8 3.58 8 8 8c1.96 0 3.74-.7 5.17-1.83l4.83 4.83c.2.2.45.3.71.3s.51-.1.71-.3c.4-.4.4-1.02 0-1.42zM2 8c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6z" />
                  </svg>
                </span>
                <input
                  onChange={onCityChange}
                  type="text"
                  id="large-input"
                  placeholder="City"
                  className="block w-full pl-8 pr-2 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div className="mb-6">
              <button
                onClick={onSearch}
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Display Weather
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
