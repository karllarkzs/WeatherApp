import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton() {
  const { isAuthenticated, logout } = useAuth0();

  return (
    isAuthenticated && (
      <button
        className="bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 border border-black shadow-md"
        onClick={() => {
          logout({
            logoutParams: {
              returnTo: window.location.origin,
            },
          });
        }}
      >
        Log out
      </button>
    )
  );
}

export default LogoutButton;
