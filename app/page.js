// Home.js
"use client";
import React, { useState } from 'react';
import Navbar from './components/navbar';
import LocalTimeBackground from './components/local_background';
import WorldTimeBackground from './components/world_background';

const Home = () => {
  const [view, setView] = useState('local');
  const now = new Date().getTime(); // Get the current time as a timestamp

  return (
    <div className="flex flex-col h-screen">
      <Navbar onSelect={(selectedView) => setView(selectedView)} />
      <main className="flex-grow flex items-center justify-center">
        {view === 'local' ? (
          <LocalTimeBackground time={now} />
        ) : (
          <WorldTimeBackground timezone="Europe/London" />
        )}
      </main>
    </div>
  );
};

export default Home;
