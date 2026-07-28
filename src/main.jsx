import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Fonts (self-hosted via @fontsource)
import '@fontsource-variable/inter';
import '@fontsource/jetbrains-mono';

import './index.css'
import Root from './Root.jsx';
import 'invin-uix/tokens.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
