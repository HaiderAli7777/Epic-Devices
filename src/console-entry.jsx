import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.jsx';
createRoot(document.getElementById('root')).render(<App initialView="console" />);
requestAnimationFrame(() => document.getElementById('boot')?.remove());
