import React from 'react';
import { Outlet } from 'react-router-dom';
import PageLayout from './page-layout/PageLayout';

const MainLayout = () => {
  return (
    <div>
      <PageLayout />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
