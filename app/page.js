"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Navbar from './components/navbar';
import Clock from './components/clock';
const WorldTime = dynamic(() => import('./components/world-clock'), { ssr: false });

const Home = () => {
  const [view, setView] = useState('local');
  const now = new Date().getTime(); // Get the current time as a timestamp

  return (
    <div className={`flex flex-col h-screen`}>
      <Navbar onSelect={(selectedView) => setView(selectedView)} />
      <main className="flex-grow flex items-center justify-center">
        {view === 'local' ? (
          <Clock time={now} />
        ) : (
          <WorldTime timezone="Europe/London" />
        )}
      </main>
    </div>
  );
};

export default Home;
