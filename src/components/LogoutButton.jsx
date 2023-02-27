import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton() {
  const { isAuthenticated, logout } = useAuth0();

  return (
    isAuthenticated && (
      <button
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
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
