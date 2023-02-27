import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="flex flex-col items-center">
        <h2 className="py-5">{user.name}</h2>
        <a href={`https://github.com/${user.nickname}/`} target="_blank">
          https://github.com/{user.nickname}
        </a>
      </div>
    )
  );
};

export default Profile;
