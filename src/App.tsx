import React from 'react';
import Home from './components/Home';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  return (
    <>
      <Home />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  );
}

export default App;
