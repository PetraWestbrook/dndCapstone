import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import './App.scss';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import Monster from './components/MonsterDisplay';
import Monsters from './components/MonsterList';

function App () {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <LoginButton />
      <LogoutButton />
      <Profile />
      <Monster MonsterName='bandit'/>
      <Monsters />
    </>
  )
}

export default App;
