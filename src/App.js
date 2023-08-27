import React from 'react';
import Router from './Router';
import {GlobalProvider} from './context/GlobalState';

const App = () => {
  return (
    <GlobalProvider>
      <Router />
    </GlobalProvider>
  );
};

export default App;
