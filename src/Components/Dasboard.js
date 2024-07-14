import React from 'react';
import Menu from './Menu';

function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h1>

      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <Menu />
      </div>
    </div>
  );
}

export default Dashboard;
