import { useState, useEffect } from 'react';
import UserProfilePresenter from './UserProfilePresenter';

const UserProfileContainer = () => {
  const [user, setUser] = useState(null);
  const [errorstatus, setErrorstatus] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      setErrorstatus(null);
      const response = await fetch('https://jsonplaceholder.typicode.com/use1');

      if (!response.ok) {
        throw new Error(`Server returned status: ${response.status}`);
      }

      const userData = await response.json();

      setUser(userData);
    } catch (error) {
      setErrorstatus(
        error.message || 'Something went wrong. Please try again.',
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchUserData();
    }, 2000);
  }, []);

  return (
    <div>
      UserProfileContainer - holds functional logic such as fetching data from
      server, error handling, etc..
      <h2>UserProfilePresenter-Component</h2>
      <UserProfilePresenter user={user} loading={loading} error={errorstatus} />
    </div>
  );
};

export default UserProfileContainer;
