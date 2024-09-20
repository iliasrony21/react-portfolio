import React from 'react';
import { Outlet } from 'react-router-dom'; // Outlet to render matched route components
import { Header } from './Common/Header';
import { Footer } from './Common/Footer';
import './index.css';

export const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* Render the matched route's component here */}
      </main>
      <Footer />
    </div>
  );
};
