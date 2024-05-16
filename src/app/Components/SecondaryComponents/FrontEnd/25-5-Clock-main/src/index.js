// index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './Clock_App';

const root = createRoot(document.getElementById('root')); // Create a root container
root.render(<App />); // Render your components
