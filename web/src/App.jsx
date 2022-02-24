import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import './App.scss';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import Monsters from './components/MonsterDisplay';

function App () {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <LoginButton />
      <LogoutButton />
      <Profile />
      <Monsters />
    </>
  )
}

export default App;
