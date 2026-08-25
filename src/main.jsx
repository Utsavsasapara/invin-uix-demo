import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Fonts (self-hosted via @fontsource)
import '@fontsource-variable/inter';
import '@fontsource/jetbrains-mono';

import './index.css';
import App from './App.routes.jsx';
import 'invin-uix/tokens.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
