/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Boarding from './pages/Boarding';

function AppContent() {
  return (
    <div className="font-sans text-brand-black antialiased bg-white selection:bg-brand-orange selection:text-white flex flex-col min-h-screen">
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Boarding />} />
          <Route path="*" element={<Boarding />} />
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
