import React from 'react';
// import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Header from '../Header/Header';
import Staff from '../Staff/Staff';

function App() {
  return (
    <>
      <Header />
      <main>
        <Staff />
      </main>
    </>
  );
}

export default App;
