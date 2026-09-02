import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Fonts (Geist + Geist Mono) are self-hosted by invin-uix via tokens.css —
// no @fontsource import needed.
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
