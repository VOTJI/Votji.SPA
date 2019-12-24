import React from 'react';

import { Home } from './pages/home';
import { SignIn } from './pages/signIn';
import { LogIn } from './pages/logIn';

const App = () => {
  return (
    <div>
      <Home />
      <SignIn />
      <LogIn />
    </div>
  )
}
export default App;
