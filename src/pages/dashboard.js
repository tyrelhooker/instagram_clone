import React, { useEffect } from 'react';
import Header from '../components/Header';
import Timeline from '../components/Timeline';
import Sidebar from '../components/sidebar/index';

export default function Dashboard() {
  useEffect(() => {
    document.title = 'Instagram - Dashboard';
  }, []);

  return (
    <div className='bg-gray-100'>
      <Header />
      <div className='grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg'>
        <Timeline />
        <Sidebar />
      </div>

    </div>

  )
}