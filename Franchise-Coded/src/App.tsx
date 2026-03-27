/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Franchise from './pages/Franchise';

function AppContent() {
  return (
    <div className="font-sans text-brand-black antialiased bg-white selection:bg-brand-orange selection:text-white flex flex-col min-h-screen">
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Franchise />} />
          <Route path="*" element={<Franchise />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
