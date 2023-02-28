import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';

function LandingScreen() {
  const navigate = useNavigate();
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (isAuthenticated) {
    navigate('/home');
  }
  return (
    <>
      <Header />
      <div class="flex items-center justify-center full-height">
        <div class="flex flex-col items-start justify-center text-left px-5">
          <p class="text-left mb-8">
            Welcome to the weather forecast web application. Please login with
            your Github user to use the application and view the weather in your
            city.
          </p>
          <button
            onClick={loginWithRedirect}
            class="text-black bg-white border border-black hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default LandingScreen;
